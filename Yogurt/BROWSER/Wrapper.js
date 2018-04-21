Yogurt.Wrapper = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		inner.setDom(DIV({
			style : Yogurt.Theme.wrapperStyle
		}));
	}
});
