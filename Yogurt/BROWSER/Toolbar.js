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

			var
			// left
			left = params === undefined ? undefined : params.left,

			// title
			title = params === undefined ? undefined : params.title,

			// right
			right = params === undefined ? undefined : params.right,

			// color
			color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ToolbarColor,

			// text color
			textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.ToolbarTextColor;

			inner.setDom(DIV({
				style : {
					backgroundColor : color,
					height : height,
					color : textColor
				},
				c : [DIV({
					style : {
						position : 'fixed',
						top : 0,
						backgroundColor : color,
						height : height,
						width : '100%',
						zIndex : zIndex
					},
					c : [left === undefined ? '' : DIV({
						style : {
							position : 'absolute',
							top : 0,
							left : 0
						},
						c : left
					}), H1({
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
				})]
			}));
		}
	};
});
