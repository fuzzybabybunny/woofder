if (Adoptees.find().count() === 0) {

	Adoptees.insert({
		img_url: 'http://www.independent.co.uk/incoming/article9058882.ece/alternates/w620/briangriffin.jpg',
		name: 'Brian',
		age: '8'
	});

	Adoptees.insert({
		img_url: 'http://img2.wikia.nocookie.net/__cb20110502123804/pixar/images/7/77/Toy_story_3_old_buster.png',
		name: 'Buster',
		age: '10'
	});

	Adoptees.insert({
		img_url: 'http://doginstructions.com/wp-content/uploads/2014/07/courage-the-cowardly-dogdeviantart--more-like-courage-the-cowardly-dog-by-butt-byu4hsic.jpg',
		name: 'Courage',
		age: '80'
	});

	Adoptees.insert({
		img_url: 'http://img2.wikia.nocookie.net/__cb20140117110057/peanuts/images/4/46/Snoopy_and_Woodstock.png',
		name: 'Snoopy',
		age: '2'
	});

}