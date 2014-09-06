Accounts.onCreateUser(function(options, user) {
	user.profile = {};
	user.profile.petsSelected = [];
	user.profile.admin = true;
	return user;
});
