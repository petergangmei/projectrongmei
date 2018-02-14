$(document).ready(function(){
 $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger:'hover'
    });

	$("#showme").click(function(){

       $(".c_textarea").css("border-bottom", "2px solid black");
	});
	$("#showme").keydown(function(){
         $(".c_textarea").css("border-bottom", "2px solid black");
	});

	$("#showme").focusout(function(){
       $(".c_textarea").css("border-bottom", "1px solid silver");
	});

    $("#showme").keydown(function(){
        // alert('test alert');
        $(".csshide").show();

    var comment = $("#showme").val();
    var comment_length = comment.length;
	if(comment_length >= 5){
		$('.csshide').prop('disabled', false);
         $(".c_textarea").css("border-bottom", "2px solid black");


	}else{
		$('.csshide').prop('disabled', true);
		$('.csshide').hide();
         $(".c_textarea").css("border-bottom", "2px solid black");
	}
    });

    $("#showme").focusout(function(){
       $(".c_textarea").css("border-bottom", "1px solid silver");
	});

    $("#show").click(function(){
        $("p").show();
    });

    //jquewry for comment post
    $('#cBtn').click(function(event) {
      var text = $('#showme').val();
      $.post('list', {'comment': text}, function(data) {
        console.log(data);
      });
    });

});

$(document).ready(function(){
// accout type switch
// individual to community toggle
$("#community").click(function(){
  $('.individual_rcontent').fadeOut(function(){
    $('.community_rcontent').fadeIn();
  });
});

// community to individual toggle
$("#individual").click(function(){
  $('.community_rcontent').fadeOut(function(){
    $('.individual_rcontent').fadeIn();
  });
});


});
