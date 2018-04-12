$(document).ready(function() {
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#postmaster-steel-posts').hide();

    $('#show-postmaster-steel-posts').click(function() {;
        $('#postmaster-steel-posts').slideDown();
    });
});
