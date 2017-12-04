/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'pfinal',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii:{
      sessionServiceName: 'session' // Como se llama el servicio de torii
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
    apiKey: "AIzaSyDgqVrgzzWbA1lj_91-9YrTTXFon5ccHaU",
    authDomain: "pfinal-13afb.firebaseapp.com",
    databaseURL: "https://pfinal-13afb.firebaseio.com",
    projectId: "pfinal-13afb",
    storageBucket: "pfinal-13afb.appspot.com",
    messagingSenderId: "641504788798"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = {
    apiKey: "AIzaSyDgqVrgzzWbA1lj_91-9YrTTXFon5ccHaU",
    authDomain: "pfinal-13afb.firebaseapp.com",
    databaseURL: "https://pfinal-13afb.firebaseio.com",
    projectId: "pfinal-13afb",
    storageBucket: "pfinal-13afb.appspot.com",
    messagingSenderId: "641504788798"
    };
  }

  return ENV;
};
