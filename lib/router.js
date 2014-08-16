Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ 
		return [
			Meteor.subscribe('adoptees'),
			Meteor.subscribe('adopteeImages')
		];
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