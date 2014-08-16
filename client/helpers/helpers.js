UI.registerHelper('adminUser', function(){
	return Meteor.user().profile.admin;
})