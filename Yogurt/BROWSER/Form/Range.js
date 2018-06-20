Yogurt.Range = CLASS({

	preset : () => {
		return UUI.RANGE;
	},

	params : () => {
		return {
			thumbStyle : {
				backgroundColor : Yogurt.Theme.rangeThumbColor,
				height : 20,
				width : 20,
				borderRadius : 10
			},
			trackStyle : {
				height : 3,
				backgroundColor : Yogurt.Theme.rangeTrackColor
			}
		};
	}
});
