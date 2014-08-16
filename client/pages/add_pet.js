Template.addPet.events({

	'submit form': function(e){
		e.preventDefault();

		var petInfo = {
			name: $(e.target).find('[name="name"]').val(),
			age: $(e.target).find('[name="age"]').val()
		};	

		Adoptees.insert(petInfo);

	}

});