$(document).ready(function() {
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#stake-puller').hide();
    $('#show-stake-puller').click(function(){;
        $('#stake-puller').slideDown();
    });
});
