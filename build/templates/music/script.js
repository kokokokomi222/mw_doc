let TAG_NAME = new Object();     // id:int => name:str
let TAG_COUNT = new Object();    // id:int => count:int
let TAG_CATEGORY = new Object(); // id:int => category_id:int
let CATEGORIES = [];
let MUSIC_FROM_ID = new Object();
let current_music_id = -1;
let plyr_player = undefined;

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

function reset_all_tags(event) {
    for (let tag of document.querySelectorAll("#tag_list > .tag_group > div")) {
        set_tag(tag, "maybe");
    }
    refresh_music_list();
}

function set_all_tags(event) {
    const state = event.currentTarget.getAttribute('data-state');
    const category_id = event.currentTarget.getAttribute('data-category-id');
    for (let tag of document.querySelectorAll(`#tag_list .tag_group_${category_id}`)) {
        set_tag(tag, state);
    }
    refresh_music_list();
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
    refresh_music_list();
}

function refresh_music_list() {
    let search_text = canonize(document.getElementById('search').value);
    let checked = [];
    let banned = new Object();
    let num_active_tags = 0;
    for (let tag of document.querySelectorAll("#tag_list .tag_group > div")) {
        const state = tag.getAttribute('data-state');
        const tag_id = Number(tag.getAttribute('data-tag-id'));
        switch (state) {
            case "yes":
                checked.push(tag_id);
                num_active_tags += 1;
            break;
            case "no":
                banned[tag_id] = true;
                num_active_tags += 1;
            break;
        }
    }

    let count = 0;
    for (let child of document.getElementById("nav_list").children) {
        const music_id = child.getAttribute('data-music-id');
        const music = MUSIC_FROM_ID[music_id];
        const tag_ids = music["tag_ids"];

        function is_passing() {
            if (
                !music["canon_name"].includes(search_text) &&
                !music_id.toString().includes(search_text) &&
                !canonize(music["description"]).includes(search_text)
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
            if (count % 2 == 0) {
                child.classList.add('even_color');
            }
            else {
                child.classList.remove('even_color');
            }
        }
        else {
            child.classList.add('hide');
        }
    }

    document.getElementById('nav_tags_active').style.display = num_active_tags > 0 ? "block" : "none";
    document.querySelector('#nav_tags_active > span').innerText = num_active_tags > 1 ? `${num_active_tags} tags active` : "1 tag active";

    document.getElementById('effect_count').innerText = count.toString();
}

async function copy_music_id() {
    await navigator.clipboard.writeText(`${current_music_id}`);
    await show_quick_message('Copied effect configuration ID to clipboard');
}

function load_music(music_id) {
    current_music_id = music_id;
    const music = MUSIC_FROM_ID[music_id];
    const content_div = document.getElementById('content');
    
    const title = content_div.querySelector('h2');
    title.innerHTML = `${music["name"]} - <a onclick="copy_music_id();">ID: ${music_id} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" title="Copy ID to clipboard"><use x="0" y="0" width="1" height="1" href="#clipboard_icon"></use></svg></a>`;

    let tags = [];
    for (let tag_id of music["tag_ids"]) {
        let tag = document.createElement('div');
        tag.classList.add(`tag_group_${TAG_CATEGORY[tag_id]}`);
        tag.innerHTML = `<span>${TAG_NAME[tag_id]}</span>`;
        tags.push(tag);
    }
    const tag_group = content_div.querySelector('div.tag_group');
    tag_group.replaceChildren(...tags);

    // const video_div = content_div.querySelector('#video_container div');
    if (plyr_player == undefined) {
        const video_div = content_div.querySelector('#video_container div');
        video_div.setAttribute('data-plyr-embed-id', music['youtube_id']);
        plyr_player = new Plyr('#content #video_container div', {
            'autoplay': true,
            'ratio': '3:1',
            'youtube': {
                autoplay: 1,
                noCookie:true 
            },
        });
    }
    plyr_player.source = {
        type: 'video',
        sources: [
            {
                src: music['youtube_id'],
                provider: 'youtube',
            },
        ],
    };
    // video_div.innerHTML = `<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="${music['youtube_id']}"></div>`;
    // `
    //     <iframe
    //         src="https://www.youtube.com/embed/${music['youtube_id']}"
    //         title="YouTube video player"
    //         frameborder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         referrerpolicy="strict-origin-when-cross-origin"
    //         allowfullscreen
    //     ></iframe>
    // `;

    const album = content_div.querySelector('#music_album');
    album.innerText = `${music['album']} (Disc ${music['disc_num']}, Track ${music['track_num']})`;
    const duration = content_div.querySelector('#music_duration');
    duration.innerText = music['duration_string'];
    const bpm = content_div.querySelector('#music_bpm');
    bpm.innerText = music['bpm'];
    const desc = content_div.querySelector('#music_description');
    desc.innerText = music['description'];
    // const wiki = content_div.querySelector('#music_wiki');
    // wiki.innerText = music['wiki'];

    for (let music_div of document.querySelectorAll('#nav_list .selected')) {
        music_div.classList.remove('selected');
    }
    document.querySelector(`#nav_list [data-music-id="${music_id}"]`).classList.add('selected');
}

function music_selected(event) {
    load_music(event.currentTarget.getAttribute("data-music-id"));
}

fetch('/mw_doc/music_data.json').then(
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
        for (let music of data['musics']) {
            let name = music["name"];
            music["canon_name"] = canonize(name);
            const t = music['duration'];
            const t_sec = t%60;
            const t_min = (t-t_sec) / 60;
            music['duration_string'] = `${t_min.toFixed(0)}:${t_sec.toString(10).padStart(2, '0')}`;
            MUSIC_FROM_ID[music['guid']] = music;
            for (let tag_id of music["tag_ids"]) {
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
                // tags.sort((a, b) => (b[1]-a[1]));
                for (let tag of tags) {
                    tag_group.appendChild(tag[0]);
                }
                nav_children.push(tag_group);
            }

            const tag_list_div = document.getElementById("tag_list");
            tag_list_div.replaceChildren(...nav_children);
        }

        // fill music nav
        {
            let musics = [];

            for (let music of data['musics']) {
                const music_div = document.createElement('div');
                music_div.setAttribute('data-music-id', music["guid"]);
                music_div.innerHTML = `<span>${music["name"]}</span><span class="music_duration">${music['duration_string']}</span><span>${music["guid"]}</span>`;
                musics.push(music_div);
                music_div.addEventListener("click", music_selected);
            }

            const nav_list_div = document.getElementById("nav_list");
            nav_list_div.replaceChildren(...musics);
            refresh_music_list();

            let search_params = new URLSearchParams(window.location.search);
            if (search_params.has('music')) {
                load_music(Number(search_params.get('music')));
            }
            else {
                load_music(10001);
            }
        }
        
        let search = document.getElementById('search');
        search.addEventListener('input', refresh_music_list);
    }
)