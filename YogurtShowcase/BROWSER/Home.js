YogurtShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Toolbar.');

		let wrapper = Yogurt.Wrapper({
			style : {
				padding : 20
			},
			c : [
			Yogurt.AppButton({
				style : {
					flt : 'left'
				},
				icon : IMG({
					style : {
						border : '1px solid #ccc'
					},
					src : YogurtShowcase.R('dashboard.png')
				}),
				title : 'Dashboard',
				on : {
					tap : () => {
						YogurtShowcase.GO('Dashboard');
					}
				}
			}),
			
			Yogurt.AppButton({
				style : {
					marginLeft : 20,
					flt : 'left'
				},
				icon : IMG({
					style : {
						border : '1px solid #ccc'
					},
					src : YogurtShowcase.R('salad.png')
				}),
				title : 'Kitchen Sink',
				on : {
					tap : () => {
						YogurtShowcase.GO('KitchenSink');
					}
				}
			}),
			
			CLEAR_BOTH()]
		}).appendTo(YogurtShowcase.GLOBAL.content);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
