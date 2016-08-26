import Ember from 'ember';

export default Ember.Component.extend({
  questionFormShow: false,
  actions: {
    showQuestionForm() {
      this.set('questionFormShow', true);
    },
    cancel() {
      this.set('questionFormShow', false);
      this.set('question', '');
      this.set('details', '');
      this.set('author', '');
    },
    editQuestion(question){
      var params = {
        question: this.get('question'),
        details: this.get('details'),
        author: this.get('author')
      };
      this.set('questionFormShow', false);
      this.sendAction('editQuestion', question, params);
      this.set('question', '');
      this.set('details', '');
      this.set('author', '');
    }
  }
});
