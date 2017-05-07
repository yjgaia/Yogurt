YogurtShowcase.Control = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		let wrapper = YogurtShowcase.GLOBAL.wrapper = Yogurt.Wrapper({
			c : [

			// content
			YogurtShowcase.GLOBAL.content = DIV()]
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
