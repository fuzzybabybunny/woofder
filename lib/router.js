Router.configure({

	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ 
		return Meteor.subscribe('adoptees'); 
	}

})

Router.map(function(){
	
	this.route('index', {
		path: '/'
	});

	this.route('addPet', {
		path: '/add-pet'
	});

})

Router.onBeforeAction('loading');