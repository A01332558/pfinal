import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('registration');
  this.route('profile');
  this.route('artsearch');
  this.route('products');
  this.route('orders');
  this.route('shop');
  this.route('amdin-profile');
  this.route('amdin-login');
  this.route('invent');
  this.route('cientacc');
  this.route('order');
});

export default Router;
