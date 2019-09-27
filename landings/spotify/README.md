![Verizon Logo](https://www.verizon.com/vzem/etc/designs/business/clientlib-vbm/images/verizon-logo.svg)


Take Back NY Spotify - Web App
===

**Table of contents**
- [Project Setup](#project-setup)
    - [Gulp Install](#gulp-install)
    - [pug-doc Install](#pug-doc-install)
    - [Dependencies Install](#dependencies-install)
- [Run the App](#run-the-app)
- [Project Scaffolding](#project-scaffolding)
- [PUG](#pug)
    - [Style Guide](#style-guide)
    - [Documentation](#documentation)
- [Javascript](#javascript)
    - [Style Guide](#style-guide)
- [CSS](#css)
    - [Sass Reference](#sass-reference)
    - [Verizon Global CSS](#verizon-global-css)
            - [Media Queries](#media-queries)
            - [Css Style Prefix](#css-style-prefix)


## Project Setup

### Gulp Install
Reference can be found [here](https://gulpjs.com/).
```bash
$ npm i gulp-cli -g
```

### pug-doc Install
```bash
$ npm i pug-doc -g
$ npm i pug-doc-markdown -g 
```

In case you want to export the documentation to HTML please install `pug-doc-html`

```bash
$ npm i pug-doc-html -g
```

### Dependencies Install

In order to install the project dependencies go to the root folder and run the following command:
```bash
$ npm i
```

## Run the App
To run the app please use the following commands:

Development:
```bash
$ npm run dev
```

Production:
```bash
$ npm start
```

## Project Scaffolding
```
.
├── gulp                                # contains all gulp tasks
├── src  
│   ├── app.js                          # App js file, contains express init, etc.
│   ├── api                             # API files
│   └── static                          # js third party libs
│       ├── assets                      # contains images, vendors libs, js
│       ├── components                  # Web Components
│       ├── pages                       # Pages in Pug
│       ├── scss                        # SASS css style files
│       └── templates                   # Layout files
├── .gitignore                          
├── .jshitnrc                           # JsHint config
├── gulpfile.js                         # gulp config
├── package.json                        # NPM dependencies
└── README.md
```

## PUG

### Style Guide
In order to write pug templates in the correct way please follow the documentation that shows the different options that are available to do it.

https://pugjs.org/language/attributes.html

### Documentation
All mixins must have a `@pug-doc`comment block at the beginning. This is really important for two important reasons:
1. It is helpful for other developers to know how the mixin works.
1. It is necesary for the documentation generation that can be delivered to the client if it is need it.

To generate PUG documention run the following command:
```bash
$ npm run pug-doc
```

This will generate a `vzn-web-components.md` file in the root path of the project.

Example:
```jade
//- @pugdoc
    name: Product Carousel
    description: This Mixin is used for Carousel
    arguments: 
        - {object} carousel - this is the description of arg1
    examples: |
        - var carousel = {title: 'Slick Carousel', images: ['http://lorempixel.com/200/200/nature/'] };
        +productCarousel(carousel)

mixin productCarousel(carousel)
    ...
```

More reference can be found here:
https://github.com/Aratramba/pug-doc/blob/master/README.md#mixins

## Javascript

### Style Guide
Airbnb is the style guide that we are going to follow, so please visit the link below and check it to make sure that are onboard with it.

[Airbnb Style Guide](https://github.com/airbnb/javascript/blob/master/README.md)

## CSS

### Sass Reference
Components use Sass as a Css Precompiler you will find a link to the reference below.

[Sass Reference Guide](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Verizon Global CSS

```html
    <link href="" rel="stylesheet" type="text/css">
```

##### Media Queries

##### Css Style Prefix


##### Docker
Testing Docker
*   docker build -t dev --build-arg ENV='dev' .
*   docker run -it --rm -p 5000:5000 dev
*   Open http://localhost:5000
*   to quit docker : ctrl + pq
*   to stop docker : docker stop $(docker ps -a -q)

