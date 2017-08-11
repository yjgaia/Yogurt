Yogurt.Alert = CLASS({

	preset : () => {
		return UUI.ALERT;
	},

	params : () => {

		return {
			style : {
				backgroundColor : '#fff',
				color : '#333',
				textAlign : 'center',
				border : '1px solid #333',
				borderRadius : 5,
				boxShadow : '0 0 5px rgba(0,0,0,0.3)',
				onDisplayResize : (width, height) => {

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
			buttonStyle : {
				borderTop : '1px solid #999',
				padding : 15,
				fontSize : 20
			}
		};
	},

	init : (inner, self) => {
		
		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;
		
		self.getButton().on('mouseover', (e, button) => {
			button.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});
		
		self.getButton().on('mouseout', (e, button) => {
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
