Yogurt.ToolbarButton = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.title
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		let icon = params.icon;
		let title = params.title;
		let href = params.href;
		let target = params.target;

		let titleDom;
		let span;
		
		let a = A({
			style : {
				display : 'block',
				padding : '16px 10px',
				cursor : 'pointer',
				fontSize : 16
			},
			href : href,
			target : target,
			c : [ titleDom = DIV({
				style : {
					flt : 'left',
					marginTop : -3
				},
				c : span = SPAN({
					c : title === undefined ? '' : title
				})
			}), CLEAR_BOTH()]
		});

		if (icon !== undefined) {

			icon.addStyle({
				flt : 'left'
			});

			if (icon.getStyle('margin') === undefined && icon.getStyle('marginRight') === undefined) {
				icon.addStyle({
					marginRight : 7
				});
			}

			a.prepend(icon);

			let evt = EVENT({
				node : icon,
				name : 'load'
			}, (e) => {
				titleDom.addStyle({
					marginTop : (icon.getHeight() - titleDom.getHeight()) / 2
				});

				evt.remove();
			});
		}

		inner.setDom(a);

		let setTitle = self.setTitle = (title) => {
			span.empty();
			span.append(title);
		};

		let getIcon = self.getIcon = () => {
			return icon;
		};

		let tap = self.tap = () => {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
