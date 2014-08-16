var petInfo = {};

Template.addPet.events({

	'click #addPetSubmitButton': function(e){
		e.preventDefault();
		var petId = Adoptees.insert(petInfo);
		Router.go('/pets/' + petId);
	}

	// 'keyup input.form-control': function(){
	// 	console.log("keyUp");
	// 	petInfo.name = $('[name="name"]').val();
	// 	petInfo.age = $('[name="age"]').val();
	// }

});

Template.addPet.rendered = function(){ 

	petInfo.imageIds = [];

	$('input.form-control').keyup(function(){
		petInfo.name = $('[name="name"]').val();
		petInfo.age = $('[name="age"]').val();
	});

	if (Meteor.isClient){

		Dropzone.autoDiscover = false;

		//Adds file uploading and adds the imageID of the file uploaded
		//to the petInfo object.
		var dropzone = new Dropzone("form#dropzone", {
			accept: function(file, done){
				AdopteeImages.insert(file, function(err, fileObj){
					if(err){
            alert("Error");
					} else {
						var fileId = fileObj._id;
						petInfo.imageIds.push(fileId);
					};
				});

			}
		});

	};



};

          // Images.insert file, (err, fileObj) ->
          //   if err
          //     alert "Error exists: ", err
          //   else
          //     fileId = fileObj._id
          //     userId = Meteor.userId()
          //     Meteor.users.update userId,
          //       $set:
          //         'profile.imageId': fileId