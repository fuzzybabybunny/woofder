Template.index.rendered = function(){

  var addSelectedBy = function(personId, petId){
    var selectedByArray = Adoptees.findOne(petId).selectedBy;
    console.log(selectedByArray);
    if(_.indexOf(selectedByArray, personId, true) == -1){
      Adoptees.update(petId, {$push: {"selectedBy": personId}} );
    };
  }

  var addPetsSelected = function(personId, petId){
    var petsSelectedArray = Users.findOne(personId).petsSelected;
    console.log(petsSelectedArray);
    if(_.indexOf(petsSelectedArray, petId, true) == -1){
      Users.update(personId, {$push: {"petsSelected": petId}} );
    };
  }
  
  $('a[href*=#]').click(function(){return false;});

  var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  var Person = {
    wrap: $('#people'),
    people: Adoptees.find().fetch(),
    add: function(){
      var random = this.people[Math.floor(Math.random() * this.people.length)];
      $('#people').append("<div class='person'><img alt='" + random.name + "' src='" + random.img_url + "' /><span><strong>" + random.name + "</strong>, " + random.age + "</span></div>");
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
          $('.person').eq(0).addClass(animate).one(animationEndEvent, function(){
            $('.animateYes').remove();
            $('.animateNo').remove();
            Person.add();
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

    Person.add();
    Person.add();
    Person.add();
    Person.add();

}
