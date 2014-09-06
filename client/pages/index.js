Template.index.rendered = function(){

  var addSelectedBy = function(petId){
    var userId = Meteor.users.findOne()._id;
    var selectedByArray = Adoptees.findOne(petId).selectedBy;
    console.log("This is the selectedByArray:");
    console.log(selectedByArray);
    console.log("This is the thing it tries to find in selectedByArray:");
    console.log(userId);
    if(_.indexOf(selectedByArray, userId) == -1){
      console.log("no duplicate found, running add");
      console.log(petId);
      console.log(userId);
      Adoptees.update({_id: petId}, {$push: { selectedBy: userId}});
    } else {
      console.log("duplicate found - skipping");
    };
  }

  var addPetsSelected = function(petId){
    var userId = Meteor.user()._id;
    var petsSelectedArray = Meteor.users.findOne({"_id": userId}).profile.petsSelected;
    console.log("This is the petsSelectedArray:");
    console.log(petsSelectedArray);
    console.log("This is the thing it tries to find in petsSelectedArray:");
    console.log(petId);
    console.log("This is the index of the petId it is trying to find:");
    console.log(_.indexOf(petsSelectedArray, petId));
    if(_.indexOf(petsSelectedArray, petId, true) == -1){
      console.log("no duplicate found, running add");
      console.log(petId);
      console.log(userId);
      Meteor.users.update({"_id": userId}, {"$push": { "profile.petsSelected" : petId}});
    } else {
      console.log("duplicate found - skipping");
    };
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
    addSelectedBy(petId);
    addPetsSelected(petId);
  });

  // App.infoButton.on('mousedown', function(){
  //   App.like(true);
  // });

  App.noButton.on('mousedown', function(){
    App.like(false);
  });



}
