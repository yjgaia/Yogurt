Yogurt.AppButton = CLASS({

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
				color : titleColor,
				fontSize : 16
			},
			spacing : 5
		};
	},
	
	init : (inner, self, params) => {
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
