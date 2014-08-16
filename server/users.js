Accounts.onCreateUser(function(options, user) {
	user.profile = {};
	user.profile.petsSelected = [];
	return user;
});