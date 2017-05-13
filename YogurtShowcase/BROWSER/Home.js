YogurtShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt Toolbar.');

		let wrapper = Yogurt.Wrapper({
			c : [
			
			Yogurt.Toolbar({
				title : 'Yogurt!'
			}),
			
			DIV({
				style : {
					padding : 20
				},
				c : [Yogurt.AppButton({
					style : {
						flt : 'left'
					},
					icon : IMG({
						style : {
							border : '1px solid #ccc'
						},
						src : YogurtShowcase.R('analytics.png')
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
						src : YogurtShowcase.R('browser.png')
					}),
					title : 'IDE',
					on : {
						tap : () => {
							YogurtShowcase.GO('IDE');
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
			}),
			
			P({
				style : {
					padding : 20,
					fontSize : 12
				},
				c : ['All icons designed by ', A({
					style : {
						color : '#0366d6'
					},
					href : 'http://www.flaticon.com/authors/madebyoliver',
					target : '_blank',
					c : 'Madebyoliver from Flaticon'
				}), '.']
			})]
		}).appendTo(YogurtShowcase.GLOBAL.content);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
