# ember-imagesloaded-shim

Ember-cli shim for [imagesloaded](http://imagesloaded.desandro.com/). Uses npm imagesloaded package, and imports it into your app to be available for global use. See [their site](http://imagesloaded.desandro.com/) for details on usage of imagesloaded itself.

This addon assumes npm 3+, because it requires npm 3's dependency flattening behavior. If you are using npm 2, you must install imagesloaded to your project as a dev dependency: `npm i imagesloaded --save-dev`

## Installation

* `git clone <repository-url>` this repository
* `cd ember-imagesloaded-shim`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
