Yogurt.BottomButton = CLASS((cls) => {
	
	let width = 60;
	let imageHeight = 24;
	
	let getWidth = cls.getWidth = () => {
		return width;
	};

	return {

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

			let a = A({
				style : {
					flt : 'left',
					display : 'block',
					textAlign : 'center',
					cursor : 'pointer',
					textDecoration : 'none',
					touchCallout : 'none',
					userSelect : 'none',
					fontSize : 12,
					width : width
				},
				href : href,
				target : target
			});

			if (title !== undefined) {
				a.prepend( titleDom = DIV({
					c : title === undefined ? '' : title
				}));
			}

			if (img !== undefined) {

				a.prepend(DIV({
					style : {
						marginBottom : title !== undefined ? 5 : 0
					},
					c : img
				}));

				img.addStyle({
					height : imageHeight
				});
			}

			inner.setDom(a);

			let setTitle = self.setTitle = (title) => {
				titleDom.empty();
				titleDom.append(title);
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
	};
});
