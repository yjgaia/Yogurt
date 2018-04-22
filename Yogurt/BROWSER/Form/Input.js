Yogurt.Input = CLASS({

	preset : () => {
		return UUI.FULL_INPUT;
	},

	params : () => {
		return {
			style : {
				padding : 5,
				backgroundColor : '#fff',
				position : 'relative',
				border : '1px solid ' + Yogurt.Theme.inputBorderColor
			}
		};
	}
});
