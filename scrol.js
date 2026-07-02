$(window).scroll(function(){
    if($(this).scrollTop()>160)
    {
        $(".navbar-expand-lg").addClass("yellow")
        $(".arrow").show("yellow")
    }
    else
    {
        $(".navbar-expand-lg").removeClass("yellow")
        $(".arrow").hide("yellow")
    }

  })
