$(function(){

    // パレット側の操作
    $('#color').on('input', function(){
        var pallet = $('#color').val();
        $('.pallet .cord').val(pallet);
    })

    $('.pallet .copy').on('click', function(){
        $('.pallet .cord').select();
        document.execCommand('copy')
    })

    $('.pallet .reset').on('click', function(){
        $('#color').val('');
        $('.pallet .cord').val('#000000');
    })

    // スライドバー側の操作
    $('#red, #green, #blue, #alpha').on('input', function(){
        var red = $('#red').val();
            green = $('#green').val();
            blue = $('#blue').val();
            alpha = $('#alpha').val();
            back = 'rgb(' + red + ', ' + green + ', ' + blue + ', ' + alpha +')';
        
        $('.slide .cord').val('rgba('+ red + ', ' + green + ', ' + blue + ', ' + alpha +')');
        $('.slide p').css('backgroundColor', back);
        $('.redVal').text(red);
        $('.greenVal').text(green);
        $('.blueVal').text(blue);
        $('.alphaVal').text(alpha);
    })

    $('.slide .copy').on('click', function(){
        $('.slide .cord').select();
        document.execCommand('copy')
    })

    $('.slide .reset').on('click', function(){
        $('#red, #green, #blue').val('');
        $('#alpha').val(1);
        $('.slide .cord').val('rgba(128, 128, 128, 1)');
        $('.slide p').css('backgroundColor', 'rgba(128, 128, 128, 1)');
        $('.redVal, .greenVal,.blueVal').text('128');
        $('.alphaVal').text('1');
    });

});