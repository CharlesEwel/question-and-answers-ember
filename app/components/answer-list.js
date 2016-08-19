import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      var question = this.get("currentQuestion")
      this.sendAction('deleteAnswer', answer, question);
    }
  }
});
