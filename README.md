# Template Project for Labs [![Build Status](https://travis-ci.org/ULH-WebDevelopment/TemplateLab.svg?branch=master)](https://travis-ci.org/ULH-WebDevelopment/TemplateLab)

This project is a template for the lab sessions of the Master 2 IDOD course at the [University of Le Havre](https://www.univ-lehavre.fr).

The purpose of this template is to ease the completion and testing of labs.



## Assignment


This section is a placeholder to describe the assignment for this lab.  It should define what is expected of you.


Knowing the assignment, follow the steps below in order to complete the lab.

## Setup the Project


### Install necessary tools

**(Just do this step once for all labs)**

This project uses the [Grunt](http://gruntjs.com/) task runner to run the project. Client side dependencies are handled with the  [Bower](http://bower.io/)  package manager. Grunt and Bower have to be installed with `node` and `npm`.

1.  First install <a href="https://nodejs.org/en/download/">NodeJS</a>. You should have `node` or `nodejs` as well as `npm` in your path.  
2.  Then install Grunt and Bower:</p>
    ```sh
    npm install -g grunt-cli
    npm install -g bower
    ```

### Fork the project on github

When you **fork** a project, a copy of its repository with all the history is created for you. You become the **owner** of this **new** project and have write access to it.


### Setup the Project

Inside the Project's main folder, install its dependencies:
```sh
npm  install
bower install
```

## Run The Project

Once the project is installed, it can be run via grunt:

```sh
grunt serve
```

This will launch a Web server and open the index page of the project on your browser.


## Complete the lab - Write the project

The `app/` folder contains the `HTML` `CSS` and `JavaScript` of the application. Depending on the lab (see the "Assignment" section) you will have to write code in these parts.

## Test The Project

Unit test are kept in the `tests/` folder. The `tests/test.js` file contains all the assertions that will be tested. It is formatted with the [QUnit](https://qunitjs.com/)  testing framework. You will have to write unit tests in this file.

- Use `grunt testBrowser` to test on your browser.
- Use `grunt testCI` to test on PhantomJS, the headless browser. This will be use by the Continuous Integration system.

## Send your completed assignment

Once completed with all unit tests passing, you can send me back you assignment as a pull request. The pull request will trigger a build of the project in the Continuous Integration framework [TravisCI](https://travis-ci.org/). For this you will have to [commit](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) your changes.

Note that you can also use Travis with your own project.
