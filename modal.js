$(document).ready(() => {

	$(".modal").hide("#modalid");
    
	let para = `Woohoo, you're reading this text in a modal!`;
	$(".modalbody").text(para);

	$("#btnclick").click(() => {

        $("#modalid").slideDown();
    })

    $("#closebtn").click(() => {

    	$("#modalid").hide();
    })

     $("#closetop").click(() => {

    	$("#modalid").hide();
    })

})

