	const windowHeight = $(window).height();
	const menuHeight = $('#header').height();

	let codeContainerHeight = windowHeight - menuHeight;

	$('.codeContainer').height(codeContainerHeight+"px");