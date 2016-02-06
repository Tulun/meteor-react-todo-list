// Define a collection for Mongo.
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // Client side JS.

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function() {
    // Use Meteor.startup to render the component after the page is ready.
    ReactDOM.render(<App />, document.getElementById('render-target'));
  });


}