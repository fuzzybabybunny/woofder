Template.header.events({
  'click #login-buttons-logout': function() {
    Meteor.logout(function() {
      loginButtonsSession.closeDropdown();
    });
  }
});
