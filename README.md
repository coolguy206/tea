

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
* [Download](#download)
* [Install](#install)
* [Grunt Tasks](#grunt-tasks)
* [Gruntconfig](#gruntconfig)
* [Run](#run)
* [Toolkit](#toolkit)
* [Branches](#branches)
* [Category Pages](#category-pages)
  * [Default](#default)
  * [Feature Shops](#feature-shops)
  * [Footer](#footer)
* [Content Zones](#content-zones)
* [Home Page](#home-page)
* [Landing Pages](#landing-pages)
* [Mega Menu](#mega-menu)
* [Promos](#promos)



## Getting Started

This will walk you through the file structure and help you understand the code.

## Download

First you need to download the code. Go to [https://github.com/coolguy206/tea](https://github.com/coolguy206/tea)
and dowload the zip and extract the folder.

## Install

You will need to install:
* [Node.js](https://nodejs.org/en/)
* [Git Bash](https://gitforwindows.org/)

After downloading Node and Git Bash open up Git Bash and cd into the downloaded repo.

"cd" is a linux command. For a beginners tutorial on linux commands check this out: [https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners](https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)

Once you have cd into the downloaded repo type into Git Bash: 

```sh
npm install
```

This will dowload all the npm modules and grunt. After Git Bash finishes downloading you can check if grunt is installed by typing in Git Bash:

```sh
grunt hello
```

You should see in Git Bash

Running "hello" task
hello world from Grunt!


## Grunt Tasks

The grunt tasks are all located in the grunt folder.

I have npm modules:
* [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)
* [load-grunt-config](https://www.npmjs.com/package/load-grunt-config)

which allows to run grunt tasks from isolated files. All the grunt tasks start from watch.js
I would start there if you want to understand how the grunt tasks sequentially compile.


## Gruntconfig

This file controls which file you are compiling and working on so that you don't edit all the files at once.

For example:

Say you are working on changing the email sign up lightbox. You would edit gruntconfig.js under the
zone object and put the path to the file.

For this example you would put:

'email-sign-up/lightbox'


## Run

To run the workflow in Git Bash type:
```sh
grunt watch
```

## Toolkit

All the code will compile into the toolkit folder where you can copy and paste into toolkit. Normally it should just be one file but if it is multiple files in the toolkit folder use the "content.html" file.


## Branches

Usually I would create new branches for the upcoming promos or site refresh.

The naming conventions are as follow:

[site/promo/content zone/landing page].[name].[date]

For example:

* refresh.2.20
* promo.black-friday.11.19
* zone.curalate.3.1
* landing.size-chart.4.15

I would usually pull the edits into master branch sequentially when I have the time and then delete the branches to keep things clean.


## Category Pages

This folder contains code for the category pages in toolkit. this code can either be in the flex fields or the banner ads.

### Default

This folder was where the files were when we used to add top header images to top categories:
* girls
* boys
* baby girl
* baby boy
* newborn

### Feature Shops

This is also where the feature shop files are.

### Footer

This folder is where footer seo copy are.

For example: 

Girls new arrivals page footer seo copy 
"girls-clothing.html"
The contents of the html file would then be in a banner ad.

## Content Zones

This folder contains all the content zone files.

## Home Page

This folder contains all the home page files.


## Landing Pages

This folder contains all the landing pages files.


## Mega Menu

This folder contains the files that edit the mega menu images for site refresh or promos. This is in the banner ads in toolkit Whick makes it possible to schedule.

## Promos

This folder contains the files for promos. The "one-offs" folder is usually the folder I use
for promos that don't fit with all the other promo folders.

