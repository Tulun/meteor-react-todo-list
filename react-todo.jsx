// Define a collection for Mongo.
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // Client side JS.

  Meteor.startup(function() {
    // Use Meteor.startup to render the component after the page is ready.
    ReactDOM.render(<App />, document.getElementById('render-target'));
  });


}