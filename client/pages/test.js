Template.test.rendered = function(){

	$(function() {
	  $( "#draggable" ).draggable({ revert: "valid" });
	  $( "#draggable2" ).draggable({ revert: "invalid" });

	  $( "#droppable" ).droppable({
	    activeClass: "ui-state-default",
	    hoverClass: "ui-state-hover",
	    drop: function( event, ui ) {
	      $( this )
	        .addClass( "ui-state-highlight" )
	        .find( "p" )
	          .html( "Dropped!" );
	    }
	  });
	});

};


Template.test.events({





});