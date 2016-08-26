import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(favorite) {
    console.log("add executes")
    this.get('favoriteQuestions').pushObject(favorite);
  }
});
