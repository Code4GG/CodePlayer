	//Reaching inside the window to find the height of the browser
	//Finding the height of the menu
	const windowHeight = $(window).height();
	const menuHeight = $('#header').height();

	let codeContainerHeight = windowHeight - menuHeight;
	//placement for main container is the difference between the window and menu
	$('.codeContainer').height(codeContainerHeight+"px");
	//allowing the transfer between toggles
	$('.toggle').on('click', function(){

		$(this).toggleClass("selected");

		let activeDiv = $(this).html();
	//taking the current html and adding container so it matches the proper id
	//then toggling it
		$("#"+activeDiv+"Container").toggle();
		//looping through each div
		let showingDivs = $(".codeContainer").filter(function(){
			//finding the display of the toggled divs
			//display will be true if its not equal to none
			return($(this).css("display")!="none");
			//adding length so that we can see how many divs are active
		}).length;
		//making sure each div is an equal length equavalent to how many divs
		//are showing
		let width = 100/showingDivs;

		$(".codeContainer").width(width + "%");

	})

	$("#run").on('click',function(){
		//finding all the html contents within ccsCode and htmlCode and displaying their values
		$("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
		//grabbing resultframes content of that window
		//evaluates the javascript code value and displaying it within the result
		document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());

	})