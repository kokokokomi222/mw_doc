const STUB = `<div class="stub">
    <img src="/stub.webp" alt="Stub"/>
    <p>
        This documentation page is a stub.
        It is an automatically generated placeholder.
    </p>
</div>`;
const FOOTER = `<footer>
    <hr/>
    This is a non-commercial fansite. This site is not affiliated with miHoYo / HoYoverse / COGNOSPHERE. <br/>
    Genshin Impact, Milliastra Wonderland, and its related rights belong to HoYoverse. <br/>
    Any unauthorized reproduction, distribution, or use of content on this website,
    including for the purposes of training any form of artificial intelligence,
    without permission is strictly prohibited and may be subject to legal action.
</footer>`;

function nav_fold_toggle(event) {
    nav.classList.toggle('nav_collapsed');
}

let nav = document.getElementById("nav");
let nav_fold_button = document.getElementById("nav_fold_button");
nav_fold_button.addEventListener('click', nav_fold_toggle);
let nav_list = document.getElementById("nav_list");

let search = document.getElementById('search');
function search_update(event) {
    x = event.currentTarget.value.toLowerCase().replace(" ", "_");
    for (let child of nav_list.children) {
        if (child.getAttribute('slug').toLowerCase().includes(x)) {
            child.classList.remove('search_hide');
        }
        else {
            child.classList.add('search_hide');
        }
    }
}
search.addEventListener('input', search_update);

const modal = document.getElementById("modal");
modal.addEventListener('mousedown', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

function image_clicked(event) {
    if (event.currentTarget.getAttribute('src') == 'slug.webp') {
        return;
    }

    const preview = document.createElement('img');
    preview.src = event.currentTarget.getAttribute('src');
    preview.style.display = "block";

    modal.replaceChildren(preview);
    modal.showModal();
}

let NODE_DATA = {};

async function load_node_doc(slug, nav_method='push') {
    fetch(`/data/${slug}.html`).then(
        response => {
            if (response.ok) {
                return response.text();
            }
        }
    ).then(
        async (data) => {                    
            // bit messy, but I'm just gonna put something quick for now to prevent the race condition.
            await new Promise(
                (resolve) => {
                    if (Object.entries(NODE_DATA).length > 0) {
                        resolve();
                    }
                    else {
                        const interval = setInterval(() => {
                            if (Object.entries(NODE_DATA).length > 0) {
                                clearInterval(interval);
                                resolve();
                            }
                        }, 100);
                    }
                }
            );

            let content = document.getElementById('content');
            content.innerHTML = (NODE_DATA[slug]['stub']? STUB : '') + data + FOOTER;
            for (let img of content.querySelectorAll('img.expandable_img')) {
                img.addEventListener('click', image_clicked);
            }
            for (let a of content.querySelectorAll('a')) {
                if (a.classList.contains('outbound_link')) {
                    continue;
                }
                const href = a.getAttribute('href');
                const slug = href.substring(href.indexOf("node=")+5);
                a.addEventListener('click', async (event) => {event.preventDefault(); load_node_doc(slug, 'push')});
            }
            window.scrollTo({ top: 0, behavior: 'instant' });

            switch(nav_method) {
                case 'first':
                    history.replaceState(slug, '', `?node=${slug}`);
                break;
                case 'push':
                    history.pushState(slug, '', `?node=${slug}`);
                break;
                case 'pop':
                    // do nothing
                break;
            }
        }
    );
}

fetch('/nodes.json').then(
    response => {
        if (response.ok) {
            return response.json();
        }
    }
).then(
    data => {
        let new_anchors = [];
        for (let node of data['nodes']) {
            NODE_DATA[node['slug']] = node;
            // if (!node['stub']) {
            if (true) {
                let a = document.createElement('a');
                a.classList.add(node['type']);
                a.setAttribute('slug', node['slug']);
                a.setAttribute('href', `?node=${node['slug']}`);
                let stubbed = node['stub'] == false ? '' : '❌ ';
                a.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><use x="0" y="0" width="1" height="1" href="#${node['type']}_icon"/></svg> ${stubbed}${node['name']}</div>`;
                a.addEventListener('click', async (event) => {event.preventDefault(); load_node_doc(node['slug'], 'push')});
                new_anchors.push(a);
            }
        }
        nav_list.replaceChildren(...new_anchors);
    }
);

let search_params = new URLSearchParams(window.location.search);
if (search_params.has('node')) {
    load_node_doc(search_params.get('node'), 'first');
}
else {
    const DEFAULT_NODE = 'print_string';
    search_params.set('node', DEFAULT_NODE);
    load_node_doc(DEFAULT_NODE, 'first');
}
window.addEventListener('popstate', (event) => {
    load_node_doc(event.state, 'pop');
});