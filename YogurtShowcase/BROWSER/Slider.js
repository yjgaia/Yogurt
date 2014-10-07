YogurtShowcase.Slider = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Slider.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.ToolbarButton({
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					on : {
						tap : function() {
							YogurtShowcase.GO('');
						}
					}
				}),

				// title
				title : 'Slider'
			}),
			
			// slider
			Yogurt.Slider({
				slides : RUN(function() {

					var
					// slides
					slides = [];

					EACH([{
						image : 'car.jpg',
						title : 'Car',
						content : 'This is a car.'
					}, {
						image : 'bus.jpg',
						title : 'Bus',
						content : 'This is a bus.'
					}, {
						image : 'train.jpg',
						title : 'Train',
						content : 'This is a train.'
					}, {
						image : 'ship.jpg',
						title : 'Ship',
						content : 'This is a ship.'
					}, {
						image : 'plane.jpg',
						title : 'Plane',
						content : 'This is a plane.'
					}], function(data) {

						slides.push(Yogurt.Slide({
							wrapperStyle : {
								backgroundImage : YogurtShowcase.R(data.image),
								backgroundPosition : 'center',
								backgroundSize : 'cover',
								height : 200
							},
							contentStyle : {
								position : 'relative',
								width : '100%',
								height : '100%'
							},
							c : UUI.PANEL({
								wrapperStyle : {
									position : 'absolute',
									bottom : 0,
									width : '100%'
								},
								contentStyle : {
									padding : '10px 10px'
								},
								c : [H5({
									style : {
										flt : 'left',
										backgroundColor : RGBA([0, 0, 0, 0.8]),
										color : '#fff',
										padding : '8px 10px',
									},
									c : data.title
								}), CLEAR_BOTH(), P({
									style : {
										marginTop : 10,
										backgroundColor : RGBA([0, 0, 0, 0.8]),
										color : '#fff',
										padding : '8px 10px'
									},
									c : data.content
								})]
							})
						}));
					});

					return slides;
				})
			}),

			// content
			DIV({
				style : {
					padding : 20,
					paddingTop : 5,
				},
				c : 'Welcome to Slider Showcase.'
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
