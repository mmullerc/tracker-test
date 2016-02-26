/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
var trackerController = require('./api/tracker/tracker.controller');

export default function(app) {
  // Insert routes below
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

    app.route('/tracker')
    .post((req, res) => {
        var trackers = trackerController.create(req, res);
    });

    app.route('/all')
    .get((req, res) => {
        var all = trackerController.getAll(req, res);
    });
}
