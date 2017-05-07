Yogurt.BackButton = CLASS({

	preset : () => {
		return Yogurt.ToolbarButton;
	},
	
	params : () => {
		return {
			icon : FontAwesome.GetIcon('chevron-left')
		};
	}
});
