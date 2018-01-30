# HarnTools

These are some simple tools for the tabletop roleplaying system Harn Master and it's setting, Harn World.

## Acknowlegements

Name data derived from the following sources:
* English Surnames in Northumberland https://www.s-gabriel.org/names/juetta/parish/surnames.html 
* Medieval English, Welsh & Saxon Names http://www.infernaldreams.com/names/Europe/


## Development
This is a standard angular 5 app. 

1. Install node.js on your local system and `npm install -g @angular/cli typescript`
1. Clone this repository.
1. cd to project directory and install dependencies via `npm install`
1. Serve just like any other angular app `ng serve --open`

## Building

Build via the standard `ng build` command. If deploying to subdirectory you can set the base href value through ng build like so:
```bash
ng build --base-href=/harn-tools/
```

## Publishing

For testing we're using github-pages and deploying via thoughts from the post by @cobyism [here](https://gist.github.com/cobyism/4730490).  Run the actual build as above, commit those changes and push them to github, then do a subtree push via:
```
git subtree push --prefix dist origin gh-pages
```
