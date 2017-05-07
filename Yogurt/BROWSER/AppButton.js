Yogurt.AppButton = CLASS({

	preset : () => {
		return UUI.BUTTON;
	},

	params : () => {

		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.buttonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.buttonColor;

		return {
			style : {
				color : color,
				fontSize : 16
			},
			spacing : 5
		};
	},
	
	init : (self, inner, params) => {
		//REQUIRED: params
		//REQUIRED: params.icon
		//REQUIRED: params.title
		
		let icon = params.icon;
		
		icon.addStyle({
			width : 80,
			backgroundColor : '#fff',
			borderRadius : 10
		});
	}
});
