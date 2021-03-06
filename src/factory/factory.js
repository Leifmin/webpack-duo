// 传统页面改造方式,需要安装npm install jquery
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	$.sum = function(a, b){
		return a+b;
	}

	$.fn.green = function(){
		$(this).each(function(){
			$(this).css('color','green');
		});
	}

}));