import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    editQuestion(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined && params[key] !== "") {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    },
    addAnswer(params) {
     var newAnswer = this.store.createRecord('answer', params);
     var question = params.question;
     question.get('answers').addObject(newAnswer);
     newAnswer.save().then(function() {
       return question.save();
     });
     this.transitionTo('question', params.question.id);
   },
   deleteAnswer(answer, question) {
     answer.destroyRecord();
     this.transitionTo('question', question);
   },
   deleteQuestion(question) {
     var answer_deletions = question.get('answers').map(function(answer) {
      return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
