var args = arguments[0] || {};

/**
 * apply only the whitelisted properties
 */
var props = ['width','height','top','left','backgroundColor'];
_.each(props,function(p){
	if (args.hasOwnProperty(p)){
		$.button[p] = args[p];
	}
});

var props = ['color','font','top','left','text'];
_.each(props,function(p){
	if (args.label && args.label.hasOwnProperty(p)){
		$.buttonLabel[p] = args.label[p];
	}
});

function click(e){
	$.trigger('click',e);
}

function swipe(e){
	$.trigger('away', e);
}
