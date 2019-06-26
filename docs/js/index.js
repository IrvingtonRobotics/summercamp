// enlargeable images
$('img[data-enlargeable]').addClass('img-enlargeable').click(function(){
	// https://stackoverflow.com/a/50430187
	var src = $(this).attr('src');
	$('<div>').css({
		background: 'RGBA(0,0,0,0.8) url('+src+') no-repeat center',
		backgroundSize: 'contain',
		width:'100%', height:'100%',
		position:'fixed',
		zIndex:'10000',
		top:'0', left:'0',
		cursor: 'zoom-out'
	}).click(function(){
		$(this).remove();
	}).appendTo('body');
});

var chosenButtonClass = "is-info is-selected";
var campNames = [ "nurture", "genius" ];

function getButton(camp) {
	return $("#choose-" + camp)
}

function chooseCamp(camp) {
	$("body")
		.removeClass("is-unchosen is-genius is-nurture")
		.addClass("is-" + camp);
	campNames.forEach(function(camp) {
		getButton(camp).removeClass(chosenButtonClass);
	})
	getButton(camp)
		.addClass(chosenButtonClass)
		.off("click")
		.click(unchooseCamp);
}

function unchooseCamp() {
	$("body").removeClass("is-nurture is-genius").addClass("is-unchosen");
	campNames.forEach(function(camp) {
		getButton(camp)
			.removeClass(chosenButtonClass)
			.click(function() {
				chooseCamp(camp)
			})
	})
}

unchooseCamp();

if (window.location.hash == "#nurture") {
	chooseCamp("nurture");
} else if (window.location.hash == "#genius") {
	chooseCamp("genius");
}

// https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
$('a[href*="#"]').on('click', function(e) {
  // e.preventDefault()

	console.log($($(this).attr('href')).offset());

	var href = $(this).attr('href');
	var element = $(href);
	if (element.length == 0) {
		element = $("[name=" + href.substring(1) + "]")
	}
  scrollTo(element);
})

function scrollTo(element) {
	$('html, body').animate(
    {
      scrollTop: $(element).offset().top,
    },
    500,
    'linear'
  )
}
