Yogurt.ToolbarButton = CLASS({

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

		// a
		a,

		// title dom
		titleDom,

		// span
		span,

		// evt
		evt,

		// set title.
		setTitle,

		// get img.
		getImg,

		// tap.
		tap;

		a = A({
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

			evt = EVENT({
				node : img,
				name : 'load'
			}, function(e) {
				titleDom.addStyle({
					marginTop : (img.getHeight() - titleDom.getHeight()) / 2
				});

				evt.remove();
			});
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
