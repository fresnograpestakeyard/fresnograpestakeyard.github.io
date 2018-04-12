$(document).ready(function() {
    $('#category-6').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#stake-puller').hide();
    $('#show-stake-puller').click(function(){;
        $('#stake-puller').slideDown();
    });
});
