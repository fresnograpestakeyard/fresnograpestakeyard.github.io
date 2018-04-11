$(document).ready(function() {
    $('#category-8').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#maasdam').hide();
    $('#wire-grip').hide();
    $('#show-maasdam').click(function(){;
        $('#maasdam').slideDown();
    });
    $('#show-wire-grip').click(function(){;
        $('#wire-grip').slideDown();
    });
});
