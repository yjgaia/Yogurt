Yogurt.Prompt = CLASS({

	preset : function() {
		'use strict';

		return UUI.PROMPT;
	},

	params : function() {
		'use strict';

		return {
			style : {
				backgroundColor : '#fff',
				color : '#333',
				textAlign : 'center',
				border : '1px solid #333',
				borderRadius : 5,
				boxShadow : '0 0 5px rgba(0,0,0,0.3)',
				onDisplayResize : function(width, height) {

					if (width > 300) {
						return {
							width : 280
						};
					} else {
						return {
							width : '90%'
						};
					}
				}
			},
			contentStyle : {
				padding : 20,
				fontSize : 20
			},
			inputStyle : {
				borderTop : '1px solid #999',
				padding : 15,
				fontSize : 20
			},
			okButtonStyle : {
				flt : 'left',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%',
				fontSize : 20
			},
			cancelButtonStyle : {
				flt : 'right',
				marginLeft : -1,
				borderLeft : '1px solid #999',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%',
				fontSize : 20
			}
		};
	},

	init : function(inner, self, message) {
		'use strict';
		//REQUIRED: message
		
		var
		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		self.append(message);
		
		self.getOkButton().on('mouseover', function(e, button) {
			button.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});
		
		self.getOkButton().on('mouseout', function(e, button) {
			button.addStyle({
				color : color,
				backgroundColor : 'transparent'
			});
		});
		
		self.getCancelButton().on('mouseover', function(e, button) {
			button.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});
		
		self.getCancelButton().on('mouseout', function(e, button) {
			button.addStyle({
				color : color,
				backgroundColor : 'transparent'
			});
		});
		
		UANI.FADE_IN({
			node : self.getNode()
		});
	}
});
