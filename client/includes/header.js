Template.header.events({
  
  'click #login-buttons-logout': function() {
    Meteor.logout(function() {
      loginButtonsSession.closeDropdown();
    });
  },

  'click .navbar-collapse': function() {
    $('.navbar-collapse').removeClass('in');
  }

});
