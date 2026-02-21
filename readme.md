# Installing
1. Use Python 3.10 or above.
2. Current directory should be `/build`.
3. Initialize venv with `python -m venv venv`.
4. Start venv with `venv\Scripts\activate`.
5. Install requirements `python -m pip install -r .\requirements.txt`.

# Usage
* `download.py` downloads basic node descriptions from the official documentation to `node_data.json`.
* `generate.py` generates stub "Markdown" in `doc_generated/` from `node_data.json`.
* `compile.py` compiles the "Markdown" in `doc_generated/` and `doc_written/` into the final HTML. Run `compile.py full` to run it for every doc. This also performs spelling/grammar check.
* `templating.py` templates the HTML/CSS/Javascript/SVG files in `templates/` into HTML.
* `python -m http.server 8000 -d /www/` to locally test.
* Simply push to Github to deploy the page.

"Markdown" is in quotes, because it's not a "standard" Markdown (if such thing even exists).
This is a simple, modified version of Markdown that is parsed by me.
The file `compile.py` IS the specification of the "Markdown" format.

# Legal
This is a repository for a non-commercial fansite. I am not affiliated with miHoYo / HoYoverse / COGNOSPHERE.
Genshin Impact, Milliastra Wonderland, and its related rights belong to HoYoverse.

This repository is provided as source-available, NOT open source.
I reserve all rights.
Any unauthorized use of this documentation for training any form of AI is strictly prohibited and may be subject to legal action.