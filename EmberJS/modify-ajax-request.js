import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  
  // always send Ember=1 in params
  ajax(url, type, hash) {
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    hash.data.ember = 1;
    return this._super(url, type, hash);
  },
  
});
