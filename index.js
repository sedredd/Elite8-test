
$(".navItem1").on({
    mouseenter: function () {
        $(this).addClass("buttonHover");
    },
    mouseleave: function () {
        $(this).removeClass("buttonHover");
    }
});

$(".navItem2").on({
    mouseenter: function () {
        $(this).addClass("buttonHover");
    },
    mouseleave: function () {
        $(this).removeClass("buttonHover");
    }
});

$(".navItem3").on({
    mouseenter: function () {
        $(this).addClass("buttonHover");
    },
    mouseleave: function () {
        $(this).removeClass("buttonHover");
    }
});

$(".navItem4").on({
    mouseenter: function () {
        $(this).addClass("buttonHover");
    },
    mouseleave: function () {
        $(this).removeClass("buttonHover");
    }
});

$(document).ready(function() {
    $("#train1").hover(function() {
        $("#panel1").slideToggle("fast");
    })
})
 
$(document).ready(function() {
    $("#train2").hover(function() {
        $("#panel2").slideToggle("fast");
    })
})
 
$(document).ready(function() {
    $("#train3").hover(function() {
        $("#panel3").slideToggle("fast");
    })
})
 
    

