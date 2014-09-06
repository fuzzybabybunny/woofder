Template.index.rendered = function(){

  var userId = Meteor.users.findOne()._id;

  var alreadyAdded = function(petId, userId){
    var selectedByArray = Adoptees.findOne(petId).selectedBy;
    console.log("The current pet's ID is " + petId);
    console.log("Array of users that have selected this pet:");
    console.log(selectedByArray);
    console.log("Current user ID");
    console.log(userId);
    console.log("index of the userId inside the pet's array of users");
    console.log( _.indexOf(selectedByArray, userId) );
    if(_.indexOf(selectedByArray, userId) !== -1){
      console.log("duplicate found");
      return true;
    } else {
      console.log("no duplicate found, safe to add");
      return false;
    }
  }

  var addSelectedBy = function(petId, userId){
    Adoptees.update({_id: petId}, {$push: { selectedBy: userId}});
  }

  var addPetsSelected = function(petId, userId){
    Meteor.users.update({"_id": userId}, {"$push": { "profile.petsSelected" : petId}});
    console.log("with with ID " + petId + " has been pushed to the petsSelected array");
  }

  $('a[href*=#]').click(function(){return false;});

  var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  // var petsArray = Adoptees.find().fetch();

  // for (var i = 0; i < petsArray.length; i++) {
  //   var petId = petsArray._id;
  //   console.log(petId);
  //   //Do something
  // }

  // AdopteeImages.findOne(petsArray.findOne())

  Pet = {
    wrap: $('#pets'),
    pets: Adoptees.find().fetch(),
    newPetCard: function(){
      // "newPetCard" generates the HTML for the pet HTML randomly.
      // Calling newPetCard will create a NEW pet card
      // and return the ID of the pet on that new card
      var randomPet = this.pets[Math.floor(Math.random() * this.pets.length)];
      console.log("randomPet");
      console.log(randomPet);
      var link = "/pets/" + randomPet._id;
      // Creates the Card HTML
      $('#pets').append("<div class='pet'><img alt='" + randomPet.name + "' src='" +
        AdopteeImages.findOne(randomPet.imageIds[0]).url() + "' /><span><strong>" + randomPet.name +
        "</strong>, " + randomPet.age + "</span></div>");
      console.log("Pet's name");
      console.log(randomPet.name);
      // Creates the more info HTML
      $('.info-sign').attr('data-petid', randomPet._id);
      $('.info-sign').html( '<a href="/pets/' + randomPet._id + '"><span class="glyphicon glyphicon-info-sign"></span></a>' );
      console.log("current Pet's ID:");
      console.log(randomPet._id);
      Session.set("currentPetId", randomPet._id);
      return randomPet._id;
    }
  };

  var App = {
    yesButton: $('.heart'),
    noButton: $('.nope'),
    infoButton: $('.info-sign'),
    blocked: false,
    like: function(liked){
      var animate = liked ? 'animateYes' : 'animateNo';
      var self = this;
      if(!this.blocked){
        this.blocked = true;
          $('.pet').eq(0).addClass(animate).one(animationEndEvent, function(){
            $('.animateYes').remove();
            $('.animateNo').remove();
            Pet.newPetCard();
            self.blocked = false;
        });
      }
    }
  };

  // petId = Pet.add();

  App.yesButton.on('mousedown', function(){
    // This is NOT a reliable way to get the current pet's ID
    var currentPetId = Session.get("currentPetId");
    console.log("The current pet ID is " + currentPetId);
    if( !alreadyAdded(currentPetId, userId) ){
      addSelectedBy(currentPetId, userId);
      addPetsSelected(currentPetId, userId);
    } else {
      console.log("pet already added my user");
    }
    App.like(true);
  });

  // App.infoButton.on('mousedown', function(){
  //   App.like(true);
  // });

  App.noButton.on('mousedown', function(){
    App.like(false);
  });

  // Should run only once on load.
  var currentPetId = Pet.newPetCard();

}
