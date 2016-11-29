$( document ).ready(function() {
    
    // change from grey to blue color input
    
    
  $(".styled-input-container input").focus(function () {
     $id = this.id;
     $idgen = '#' + $id;
     console.log($idgen);
     
     $($idgen).closest( "div" ).addClass('focused');
    });
    
    $(".styled-input-container input").blur(function() {
        $('.styled-input-container').removeClass('focused');
        
    });
  
  
    
    //open % close ul list input
    
   $(function() {
  $('.drop-down-input').click(function() {
  $('.drop-down-input.selected').removeClass('selected'); // Forget the previous selection
  $(this).addClass('selected');
  $(this).find(".dropdown-list").show();
});

$(document).on("click", ".drop-down-input.selected li",
  function(e) {
    e.stopPropagation();
    $('.drop-down-input.selected .dropdown-list').hide().siblings().val($(this).html());
  });
});
 $(document).mouseup(function (e){
    var container = $(".dropdown-list");

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.hide();
    }
});  

});