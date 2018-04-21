Yogurt.Select = CLASS({

	preset : () => {
		return UUI.FULL_SELECT;
	},

	params : () => {
		return {
			style : {
				padding : 5,
				backgroundColor : '#FFF',
				position : 'relative',
				border : '1px solid #666',
				borderLeft : '5px solid #666'
			}
		};
	}
});
