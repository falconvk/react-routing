# ReactJS w/ react-router (skeleton)

 A skeleton structure for ReactJS development

### Included dependencies
Dependencies saved locally to ```package.json```
* react
* react-dom
* babelify
* watchify
* babel-preset-react
* babel-preset-es2015
* react-router
* history

### Included libraries
Libraries stored locally in ```public/js``` & ```public/css``` and included in ```index.html```
- jQuery (JS) minified
- Bootstrap (JS) minified
- Bootstrap (CSS) minified
- Bootstrap theme (CSS) minified

### Usage
You need Browserify globally installed:

    $ npm i -g browserify

Open the project root directory and run:

    $ npm install

### Start script

The ```package.json``` contains the default start script:

    watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js

where ```src/main.jsx``` is your main entry point and ```public/js/main.js``` is the output bundle js file.

### Run

    npm run

will run the browserify bundler and keep running in watch mode in the background.
It will detect any code changes (on file save) and automatically re-bundle the files.

### Other

```.gitignore``` by default contains the following

    node_modules/
    .idea/

