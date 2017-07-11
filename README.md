# Princeton CSA

Repository for the official website of the Princeton University Chinese Students Association (CSA).

## Getting Started
- This is a static GitHub pages site. Clone the GitHub repo and you're ready to develop. No installations necessary unless if you don't have Python on your computer (ignore bower for now).
- To view site locally, run `python -m SimpleHTTPServer 4000` in the same directory as the repository locally. Then visit `localhost:4000` in your browser. You will need to manually refresh the page whenever you make changes to files.
    - The website needs to be run on a server because Chrome can't handle cross-origin requests. You can probably view `index.html` without error in Safari or Firefox, but otherwise if you want to use Chrome you need to run a server.
    - You don't need to necessarily run a Python server, but it's probably the easiest way to get the site up locally. Feel free to start up another server instead.
- Pushing to the `master` branch automatically makes your latest commit live at [www.princetoncsa.org](www.princetoncsa.org).
