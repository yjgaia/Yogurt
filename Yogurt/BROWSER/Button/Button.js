Yogurt.Button = CLASS({

	preset : () => {
		return UUI.BUTTON;
	},

	params : () => {

		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.buttonColor;
		let mouseoverColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonMouseoverColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonMouseoverColor;
		
		let titleColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonTitleColor === undefined ? mouseoverColor : BROWSER_CONFIG.Yogurt.buttonTitleColor;
		let mouseoverTitleColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonMouseoverTitleColor === undefined ? color : BROWSER_CONFIG.Yogurt.buttonMouseoverTitleColor;
		
		return {
			style : {
				padding : '20px 30px',
				color : titleColor,
				fontSize : 24,
				border : '1px solid ' + titleColor,
				borderRadius : 5,
				backgroundColor : color
			},
			spacing : 5,
			on : {
				mouseover : (e, input) => {
					input.addStyle({
						color : mouseoverTitleColor,
						backgroundColor : mouseoverColor
					});
				},
				mouseout : (e, input) => {
					input.addStyle({
						color : titleColor,
						backgroundColor : color
					});
				}
			}
		};
	}
});
