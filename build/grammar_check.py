from bs4 import BeautifulSoup
import language_tool_python as ltp

IGNORED_RULES = {
    'ENGLISH_WORD_REPEAT_BEGINNING_RULE',
}
IGNORED_MATCH = {
    ('multiplication', 'PRP_MD_NN', 'can also underflow'),
    ('query_server_time_zone', 'COMMA_PARENTHESIS_WHITESPACE', 'TW,HK,MO'),
    ('weighted_random', 'I_LOWERCASE', 'this node outputting i is'),
}
CUSTOM_WORDS = [
    'Miliastra',

    'Manekin',
    'Manekina',
    'Kokomi',
    'Furina',

    'anemo',
    'geo',
    'electro',
    'dendro',
    'hydro',
    'pyro',
    'cryo',

    'Moonglow',
]
ltp_tool = ltp.LanguageTool('en-US', new_spellings=CUSTOM_WORDS)

YELLOW = '\x1b\x5b33;22m'
BLUE   = '\x1b\x5b34;22m'
CYAN   = '\x1b\x5b36;22m'
RESET  = '\x1b\x5b39;22m'

# returns word count
def check_spell(html_file_path:str) -> int:
    def approve_match(match) -> bool:
        if match.rule_id in IGNORED_RULES:
            return False
        for slug, rule, sample in IGNORED_MATCH:
            if slug in html_file_path and match.rule_id == rule and sample in match.context:
                return False
        return True

    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_text = file.read()

    soup = BeautifulSoup(html_text, 'html.parser')
    for title in soup.find_all('h1'):
        title.string = ''
    for title in soup.find_all('h2'):
        title.string = ''
    for a in soup.find_all('a', class_='node'):
        a.string = f'"{a.get_text().strip()}"'
    for span in soup.find_all('span', class_='input_var'):
        span.string = f'"{span.get_text().strip()}"'
    for span in soup.find_all('span', class_='output_var'):
        span.string = f'"{span.get_text().strip()}"'
    for pre in soup.find_all('pre'):
        pre.string = ''
    for code in soup.find_all('code'):
        code_string = code.get_text()
        if code_string.startswith('[') and code_string.endswith(']'):
            code.string = '(a specific list)'
    raw_text = soup.get_text()
    lines = raw_text.split('\n')
    lines = [line.strip() for line in lines]
    raw_text = '\n'.join(lines)

    matches = ltp_tool.check(raw_text)
    matches = [match for match in matches if approve_match(match)]
    if matches:
        print(CYAN + '='*60)
        print(f'{CYAN}= GRAMMAR CHECK FOR {html_file_path}')
        print(CYAN + '='*60)
    for match in matches:
        i = match.offset_in_context
        j = i + match.error_length
        print(f'{BLUE}Message:{RESET}', match.message, f'({YELLOW}{match.rule_id}{RESET})')
        print(f'{BLUE}Suggestion:{RESET}', ', '.join(match.replacements[:10]))
        print(f'{BLUE}Context:{RESET}', match.context)
        print(' '*8, ' '*i + YELLOW + '^'*(j-i) + RESET)
        print()

    return len(raw_text.split())

if __name__ == '__main__':
    check_spell('../www/data/create_entity.html')