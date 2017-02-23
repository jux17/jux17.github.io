$('#chevron').click(function() {
	$('#mainSite').show();
	$.scrollTo('#mainSite',{
		duration: 700
		})
})
$('#mtb').on('mouseover', function() {
	$('#mtb').toggleClass('animated rubberBand');
})