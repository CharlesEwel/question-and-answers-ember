import Ember from 'ember';

export default Ember.Component.extend({
  ranked: true,
  sortedAnswers: Ember.computed.sort('answers', 'sortDefinition'),
  sortDefinition: ['upvotes:desc'],
  numberOfAnswers: Ember.computed('answers', function() {
    return this.get('answers').get('length')
  }),
  actions: {
    toggleSort() {
      if(this.get("ranked")) {
        this.set("ranked", false)
      } else {
        this.set("ranked", true)
      }
    },
    deleteAnswer(answer) {
      var question = this.get("currentQuestion")
      this.sendAction('deleteAnswer', answer, question);
    },
    upvote(answer) {
      var question = this.get("currentQuestion")
      this.sendAction('upvote', answer, question);
    },
    downvote(answer) {
      var question = this.get("currentQuestion")
      this.sendAction('downvote', answer, question);
    }
  }
});
