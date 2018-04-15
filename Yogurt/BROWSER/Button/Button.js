Yogurt.Button = CLASS({

	preset : () => {
		return UUI.BUTTON;
	},

	params : () => {

		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.buttonColor;
		let mouseoverColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonMouseoverColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonMouseoverColor;

		return {
			style : {
				padding : '20px 30px',
				color : mouseoverColor,
				fontSize : 24,
				border : '1px solid ' + mouseoverColor,
				borderRadius : 5,
				backgroundColor : color
			},
			spacing : 5,
			on : {
				mouseover : (e, input) => {
					input.addStyle({
						color : color,
						backgroundColor : mouseoverColor
					});
				},
				mouseout : (e, input) => {
					input.addStyle({
						color : mouseoverColor,
						backgroundColor : color
					});
				}
			}
		};
	}
});
