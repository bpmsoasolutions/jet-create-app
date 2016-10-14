# jet-create-app

Create oracle jet apps with no build configuration.

## How to use it

```sh
npm install -g jet-create-app

jet-create-app my-app
cd my-app/
npm run dev

```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Getting Started

### Installation

```sh
npm install -g jet-create-app
```

**You’ll need to have Node >= 6 and npm >= 3.** You can use nvm to easily switch Node versions between different projects.

**This tool doesn’t assume a Node backend.** The Node installation is only required for the build tools that rely on it locally, such as RJS and Babel.

### Creating an App

To create a new app, run:

```sh
jet-create-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install bower dependencies:

```
my-app/
├── README.md
├── app
│   ├── README-HOOKS.md
│   ├── app-settings.json
│   ├── config.xml
│   ├── merges
│   ├── platforms
│   │   └── platforms.json
│   ├── plugins
│   │   └── fetch.json
│   ├── scripts
│   │   └── hooks
│   │       ├── jetAfterPrepare.js
│   │       └── jetInjector.js
│   └── www
├── bower.json
├── jsconfig.json
├── package.json
└── src
    ├── bower_modules
    ├── app
    │   ├── config.js
    │   ├── register.js
    │   ├── require.config.js
    │   ├── router.js
    │   └── startup.js
    ├── assets
    │   └── favicon.ico
    ├── components
    │   ├── bss-footer
    │   │   └── footer.html
    │   └── nav-bar
    │       ├── nav-bar.html
    │       └── nav-bar.js
    ├── containers
    │   ├── home
    │   │   ├── home.html
    │   │   └── home.js
    │   └── product
    │       ├── product.html
    │       └── product.js
    ├── index.html
    └── scss
        ├── _buttons.scss
        ├── _general.scss
        ├── _page.scss
        └── styles.scss
```

No configuration or complicated folder structures, just the files you need to build your app (with mobile support).<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm run cordova:dev`
Builds the mobile app for development in the `app` folder.

### `npm run cordova:build`
Builds the mobile app for production in the `app` folder.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Oracle Jet in production mode and optimizes the build for the best performance.

### `npm run dev`

Runs a server in your machine that autotranspile es6 files and scss.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Oracle Jet in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Philosophy

* **One Dependency:** There is just one build dependency. It uses RequireJs, Babel, Node-SASS and Cordova, but provides a cohesive curated experience on top of them.

* **Cordova ready:** The project have the app folder that has a cordova project integrated

* **Zero Configuration:** There are no configuration files or command line options. Configuring both development and production builds is handled for you so you can focus on writing code.

* **No Lock-In:** You can create your own scripts for your build inside the `tool` folder, and override the ones included in jet-buildtool.

## Why Use This?

**If you’re getting started** with OracleJet and ES6, use `jet-create-app` to automate the build of your app. There is no configuration file, and `jet-buildtool` is the only extra build dependency in your `package.json`. Your environment will have everything you need to build a modern Oracle Jet app:

* ES6 support.
* Cordova support in app folder.
* Language extras beyond ES6 like the object spread operator.
* A dev server that lints for common errors.
* Compile SCSS in fly.
* A `build` script to bundle JS, SCSS, and images for production, with sourcemaps.

## Limitations

Right now **not support** Hot reloading.

## What’s Inside?

The tools used by Jet create app are subject to change.
Currently it is a thin layer on top of many amazing community projects, such as:

* [Babel](http://babeljs.io/) with ES6 and extensions used to convert code to AMD
* [Cordova](https://cordova.apache.org/) To create an hybrid or only-mobile apps
* [RequireJs](http://www.requirejs.org/) To create an hybrid or only-mobile apps
* [Oracle-Jet](http://oraclejet.org) Oracle Jet and its dependencies
* [jet-komponents](https://github.com/bpmsoasolutions/jet-komponents)
* [es6-oraclejet](https://github.com/bpmsoasolutions/es6-oraclejet)

All of them are transitive dependencies of the provided npm package.

## Contributing

We'd love to have your helping hand on `jet-create-app`

## Acknowledgements

Thanks to the react community to give us the idea to build this.