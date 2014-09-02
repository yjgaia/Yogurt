Yogurt.BottomTap = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		var
		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ToolbarColor;

		inner.setDom({
			style : {
				height : 60,
				color : '#fff'
			},
			c : content = DIV({
				style : {
					position : 'fixed',
					bottom : 0,
					backgroundColor : color,
					height : 60,
					width : '100%',
					textAlign : 'center'
				}
			})
		});
	}
});
