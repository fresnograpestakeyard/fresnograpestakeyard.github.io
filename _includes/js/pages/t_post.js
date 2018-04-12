$(document).ready(function() {
    $('#category-9').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#tpost-puller').hide();
    $('#show-tpost-puller').click(function(){;
        $('#tpost-puller').slideDown();
    });
});
