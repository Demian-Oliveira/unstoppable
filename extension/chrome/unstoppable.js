// console.log("comecando");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === "class" || mutation.attributeName === "style") {
		$cmp = $(mutation.target)
		// console.log("tagName: ", $cmp.prop("tagName"), " | overflow: ", $cmp.css('overflow'));
		if($cmp.css('overflow') == 'hidden') {
		   	$cmp.attr("style", "overflow: auto!important");
		   	console.log("overflow DISABLED");
		} else {
			// console.log("overflow not found");
		}
    }
  });
});
jQuery.each( [$('html'), $('body')], function( i, cmp ) {
	observer.observe(cmp[0], {
	  attributes: true
	});
});