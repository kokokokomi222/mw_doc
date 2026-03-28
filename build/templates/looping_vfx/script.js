let TAG_NAME = new Object();     // id:int => name:str
let TAG_COUNT = new Object();    // id:int => count:int
let TAG_CATEGORY = new Object(); // id:int => category_id:int
let CATEGORIES = [];
let EFFECTS = [];
let EFFECT_FROM_ID = new Object();
let current_effect_id = -1;

function canonize(s) {
    s = s.toLowerCase();
    s = s.replace(/[_\-]/g, ' ');
    s = s.replace(/[^a-z0-9 ]/g, '');    
    return s;
}

function set_tag(tag, state) {
    tag.setAttribute("data-state", state);
    const circle = tag.querySelector('div');
    switch (state) {
        case 'yes':
            circle.innerText = "✔️";
        break;
        case 'no':
            circle.innerText = "❌";
        break;
        case 'maybe':
            circle.innerText = "";
        break;
        default:
            console.log(tag, 'state got set to something unexpected:', state);
            throw new Error("state got set to something unexpected");
        break;
    }
}

function set_all_tags(event) {
    const state = event.currentTarget.getAttribute('data-state');
    const category_id = event.currentTarget.getAttribute('data-category-id');
    for (let tag of document.querySelectorAll(`#tag_list .tag_group_${category_id}`)) {
        set_tag(tag, state);
    }
    refresh_effect_list();
}

function toggle_tag(event) {
    const tag = event.currentTarget;
    if (tag.getAttribute("data-state") == 'maybe') {
        if (event.ctrlKey) {  // todo: what about mobile devices???
            set_tag(tag, "no");
        }
        else
        {
            set_tag(tag, "yes");
        }
    }
    else {
        set_tag(tag, "maybe");
    }
    refresh_effect_list();
}

function refresh_effect_list() {
    let search_text = canonize(document.getElementById('search').value);
    let checked = [];
    let banned = new Object();
    for (let tag of document.querySelectorAll("#tag_list .tag_group > div")) {
        const state = tag.getAttribute('data-state');
        const tag_id = Number(tag.getAttribute('data-tag-id'));
        switch (state) {
            case "yes":
                checked.push(tag_id);
            break;
            case "no":
                banned[tag_id] = true;
            break;
        }
    }

    let count = 0;
    for (let child of document.getElementById("nav_list").children) {
        const effect_id = child.getAttribute('data-effect-id');
        const effect = EFFECT_FROM_ID[effect_id];
        const tag_ids = effect["tag_ids"];

        function is_passing() {
            if (
                !effect["canon_name"].includes(search_text) &&
                !effect_id.toString().includes(search_text)
            ) {
                return false
            }
            for (let tag_id of checked) {
                if (!tag_ids.includes(tag_id)) {
                    return false;
                }
            }
            for (let tag_id of tag_ids) {
                if (banned[tag_id]) {
                    return false;
                }
            }            
            return true;
        }

        if (is_passing()) {
            child.classList.remove('hide');
            count += 1;
        }
        else {
            child.classList.add('hide');
        }
    }

    document.getElementById('effect_count').innerText = count.toString();
}

async function copy_effect_id() {
    await navigator.clipboard.writeText(`${current_effect_id}`);
    await show_quick_message('Copied effect configuration ID to clipboard');
}

function load_effect(effect_id) {
    current_effect_id = effect_id;
    const effect = EFFECT_FROM_ID[effect_id];
    const content_div = document.getElementById('content');
    
    const title = content_div.querySelector('h2');
    title.innerHTML = `${effect["display_name"]} - <a onclick="copy_effect_id();">ID: ${effect_id} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" title="Copy ID to clipboard"><use x="0" y="0" width="1" height="1" href="#clipboard_icon"></use></svg></a>`;

    let tags = [];
    for (let tag_id of effect["tag_ids"]) {
        let tag = document.createElement('div');
        tag.classList.add(`tag_group_${TAG_CATEGORY[tag_id]}`);
        tag.innerHTML = `<span>${TAG_NAME[tag_id]}</span>`;
        tags.push(tag);
    }
    const tag_group = content_div.querySelector('div.tag_group');
    tag_group.replaceChildren(...tags);

    const video_source = content_div.querySelector('source');
    video_source.setAttribute('src', `/mw_doc/video/${effect_id}.mp4`);
    const video = content_div.querySelector('video');
    video.load();

    for (let effect_div of document.querySelectorAll('#nav_list .selected')) {
        effect_div.classList.remove('selected');
    }
    document.querySelector(`#nav_list [data-effect-id="${effect_id}"]`).classList.add('selected');

    const overlay = document.getElementById('video_overlay');
    overlay.style.display = "none";
}

function effect_selected(event) {
    load_effect(event.currentTarget.getAttribute("data-effect-id"));
}

function remove_overlay(event) {
    event.currentTarget.style.display = "none";
    const video = document.querySelector('#content video');
    video.play();
}

function switch_view(view_index) {
    switch (view_index) {
        case 0:
            document.getElementById('nav_list').classList.remove('tile_view');
            document.getElementById('nav_list').classList.add('list_view');
        break;
        case 1:
            document.getElementById('nav_list').classList.remove('list_view');
            document.getElementById('nav_list').classList.add('tile_view');
        break;
    }
}

fetch('/mw_doc/vfx_looping.json').then(
    response => {
        if (response.ok) {
            return response.json();
        }
    }
).then(
    data => {
        // populate data
        for (let tag of data["tags"]) {
            TAG_NAME[tag["tag_id"]] = tag["name"];
            TAG_COUNT[tag["tag_id"]] = 0;
        }
        CATEGORIES = data["tag_categories"];
        for (let [category_id, category] of CATEGORIES.entries()) {
            for (let tag_id of category["tag_ids"]) {
                TAG_CATEGORY[tag_id] = category_id;
            }
        }
        EFFECTS = data["effects"];
        for (let effect of data["effects"]) {
            let name = effect["name"];
            effect["canon_name"] = canonize(name);
            name = name.replace(/([a-z])([A-Z])/g, '$1<wbr/>$2');
            name = name.replace(/_(.)/g, '_<wbr/>$1');
            name = name.replace(/^([^_]+)_/g, '<span class="creature_name">$1</span>_');
            effect["display_name"] = name;

            EFFECT_FROM_ID[effect["guid"]] = effect;
            for (let tag_id of effect["tag_ids"]) {
                TAG_COUNT[tag_id] += 1;
            }
        }

        // fill tags nav
        {
            let nav_children = [];

            for (let [category_id, category] of CATEGORIES.entries()) {
                const tag_title_bar = document.createElement('div');
                tag_title_bar.classList.add('title_bar');
                let title_elements = [];
                const title = document.createElement('h3');
                title.innerText = category["name"];
                title_elements.push(title);
                const separator = document.createElement('div');
                title_elements.push(separator);
                const BUTTONS = [
                    // ["yes"  , "✔️ Check All"],
                    ["maybe", "⚪ Reset All"],
                    ["no"   , "❌ Ban All"],
                ];
                for (let [state, text] of BUTTONS) {
                    const all_button = document.createElement('span');
                    all_button.setAttribute('data-state', state);
                    all_button.setAttribute('data-category-id', category_id);
                    all_button.classList.add('button_all');
                    all_button.innerText = text;
                    all_button.addEventListener('click', set_all_tags);
                    title_elements.push(all_button);
                }
                tag_title_bar.replaceChildren(...title_elements);
                nav_children.push(tag_title_bar);

                const tag_group = document.createElement('div');
                tag_group.classList.add('tag_group');
                let tags = [];
                for (let tag_id of category["tag_ids"]) {
                    let count = TAG_COUNT[tag_id];
                    if (count > 0) {
                        const tag = document.createElement('div');
                        tag.classList.add(`tag_group_${TAG_CATEGORY[tag_id]}`);
                        tag.setAttribute('data-state', 'maybe');
                        tag.setAttribute('data-tag-id', tag_id);
                        tag.innerHTML = `<div></div><span>${TAG_NAME[tag_id]}</span><span>${count}</span>`;
                        tag.addEventListener('click', toggle_tag);
                        tags.push([tag, count]);
                    }
                }
                tags.sort((a, b) => (b[1]-a[1]));
                for (let tag of tags) {
                    tag_group.appendChild(tag[0]);
                }
                nav_children.push(tag_group);
            }

            const tag_list_div = document.getElementById("tag_list");
            tag_list_div.replaceChildren(...nav_children);
        }

        // fill effects nav
        {
            let effects = [];

            for (let effect of data["effects"]) {
                const effect_div = document.createElement('div');
                effect_div.setAttribute('data-effect-id', effect["guid"]);
                effect_div.innerHTML = `<img src="/mw_doc/kokomi.webp" alt=""/><span>${effect["display_name"]}</span><span>${effect["guid"]}</span>`;
                effects.push(effect_div);
                effect_div.addEventListener("click", effect_selected);
            }

            const nav_list_div = document.getElementById("nav_list");
            nav_list_div.replaceChildren(...effects);
            refresh_effect_list();

            let search_params = new URLSearchParams(window.location.search);
            if (search_params.has('vfx')) {
                load_effect(Number(search_params.get('vfx')));
            }
            else {
                load_effect(EFFECTS[0]['guid']);
            }

            const overlay = document.getElementById('video_overlay');
            overlay.style.display = "flex";
            overlay.addEventListener("click", remove_overlay);
        }
        
        let search = document.getElementById('search');
        search.addEventListener('input', refresh_effect_list);
    }
)