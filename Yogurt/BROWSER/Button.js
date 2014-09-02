Yogurt.Button = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// img
		img = params.img,

		// title
		title = params.title,

		// href
		href = params.href,

		// target
		target = params.target,

		// style
		style = params.style,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ButtonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ButtonColor,

		// a
		a,

		// span
		span,

		// set title.
		setTitle,

		// get img.
		getImg,

		// tap.
		tap;

		a = A({
			style : {
				display : 'block',
				textAlign : 'center',
				paddingTop : 20,
				paddingBottom : 20,
				cursor : 'pointer',
				textDecoration : 'none',
				color : color,
				fontSize : 24,
				border : '1px solid ' + color,
				borderRadius : 5,
				touchCallout : 'none',
				userSelect : 'none',
				backgroundColor : '#fff'
			},
			href : href,
			target : target,
			on : {
				mouseover : function() {
					a.addStyle({
						color : '#fff',
						backgroundColor : color
					});
				},
				mouseout : function() {
					a.addStyle({
						color : color,
						backgroundColor : '#fff'
					});
				}
			}
		});

		if (title !== undefined) {
			a.prepend(DIV({
				c : span = SPAN({
					c : title === undefined ? '' : title
				})
			}));
		}

		if (img !== undefined) {
			a.prepend(DIV({
				style : {
					marginBottom : title !== undefined ? 5 : 0
				},
				c : [img]
			}));
		}

		inner.setDom(a);

		self.setTitle = setTitle = function(title) {
			span.empty();
			span.append(title);
		};

		self.getImg = getImg = function() {
			return img;
		};

		self.tap = tap = function() {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
