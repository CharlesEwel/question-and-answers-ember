import Ember from 'ember';

export default Ember.Component.extend({
  questionFormShow: false,
  actions: {
    showQuestionForm() {
      this.set('questionFormShow', true)
    },
    saveQuestion(){
      var params = {
        question: this.get('question'),
        details: this.get('details'),
        author: this.get('author')
      };
      this.set('questionFormShow', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
