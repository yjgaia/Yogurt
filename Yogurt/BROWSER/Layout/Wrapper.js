Yogurt.Wrapper = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		inner.setDom(DIV({
			style : COMBINE([{
				backgroundColor : '#fff',
				color : '#000',
				fontSize : 16
			}, BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.wrapperStyle === undefined ? {} : BROWSER_CONFIG.Yogurt.wrapperStyle])
		}));
	}
});
