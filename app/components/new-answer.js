import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShow: false,
  actions: {
    showAnswerForm() {
      this.set('answerFormShow', true);
    },
    cancel() {
      this.set('answerFormShow', false);
      this.set('content', '');
      this.set('answer-author', '');
    },
    addAnswer(){
      var params = {
        content: this.get('content'),
        author: this.get('answer-author'),
        question: this.get('currentQuestion')
      };
      if(params.content !== undefined && params.author !== undefined && params.author !== "" && params.content !== "") {
        this.set('answerFormShow', false);
        this.sendAction('addAnswer', params);
        this.set('content', '');
        this.set('answer-author', '');
      } else {
        alert("You forgot to fill out one of the fields");
      }
    }
  }
});
