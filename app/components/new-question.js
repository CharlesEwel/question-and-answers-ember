import Ember from 'ember';

export default Ember.Component.extend({
  questionFormShow: false,
  actions: {
    showQuestionForm() {
      this.set('questionFormShow', true)
    },
    cancel() {
      this.set('questionFormShow', false)
      this.set('question', '');
      this.set('details', '');
      this.set('author', '');
    },
    saveQuestion(){
      var params = {
        question: this.get('question'),
        details: this.get('details'),
        author: this.get('author')
      };
      if(params.question !== undefined && params.details !== undefined && params.author !== undefined && params.question !== "" && params.details !== "" && params.author !== "") {
        this.set('questionFormShow', false);
        this.sendAction('saveQuestion', params);
        this.set('question', '');
        this.set('details', '');
        this.set('author', '');
      } else {
        alert("You forgot to fill out one of the fields");
      }
    }
  }
});
