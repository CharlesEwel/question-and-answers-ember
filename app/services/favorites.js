import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(favorite) {
    this.get('favoriteQuestions').pushObject(favorite);
  },

  remove(favorite) {
    this.get('favoriteQuestions').removeObject(favorite);
  },

  contains(question) {
    var index = this.get('favoriteQuestions').indexOf(question);
    if(index>=0) {
      return true;
    } else {
      return false;
    }
  }
});
