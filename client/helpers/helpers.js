UI.registerHelper('adminUser', function(){
	if(Meteor.user()){
		if (Meteor.user().profile.role === "admin"){
			return true;
		}
	}
})