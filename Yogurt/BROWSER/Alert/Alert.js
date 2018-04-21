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
		
		self.getButton().on('mouseover', (e, button) => {
			button.addStyle({
				color : Yogurt.Theme.buttonMouseoverTitleColor,
				backgroundColor : Yogurt.Theme.buttonMouseoverColor
			});
		});
		
		self.getButton().on('mouseout', (e, button) => {
			button.addStyle({
				color : Yogurt.Theme.buttonTitleColor,
				backgroundColor : 'transparent'
			});
		});
	}
});
