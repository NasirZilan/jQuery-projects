$('input').keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>'+todoText+'<span><i class="fa fa-trash"></i></span></li>');
    }
})
$('ul').on('click','span', function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    e.stopPropagation();
})