Meteor.publish('adoptees', function(){

	return Adoptees.find();

})

Meteor.publish('adopteeImages', function(){

	return AdopteeImages.find();

})
