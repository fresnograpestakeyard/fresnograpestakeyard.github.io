$(document).ready(function() {
    $('#category-15').css('background-color', '#fff');
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#lifter').hide();
    $('#show-lifter').click(function(){;
        $('#lifter').slideDown();
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
