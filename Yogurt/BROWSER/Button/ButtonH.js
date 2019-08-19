Yogurt.ButtonH = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {

		return {
			style : {
				padding : '10px 20px',
				color : Yogurt.Theme.buttonTitleColor,
				fontSize : 20,
				borderRadius : 5,
				backgroundColor : Yogurt.Theme.buttonColor,
				border : Yogurt.Theme.buttonBorder
			},
			spacing : 10,
			on : {
				mouseover : (e, input) => {
					input.addStyle({
						color : Yogurt.Theme.buttonMouseoverTitleColor,
						backgroundColor : Yogurt.Theme.buttonMouseoverColor
					});
				},
				mouseout : (e, input) => {
					input.addStyle({
						color : Yogurt.Theme.buttonTitleColor,
						backgroundColor : Yogurt.Theme.buttonColor
					});
				}
			}
		};
	}
});
