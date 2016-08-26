import Ember from 'ember';

export function answerStar(params) {
  var index=params[0];
  if(index===0) {
    return Ember.String.htmlSafe('<img src="/assets/images/gold-star.png" alt="gold star">')
  } else if(index===1) {
    return Ember.String.htmlSafe('<img src="/assets/images/silver-star.png" alt="gold star">')
  } else if(index===2) {
    return Ember.String.htmlSafe('<img src="/assets/images/bronze-star.png" alt="gold star">')
  } else {
    return ""
  }
}

export default Ember.Helper.helper(answerStar);
