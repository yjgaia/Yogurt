Yogurt.Submit = CLASS({

	preset : () => {
		return UUI.FULL_SUBMIT;
	},

	params : () => {
		return {
			style : {
				display : 'block',
				textAlign : 'center',
				paddingTop : 15,
				paddingBottom : 15,
				cursor : 'pointer',
				textDecoration : 'none',
				color : Yogurt.Theme.buttonTitleColor,
				fontSize : 20,
				borderRadius : 5,
				touchCallout : 'none',
				userSelect : 'none',
				backgroundColor : Yogurt.Theme.buttonColor,
				width : '100%'
			},
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
