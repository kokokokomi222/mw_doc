from bs4 import BeautifulSoup
import requests
import re
import json
from collections import OrderedDict

URL_PARAM = {
    'execution': 'mhrgq1iit178',
    'event': 'mh9ji0030dzs',
    'flow': 'mh0kvz9d42e2',
    'query': 'mhrm9yin7qsc',
    'operation': 'mhinnxrxbf6m',
}

RE_TITLE = re.compile(r'^\d+\.\s*(.+)$')

output_obj = OrderedDict()  # maps node title str to [node_type str, description str, parameter table array]
current_title = None
current_section = None

for node_type, param in URL_PARAM.items():
    print('#' * 40)
    print(node_type)
    print('#' * 40)
    response = requests.get(f'https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/{param}/content.html?v=1016&game_biz=hk4eugc_global&lang=en-us')
    soup = BeautifulSoup(response.text, 'html.parser')
    for child in soup.children:
        match child.name:
            case 'h2':
                title = ''.join(child.stripped_strings)
                match = RE_TITLE.match(title)
                if match:
                    current_title = match.group(1)
                    output_obj[current_title] = [node_type, '', []]
            case 'p':
                content = ' '.join(child.stripped_strings)
                match content:
                    case '':
                        pass
                    case 'Node Functions':
                        current_section = 0
                    case 'Node Parameters':
                        current_section = 1
                    case _:
                        if current_section == 0:
                            output_obj[current_title][1] += ' ' + content
                        else:
                            print('Got content but not in the description section:')
                            print(f'    title: {current_title}')
                            print(f'    current_section: {current_section}')
                            print(f'    content: {content}')
            case 'div':
                table = child.contents[0]
                if table.name != 'table':
                    h2 = child.find('h2')
                    if h2:
                        title = ''.join(h2.stripped_strings)
                        current_title = title
                        output_obj[current_title] = [node_type, '', []]
                        print(f'Processed unusual title in div: {title}')
                    else:
                        print('Got div without table:')
                        print(f'    title: {current_title}')
                        print(f'    current_section: {current_section}')
                        print(f'    div: {child}')
                else:
                    table_obj = [
                        [
                            ''.join(data.stripped_strings)
                            for data in row.children
                        ]
                        for row in table.find_all('tr')
                    ]
                    if table_obj[0][0] == 'Parameter Type':
                        output_obj[current_title][2] = table_obj[1:]
                        if current_section != 1:
                            print('Got table but not in the parameter section:')
                            print(f'    title: {current_title}')
                            print(f'    current_section: {current_section}')
                            print(f'    table: {table_obj}')
                    else:
                        print('Got unknown table:')
                        print(f'    title: {current_title}')
                        print(f'    current_section: {current_section}')
                        print(f'    table: {table_obj}')

# hardcoded fix for now
output_obj['Get the Preset Status Value of the Complex Creation'][1] = 'Get the preset status value of the complex creation'
output_obj['Range Limiting Operation'][1] = '''Clamps the input value to the range [lower limit, upper limit] (both bounds inclusive) and outputs the result
* If the input falls within [lower limit, upper limit], returns the original value
*If the input is below the lower limit, returns the lower limit; if it exceeds the upper limit, returns the upper limit
*If the lower limit is greater than the upper limit, treats the input as invalid and returns an illegal value'''

with open('node_data.json', 'w', encoding='utf-8') as file:
    json.dump(output_obj, file, indent=4)