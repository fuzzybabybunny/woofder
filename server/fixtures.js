if ( Meteor.users.find().count() === 0 ) {

  adminUserId = Accounts.createUser({
    username: 'admin',
    email: 'admin@woofder.com',
    password: '123456',
    profile: {
        first_name: 'Woofder',
        last_name: 'Admin',
        company: 'Woofder',
        role: 'admin'
    }
  });

  userId = Accounts.createUser({
    username: 'joe',
    email: 'joe@none.com',
    password: '123456',
    profile: {
        first_name: 'Joe',
        last_name: 'Doe',
        role: 'adopter'
    }
  });

};

if (Adoptees.find().count() === 0) {

	Adoptees.insert({
		img_url: 'dog1.jpeg',
		name: 'Brian',
		age: '8',
		selectedBy: [userId]
	});

	Adoptees.insert({
		img_url: 'http://img2.wikia.nocookie.net/__cb20110502123804/pixar/images/7/77/Toy_story_3_old_buster.png',
		name: 'Buster',
		age: '10',
		selectedBy: []
	});

	Adoptees.insert({
		img_url: 'http://doginstructions.com/wp-content/uploads/2014/07/courage-the-cowardly-dogdeviantart--more-like-courage-the-cowardly-dog-by-butt-byu4hsic.jpg',
		name: 'Courage',
		age: '80',
		selectedBy: []
	});

	Adoptees.insert({
		img_url: 'http://img2.wikia.nocookie.net/__cb20140117110057/peanuts/images/4/46/Snoopy_and_Woodstock.png',
		name: 'Snoopy',
		age: '2',
		selectedBy: []
	});

};
