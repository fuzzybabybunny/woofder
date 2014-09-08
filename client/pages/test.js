Template.test.rendered = function(){

	$(function() {
	  $( "#draggable" ).draggable({ revert: "valid" });
	  $( "#draggable2" ).draggable({ revert: "invalid" });

	  $( "#accept" ).droppable({
	    activeClass: "ui-state-default",
	    hoverClass: "ui-state-hover",
	    drop: function( event, ui ) {
	      $( this )
	        .addClass( "ui-state-highlight" )
	        .find( "p" )
	          .html( "Dropped!" );
	    }
	  });

	  $( "#reject" ).droppable({
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