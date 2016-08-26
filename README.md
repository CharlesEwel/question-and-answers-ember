# Questions-answers

This App allows users to post questions, post answers to questions and vote on the quality of those answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Specs

Spec | Sample Input | Sample Output
 --- | ---- | -----
Display List of Questions | List of Questions is Preloaded into Database | An output list is displayed showing title and author and providing a link to get details
Add New Questions | User fills out a form specificying question, author and details | This question is added to the list
Edit Existing Questions | User selects questions and edits it | The updated question is now displayed in the list
Delete Answers/Questions | A user deletes a question | The question is deleted as are all answers for it
Voting | A user upvotes an answer | It's displayed score increases by 1
Ranking | User specifices that they wish to see top rated answers first | ordering of answers switches from chronological to ranked based on upvotes
Favorite | Allows users to add and remove questions from a list of favorites | User clicks "add to favorite" on a question page, when they navigate to favorites page that question is displayed there

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Known Bugs

None

## Technologies User

* EmberJS
* Bootstrap

## License

Licensed under MIT License
