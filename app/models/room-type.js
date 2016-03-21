import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  short_name: DS.attr(),
  base_price: DS.attr(),
  max_occupancy: DS.attr(),
  base_availability: DS.attr(),
  updated_at: DS.attr(),
  created_at: DS.attr()
});
