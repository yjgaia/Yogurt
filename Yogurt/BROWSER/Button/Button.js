Yogurt.Button = CLASS({

	preset : () => {
		return UUI.BUTTON;
	},

	params : () => {

		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		return {
			style : {
				padding : '20px 30px',
				color : color,
				fontSize : 24,
				border : '1px solid ' + color,
				borderRadius : 5,
				backgroundColor : '#fff'
			},
			spacing : 5,
			on : {
				mouseover : (e, input) => {
					input.addStyle({
						color : '#fff',
						backgroundColor : color
					});
				},
				mouseout : (e, input) => {
					input.addStyle({
						color : color,
						backgroundColor : '#fff'
					});
				}
			}
		};
	}
});
