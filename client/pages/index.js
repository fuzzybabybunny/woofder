Template.index.rendered = function(){

var userId = Meteor.users.findOne()._id;

  alreadyAdded = function(petId, userId){
    var selectedByArray = Adoptees.findOne(petId).selectedBy;
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
    add: function(){
      var random = this.pets[Math.floor(Math.random() * this.pets.length)];
      var link = "/pets/" + random._id;
      console.log(link);
      $('#pets').append("<div class='pet'><img alt='" + random.name + "' src='" +
        AdopteeImages.findOne(random.imageIds[0]).url() + "' /><span><strong>" + random.name +
        "</strong>, " + random.age + "</span></div>");
      console.log(random.name);
      $('.info-sign').html( '<a href="/pets/' + random._id + '"><span class="glyphicon glyphicon-info-sign"></span></a>' );
      return random._id;
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
            Pet.add();
            self.blocked = false;
        });
      }
    }
  };

  petId = Pet.add();

  App.yesButton.on('mousedown', function(){
    App.like(true);
    if( !alreadyAdded(petId, userId) ){
      addSelectedBy(petId, userId);
      addPetsSelected(petId, userId);
    } else {
      console.log("pet already added my user");
    }
  });

  // App.infoButton.on('mousedown', function(){
  //   App.like(true);
  // });

  App.noButton.on('mousedown', function(){
    App.like(false);
  });



}
