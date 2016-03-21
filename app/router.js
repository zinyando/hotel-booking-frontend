import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin.room-types.index', {path: '/'});
  this.route('admin', function() {
    this.route('room-types', function() {
      this.route('index', {path: '/'});
      this.route('new');
    });
  });
});

export default Router;
