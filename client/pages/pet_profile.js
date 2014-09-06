Template.petProfile.rendered = function(){

  name = this.data.name;

	var owl = $(".owl-carousel");

  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  });
}

Template.petProfile.helpers({

	'petImagesArray': function(){
		var imageIdsArray = this.imageIds;
		var petImagesArray = [];
		var imageURL = "";
	  for (var i = 0; i < imageIdsArray.length; i++) {
	  	console.log(AdopteeImages.findOne(imageIdsArray[i]).url());
	  	imageURL = AdopteeImages.findOne(imageIdsArray[i]).url();
	    petImagesArray.push(imageURL);
	    console.log(petImagesArray);
	  }
	  return petImagesArray;
	}

})
