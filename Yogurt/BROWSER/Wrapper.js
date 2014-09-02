Yogurt.Wrapper = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		inner.setDom(DIV({
			style : COMBINE([{
				backgroundColor : '#fff',
				color : '#000',
				fontSize : 16,
				position : 'absolute',
				left : 0,
				top : 0,
				width : '100%'
			}, BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.WrapperStyle === undefined ? {} : BROWSER_CONFIG.Yogurt.WrapperStyle])
		}));
	}
});
