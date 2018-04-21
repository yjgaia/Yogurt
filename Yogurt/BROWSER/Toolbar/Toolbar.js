Yogurt.Toolbar = CLASS((cls) => {

	const Z_INDEX = 999;
	const HEIGHT = 48;

	return {

		preset : () => {
			return NODE;
		},

		init : (inner, self, params) => {
			//OPTIONAL: params
			//OPTIONAL: params.left
			//OPTIONAL: params.title
			//OPTIONAL: params.right
			//OPTIONAL: params.height
			//OPTIONAL: params.style
			//OPTIONAL: params.contentStyle

			let left = params === undefined ? undefined : params.left;
			let title = params === undefined ? undefined : params.title;
			let right = params === undefined ? undefined : params.right;
			let height = params === undefined ? undefined : params.height;
			if (height === undefined) {
				height = HEIGHT;
			}
			
			let contentStyle = params === undefined ? undefined : params.contentStyle;

			let titleDom;
			let content;

			let wrapper = DIV({
				style : {
					height : height
				},
				c : content = DIV({
					style : {
						position : 'fixed',
						top : 0,
						background : Yogurt.Theme.toolbarBackground,
						backgroundColor : Yogurt.Theme.toolbarColor,
						backgroundImage : Yogurt.Theme.toolbarBackgroundImage,
						height : height,
						width : '100%',
						zIndex : Z_INDEX,
						color : Yogurt.Theme.toolbarTextColor
					},
					c : [left === undefined ? '' : DIV({
						style : {
							position : 'absolute',
							top : 0,
							left : 0
						},
						c : left
					}), titleDom = H1({
						style : {
							paddingTop : 11,
							fontSize : 20,
							textAlign : 'center',
							fontWeight : 'bold'
						},
						c : title === undefined ? '' : title
					}), right === undefined ? '' : DIV({
						style : {
							position : 'absolute',
							top : 0,
							right : 0
						},
						c : right
					})]
				})
			});

			inner.setWrapperDom(wrapper);
			inner.setContentDom(content);

			let addContentStyle = self.addContentStyle = (style) => {
				//REQUIRED: style

				content.addStyle(style);
			};

			if (contentStyle !== undefined) {
				addContentStyle(contentStyle);
			}

			let setTitle = self.setTitle = (title) => {
				titleDom.empty();
				titleDom.append(title);
			};
		}
	};
});
