$(document).ready(function() {
    $('#category-1').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#postmaster-steel-posts').hide();

    $('#show-postmaster-steel-posts').click(function() {;
        $('#postmaster-steel-posts').slideDown();
    });
});
