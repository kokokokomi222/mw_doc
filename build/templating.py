import string
import os

with open('templates/base.html', 'r', encoding='utf-8') as file:
    TEMPLATE = string.Template(file.read())

def dump(path:str) -> str:
    full_path = os.path.join('templates/', path)
    if not os.path.isfile(full_path):
        return ''
    with open(full_path, 'r', encoding='utf-8') as file:
        return file.read()

CSS = dump('global.css')
SVG = dump('symbols.svg')

def page(slug:str, title:str, url:str, header_breadcrumb:str) -> str:
    path = f'../docs/{slug}/index.html' if slug != 'index' else f'../docs/index.html'

    with open(path, 'w', encoding='utf-8') as file:
        file.write(TEMPLATE.substitute(
            title = title,
            global_css = CSS,
            local_css = dump(f'{slug}/local.css'),
            svg = SVG,
            url = url,
            header_breadcrumb = header_breadcrumb,
            content = dump(f'{slug}/content.html'),
            script = dump(f'{slug}/script.js'),
        ))

page('server_nodes', 'Server Nodes', '/server_nodes/', '<a href="/mw_doc/">Koko\'s MW Doc</a> / Server Nodes')
page('about', 'About', '/about/', '<a href="/mw_doc/">Koko\'s MW Doc</a> / About')
page('index', 'Home', '/', 'Koko\'s MW Doc')

# TODO: handle footer