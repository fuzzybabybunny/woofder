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

Template.addPet.rendered = function(){

	if (Meteor.isClient){

		console.log("isClient");
		Dropzone.autoDiscover = false;

		var dropzone = new Dropzone("form#dropzone", {
			accept: function(file, done){
				FS.Utility.eachFile(event, function(file){
					AdopteeImages.insert(file, function(err, fileObj){
						if(err){
              alert("Error");
						} else {
							var fileId = fileObj._id;
							console.log("File ID:");
							console.log(fileId);
						};
					});
				});
				done();
			}
		});

	};

};
