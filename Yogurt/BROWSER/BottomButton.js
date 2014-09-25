Yogurt.BottomButton = CLASS(function(cls) {
	'use strict';

	var
	// width
	width = 60,

	// get width.
	getWidth;

	cls.getWidth = getWidth = function() {
		return width;
	};

	return {

		preset : function() {
			return NODE;
		},

		init : function(inner, self, params) {
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

			// set title.
			setTitle,

			// get img.
			getImg,

			// tap.
			tap;

			a = A({
				style : {
					flt : 'left',
					display : 'block',
					textAlign : 'center',
					cursor : 'pointer',
					textDecoration : 'none',
					touchCallout : 'none',
					userSelect : 'none',
					fontSize : 16,
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
						marginBottom : title !== undefined ? 10 : 0
					},
					c : img
				}));
			}

			inner.setDom(a);

			self.setTitle = setTitle = function(title) {
				titleDom.empty();
				titleDom.append(title);
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
	};
});
