Template.index.rendered = function(){

  var addSelectedBy = function(userId, petId){
    var selectedByArray = Adoptees.findOne(petId).selectedBy;
    console.log(selectedByArray);
    if(_.indexOf(selectedByArray, userId, true) == -1){
      Adoptees.update(petId, {$push: {"selectedBy": personId}} );
    };
  }

  var addPetsSelected = function(userId, petId){
    var petsSelectedArray = Users.findOne(userId).petsSelected;
    console.log(petsSelectedArray);
    if(_.indexOf(petsSelectedArray, petId, true) == -1){
      Users.update(userId, {$push: {"petsSelected": petId}} );
    };
  }

  $('a[href*=#]').click(function(){return false;});

  var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  var Pet = {
    wrap: $('#pets'),
    pets: [
      {name: 'Linda', age: 25, img: 'img/dog1.jpeg'},
      {name: 'Chuck', age: 25, img: 'http://funnydogspictures.org/wp-content/uploads/2013/01/betman-funny-dog-picture.jpg'},
      {name: 'blah', age: 25, img: 'img/dog2.jpg'}
    ],
    add: function(){
      var random = this.pets[Math.floor(Math.random() * this.pets.length)];
      $('#pets').append("<div class='pet'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong>, " + random.age + "</span></div>");
    }
  };

  var App = {
    yesButton: $('.button.yes .trigger'),
    noButton: $('.button.no .trigger'),
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

  App.yesButton.on('mousedown', function(){
    App.like(true);
  });

  App.noButton.on('mousedown', function(){
    App.like(false);
  });

    Pet.add();
    Pet.add();
    Pet.add();
    Pet.add();

}