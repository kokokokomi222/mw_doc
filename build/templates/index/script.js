const NODE_TYPE_NAME = {
    'execution': 'Execution',
    'event': 'Event',
    'flow': 'Flow Control',
    'query': 'Query',
    'operation': 'Operation',
};
let NODE_DATA = {};

fetch('/mw_doc/nodes.json').then(
    response => {
        if (response.ok) {
            return response.json();
        }
    }
).then(
    data => {
        let non_stub = new Object();
        let all_node = new Object();
        let total_non_stub = 0;
        let total_all_node = 0;
        for (let key of Object.keys(NODE_TYPE_NAME)) {
            non_stub[key] = 0;
            all_node[key] = 0;
        }

        for (let node of data['nodes']) {
            NODE_DATA[node['slug']] = node;
            const key = node['type'];
            if (!node['stub']) {
                non_stub[key] += 1;
                total_non_stub += 1;
            }
            all_node[key] += 1;
            total_all_node += 1;
        }

        const stat_ul = document.getElementById('server_node_stat');
        for (let key of Object.keys(NODE_TYPE_NAME)) {
            let stat_entry = document.createElement('li');
            stat_entry.innerHTML = `<span class="node ${key}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><use x="0" y="0" width="1" height="1" href="#${key}_icon"/></svg> ${NODE_TYPE_NAME[key]}</span> ${non_stub[key]}/${all_node[key]}`;
            stat_ul.appendChild(stat_entry);
        }

        const number_span = document.getElementById('server_node_number');
        number_span.innerText = `${total_non_stub} (~${(total_non_stub / total_all_node * 100).toFixed(1)}% done)`
    }
);