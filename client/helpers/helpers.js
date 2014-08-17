UI.registerHelper('adminUser', function(){
	if(Meteor.user()){
		return Meteor.user().profile.admin;
	}
})