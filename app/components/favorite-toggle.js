import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  isFavorited: Ember.computed('favorites.favoriteQuestions.[]', 'question', function() {
    return this.get('favorites').contains(this.get('question'));
  }),
  actions: {
    addToFavorites(question) {
      this.get('favorites').add(question);
    },
    removeFromFavorites(question) {
      this.get('favorites').remove(question);
    }
  }
});
