import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('/');

    this.route('about');

    this.route('works');

    this.route('work:work_id');

    this.route('contact');
});

export default Router;
