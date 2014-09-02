Yogurt.Submit = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.value

		var
		// value
		value = params === undefined ? undefined : params.value,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ButtonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ButtonColor;

		inner.setDom( input = INPUT({
			type : 'submit',
			style : {
				display : 'block',
				textAlign : 'center',
				paddingTop : 20,
				paddingBottom : 20,
				cursor : 'pointer',
				textDecoration : 'none',
				color : color,
				fontSize : 24,
				border : '1px solid ' + color,
				borderRadius : 5,
				touchCallout : 'none',
				userSelect : 'none',
				backgroundColor : '#fff',
				width : '100%'
			},
			value : value,
			on : {
				mouseover : function() {
					input.addStyle({
						color : '#fff',
						backgroundColor : color
					});
				},
				mouseout : function() {
					input.addStyle({
						color : color,
						backgroundColor : '#fff'
					});
				}
			}
		}));
	}
});
