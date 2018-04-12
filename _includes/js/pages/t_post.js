$(document).ready(function() {
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#tpost-puller').hide();
    $('#show-tpost-puller').click(function(){;
        $('#tpost-puller').slideDown();
    });
});
