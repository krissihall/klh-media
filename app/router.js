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

    this.resource('admin', function () {
        this.route('works');
        this.route('edit', function () {
            this.route('work:work_id');
        });

        this.route('add', function () {
            this.route('works');
        });
    });
});

export default Router;
