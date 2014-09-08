
var requireLogin = function() {
	if (!Meteor.user() ){
		Router.go('index');
	}
}

var requireAdmin = function() {
	if ( !Meteor.user().profile.admin ){
		Router.go('index');
	}
}

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
		// onBeforeAction: requireAdmin
	});

	this.route('test', {
		path: '/test'
		// onBeforeAction: requireAdmin
	});

	this.route('petProfile', {
		path: '/pets/:_id',
		data: function(){
			return Adoptees.findOne(this.params._id);
		}
	});

	this.route('myDogs', {
		path: '/mydogs',
		onBeforeAction: function (pause) {
            if (!Meteor.user()) {
            // render the login template but keep the url in the browser the same
            this.render('index');
					}
			}
	});

})

Router.onBeforeAction('loading');
