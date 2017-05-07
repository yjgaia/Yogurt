Yogurt.ToolbarButton = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		let img = params.img;
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
					flt : 'left'
				},
				c : span = SPAN({
					c : title === undefined ? '' : title
				})
			}), CLEAR_BOTH()]
		});

		if (img !== undefined) {

			img.addStyle({
				flt : 'left'
			});

			if (img.getStyle('margin') === undefined && img.getStyle('marginRight') === undefined) {
				img.addStyle({
					marginRight : 5
				});
			}

			a.prepend(img);

			let evt = EVENT({
				node : img,
				name : 'load'
			}, (e) => {
				titleDom.addStyle({
					marginTop : (img.getHeight() - titleDom.getHeight()) / 2
				});

				evt.remove();
			});
		}

		inner.setDom(a);

		let setTitle = self.setTitle = (title) => {
			span.empty();
			span.append(title);
		};

		let getImg = self.getImg = () => {
			return img;
		};

		let tap = self.tap = () => {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
