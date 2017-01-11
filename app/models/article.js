import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  source: DS.attr(),
  timestamp: DS.attr(),
  title: DS.attr()
});
