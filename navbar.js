$(document).ready(() => {

	$(".drop").hide("#dropdown");

    $("#dd").click(() => {
        if($(".drop").hide("#dropdown"))
        {
            $("#dropdown").show();
        }
        else 
        {
            $(".drop").hide("#dropdown");
        }
        
    })
})
    
