if (Adoptees.find().count() === 0) {

	Adoptees.insert({
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Adoptees.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	});

	Adoptees.insert({
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	});

}