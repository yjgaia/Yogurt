YogurtShowcase.Dashboard = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Toolbar.');

		let wrapper = Yogurt.Wrapper({
			c : 'test'
		}).appendTo(YogurtShowcase.GLOBAL.content);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
