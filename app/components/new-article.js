import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        source: this.get('source'),
        timestamp: this.get('timestamp')
      };
      this.sendAction('saveArticle', params);
    }
  }
});
