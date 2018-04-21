Yogurt.AppButton = CLASS({

	preset : () => {
		return UUI.BUTTON;
	},

	params : () => {
		return {
			style : {
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
