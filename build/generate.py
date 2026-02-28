import os
import json
import string

NODE_TYPE_FULL_NAME = {
    'execution': 'Execution Node',
    'event': 'Event Node',
    'flow': 'Flow Control Node',
    'query': 'Query Node',
    'operation': 'Operation Node',
}

NODE_NAME_FIX = {
    "Get Entities With Specified Prefab on the Field":
    "Get Entities With Specified Prefab ID on the Field",
}

def slug(name:str) -> str:
    s = ''.join(
        c if c in string.ascii_lowercase or c in '0123456789' else '_' if c in ' -_/' else ''
        for c in name.lower()
    )
    while s.endswith('_'):
        s = s[:-1]
    return s

def escape(text:str) -> str:
    text = text.replace('[', '\[')
    text = text.replace(']', '\]')
    text = text.replace('*', '\*')
    return text


with open('node_data.json', 'r', encoding='utf-8') as file:
    official_doc = json.load(file)

if __name__ == '__main__':
    node_list = []
    generated_docs = dict()
    for node_name, (node_type, description, params) in official_doc.items():
        # hardcoded...
        if node_name == 'SetListValue':
            node_name = 'Set List Value'
        node_slug = slug(node_name)
        node_name = NODE_NAME_FIX.get(node_name, node_name)
        node_list.append({
            'slug': node_slug,
            'name': node_name,
            'type': node_type,
            'stub': True,
        })

        inputs = []
        outputs = []
        for param_inout, name, param_type, *param_desc in params:
            name = name.replace(' ', '_')
            if param_inout == '':
                continue
            elif param_inout.lower().startswith('input'):
                inputs.append(f'* [input:{name}] ({param_type}) - {"".join(map(escape, param_desc))}')
            elif param_inout.lower().startswith('output'):
                outputs.append(f'* [output:{name}] ({param_type}) - {"".join(map(escape, param_desc))}')
            else:
                print(f'unknown param in {node_name}: {name} of {param_inout}')
        input_joined = '\n'.join(inputs)
        output_joined = '\n'.join(outputs)

        if input_joined:
            input_joined = '# Input Parameters\n' + input_joined + '\n\n'
        if output_joined:
            output_joined = '# Output Values\n' + output_joined + '\n\n'
        
        new_doc = f'''# Summary
{escape(description)}

{input_joined}{output_joined}# Usage
**TO BE ADDED**

# Example
**TO BE ADDED**

# Notes
* **TO BE ADDED**

# Performance
**TO BE ADDED**

# See Also
* **TO BE ADDED**

# Authors
'''
        generated_docs[node_slug] = new_doc

    with open('../docs/nodes.json', 'w', encoding='utf-8') as file:
        json.dump({'nodes': node_list}, file, indent=4)

    for dir in ['doc_generated', 'doc_written']:
        os.makedirs(f'{dir}/_', exist_ok=True)
        for c in string.ascii_uppercase:
            os.makedirs(f'{dir}/{c}', exist_ok=True)

    for node_slug, doc in generated_docs.items():
        first_char = node_slug[0].upper()
        if first_char not in string.ascii_uppercase:
            first_char = '_'
        with open(f'doc_generated/{first_char}/{node_slug}.md', 'w', encoding='utf-8') as file:
            file.write(doc)