# tracker-test

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

# Tracker test

**Principal objective:** Monitor every movement that the user does within the web page, every click and the time spent in each view.
The functionality that you must to implement is very similar to the [Google Analytics] functionality, basically take control of every user's action meanwhile he/she is in the web site.

**Principal tasks:**
- Get every click to buttons, labels, taps and any clickable element within the HTML. It is necessary to know each time that the user clicks an element, even if he/she clicks the same element a thousand times.
- Get the time that that the user spend in each view, it means that if the user change from the view "About" to "Home" you must know the exact time that the user spent in the "About" view and start to count the time in the "Home" view.
- Create a web page to show the data collected, the data must be shown in chart, tables, or any other nice HTML element, it's a plus to use [Twitter Bootstrap], CSS or SASS.

**Things to know:**

- You have 2:30 hours to complete the 'Tracker test'
- You are totally free to use Internet, to use the Google's search engine or any other tool to search.
- The functionality is more important than style, but if your website has a great style (beside the functionality) it will give you to much more points during the recruitment process.
- It's a plus to use [git] to share the code of your project, the plus will apply just if the project has been completed. If you use [git], the branches which will be used are the branches that are before the date and hour of your test end time.

**Let's code, Hell Yeah!**

  [git]: <https://git-scm.com/>
  [node.js]: <http://nodejs.org>
  [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
  [jQuery]: <http://jquery.com>
  [express]: <http://expressjs.com>
  [AngularJS]: <http://angularjs.org>
  [Gulp]: <http://gulpjs.com>
  [Google Analytics]: <https://www.google.com/analytics/>
