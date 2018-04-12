$(document).ready(function() {
    $('.close').click(function() {
        $(this).parent().hide();
    });

    $('#panel5-52galvanized').hide();
    $('#show-panel5-52galvanized').click(function(){;
        $('#panel5-52galvanized').slideDown();
    });
    $('#econo-gate1').hide();
    $('#show-econo-gate1').click(function(){;
        $('#econo-gate1').slideDown();
    });
    $('#econo-rancher-gate').hide();
    $('#show-econo-rancher-gate').click(function(){;
        $('#econo-rancher-gate').slideDown();
    });
    $('#super-rancher-gate').hide();
    $('#show-super-rancher-gate').click(function(){;
        $('#super-rancher-gate').slideDown();
    });
    $('#canine-kennel').hide();
    $('#show-canine-kennel').click(function(){;
        $('#canine-kennel').slideDown();
    });
    $('#heavy-rail-pipe-gate').hide();
    $('#show-heavy-rail-pipe-gate').click(function(){;
        $('#heavy-rail-pipe-gate').slideDown();
    });
    $('#heavy-rail-pipe-panel').hide();
    $('#show-heavy-rail-pipe-panel').click(function(){;
        $('#heavy-rail-pipe-panel').slideDown();
    });
});
