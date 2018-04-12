$(document).ready(function() {
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#show-postmaster-steel-posts').click(function() {;
        $('#postmaster-steel-posts').slideDown();
    });
});
