$(document).ready(function() {
    $('#category-17').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#show-postmaster-steel-posts').click(function() {;
        $('#postmaster-steel-posts').slideDown();
    });
});
