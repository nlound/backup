 GULP BOILERPLATE
==================

> This document contains information about folder structure, components, CSS references, etc. all that needs to be take into account for the integration of this page.

### Install dependencies

Before start working install all required dependecies with:

    $ npm install

## Gulp tasks

For develop use:

    $ gulp dev

For clean the dist folder run:

    $ gulp clean

For build the solution ready for deploy:

    $ gulp build

## Folder structure

Below you fill find short about the folder structure and the content of each folder:

```
.

├── gulp                # All the gulp Files
├── src                 # All the source code
│    ├── assets         # This will be copied into build as is
│    ├── js             # JS Files
│    ├── pages          # HTML Files
│    └── scss           # SASS files
│
└── build               # This is generated from source files
     └── assets         # a copy of src/assets folder
         ├── js         # JS compiled files
         ├── css        # SASS compiled files
         └── ..         # wherever folder is in src/assets

```
