$(document).ready(() => {

	$(".collapse").hide("#collapseExample1");
	$(".collapse").hide("#collapseExample2");
	$(".collapse").hide("#collapseExample3");


	$("#btn1").click(() => {
        if($(".collapse").hide("#collapseExample1"))
        {
            $("#collapseExample1").show();
        }
        else 
        {
            $(".collapse").hide("#collapseExample1");
        }
        
    })

    $("#btn2").click(() => {
        if($(".collapse").hide("#collapseExample2"))
        {
            $("#collapseExample2").show();
        }
        else 
        {
            $(".collapse").hide("#collapseExample2");
        }
        
    })

    $("#btn3").click(() => {
        if($(".collapse").hide("#collapseExample3"))
        {
            $("#collapseExample3").show();
        }
        else 
        {
            $(".collapse").hide("#collapseExample3");
        }
        
    })
})