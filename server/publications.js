Meteor.publish('adoptees', function(){

	return Adoptees.find();

})