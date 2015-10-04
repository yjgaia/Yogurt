Yogurt.Toolbar = CLASS(function(cls) {
	'use strict';

	var
	// z index
	zIndex = 999,

	// height
	height = 50;

	return {

		preset : function() {
			return NODE;
		},

		init : function(inner, self, params) {
			//OPTIONAL: params
			//OPTIONAL: params.left
			//OPTIONAL: params.title
			//OPTIONAL: params.right
			//OPTIONAL: params.style
			//OPTIONAL: params.contentStyle

			var
			// left
			left = params === undefined ? undefined : params.left,

			// title
			title = params === undefined ? undefined : params.title,

			// right
			right = params === undefined ? undefined : params.right,
			
			// background
			background = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackground,

			// color
			color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.toolbarColor,

			// background image
			backgroundImage = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackgroundImage,

			// text color
			textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.toolbarTextColor,

			// content style
			contentStyle = params === undefined ? undefined : params.contentStyle,

			// wrapper
			wrapper,

			// title dom
			titleDom,

			// content
			content,

			// add content style.
			addContentStyle,

			// set title.
			setTitle;

			wrapper = DIV({
				style : {
					height : height
				},
				c : content = DIV({
					style : {
						position : 'fixed',
						top : 0,
						background : background,
						backgroundColor : color,
						backgroundImage : backgroundImage,
						height : height,
						width : '100%',
						zIndex : zIndex,
						color : textColor
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
							paddingTop : 13,
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

			self.addContentStyle = addContentStyle = function(style) {
				//REQUIRED: style

				content.addStyle(style);
			};

			if (contentStyle !== undefined) {
				addContentStyle(contentStyle);
			}

			self.setTitle = setTitle = function(title) {
				titleDom.empty();
				titleDom.append(title);
			};
		}
	};
});
