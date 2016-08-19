import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
