Yogurt.Prompt = CLASS({

	preset : () => {
		return UUI.PROMPT;
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

	init : (inner, self, message) => {
		//REQUIRED: message
		
		self.append(message);
		
		self.getOkButton().on('mouseover', (e, button) => {
			button.addStyle({
				color : Yogurt.Theme.buttonMouseoverTitleColor,
				backgroundColor : Yogurt.Theme.buttonMouseoverColor
			});
		});
		
		self.getOkButton().on('mouseout', (e, button) => {
			button.addStyle({
				color : 'inherit',
				backgroundColor : 'transparent'
			});
		});
		
		self.getCancelButton().on('mouseover', (e, button) => {
			button.addStyle({
				color : Yogurt.Theme.buttonMouseoverTitleColor,
				backgroundColor : Yogurt.Theme.buttonMouseoverColor
			});
		});
		
		self.getCancelButton().on('mouseout', (e, button) => {
			button.addStyle({
				color : 'inherit',
				backgroundColor : 'transparent'
			});
		});
	}
});
