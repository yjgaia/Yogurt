Yogurt.Slider = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.slides
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle

		var
		// slides
		slides = params.slides,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// content style
		contentStyle = params.contentStyle,

		// wrapper
		wrapper,

		// scroll wrapper
		scrollWrapper,

		// content
		content,

		// dots
		dots = [],

		// page
		page = 0,

		// width
		width,

		// scroll interval
		scrollInterval,

		// scroll left.
		scrollLeft,

		// scroll right.
		scrollRight,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		wrapper = DIV({
			c : [DIV({
				style : {
					position : 'relative'
				},
				c : [ scrollWrapper = DIV({
					style : {
						overflowX : 'hidden'
					},
					c : content = DIV({
						c : RUN(function() {

							var
							// array
							array = [];

							EACH(slides, function(slide) {
								array.push(slide);
							});

							array.push(CLEAR_BOTH());

							return array;
						})
					})
				}), DIV({
					style : {
						position : 'absolute',
						left : 0,
						top : 0,
						backgroundColor : RGBA([0, 0, 0, 0.3]),
						width : 20,
						height : '100%',
						textAlign : 'center',
						cursor : 'pointer'
					},
					c : UUI.V_CENTER({
						wrapperStyle : {
							height : '100%'
						},
						c : IMG({
							src : Yogurt.R('left.png')
						})
					}),
					on : {
						tap : function() {
							scrollLeft();
						}
					}
				}), DIV({
					style : {
						position : 'absolute',
						right : 0,
						top : 0,
						backgroundColor : RGBA([0, 0, 0, 0.3]),
						width : 20,
						height : '100%',
						textAlign : 'center',
						cursor : 'pointer'
					},
					c : UUI.V_CENTER({
						wrapperStyle : {
							height : '100%'
						},
						c : IMG({
							src : Yogurt.R('right.png')
						})
					}),
					on : {
						tap : function() {
							scrollRight();
						}
					}
				})]
			}), UUI.V_CENTER({
				wrapperStyle : {
					height : 20
				},
				c : DIV({
					style : {
						width : 12 * slides.length,
						margin : 'auto'
					},
					c : RUN(function() {

						var
						// array
						array = [];

						REPEAT(slides.length, function(i) {

							var
							// dot
							dot;

							array.push( dot = UUI.PANEL({
								wrapperStyle : {
									flt : 'left',
									padding : '0 2px'
								},
								contentStyle : {
									backgroundColor : i === 0 ? '#000' : RGBA([128, 128, 128, 0.3]),
									width : 8,
									height : 8,
									borderRadius : 4
								}
							}));

							dots.push(dot);
						});

						array.push(CLEAR_BOTH());

						return array;
					})
				})
			})]
		});

		inner.setWrapperDom(wrapper);
		inner.setContentDom(content);

		self.on('show', function() {

			width = self.getWidth();

			self.addContentStyle({
				width : width * slides.length
			});

			EACH(slides, function(slide) {
				slide.addStyle({
					flt : 'left',
					width : width
				});
			});
		});

		scrollLeft = function() {

			dots[page].addContentStyle({
				backgroundColor : RGBA([128, 128, 128, 0.3])
			});

			if (page > 0) {
				page -= 1;
			}

			dots[page].addContentStyle({
				backgroundColor : '#000'
			});

			if (scrollInterval !== undefined) {
				scrollInterval.remove();
				scrollInterval = undefined;
			}

			scrollInterval = INTERVAL(function() {
				if (scrollWrapper.getEl().scrollLeft <= page * width) {
					scrollWrapper.getEl().scrollLeft = page * width;
					return false;
				}
				scrollWrapper.getEl().scrollLeft -= width / 50;
			});
		};

		scrollRight = function() {

			dots[page].addContentStyle({
				backgroundColor : RGBA([128, 128, 128, 0.3])
			});

			if (page < slides.length - 1) {
				page += 1;
			}

			dots[page].addContentStyle({
				backgroundColor : '#000'
			});

			if (scrollInterval !== undefined) {
				scrollInterval.remove();
				scrollInterval = undefined;
			}

			scrollInterval = INTERVAL(function() {
				if (scrollWrapper.getEl().scrollLeft >= page * width) {
					scrollWrapper.getEl().scrollLeft = page * width;
					return false;
				}
				scrollWrapper.getEl().scrollLeft += width / 50;
			});
		};

		self.on('touchstart', function(e) {

			var
			// origin scroll left
			originScrollLeft = scrollWrapper.getEl().scrollLeft,

			// touchstart left
			touchstartLeft = e.getLeft(),

			// mouse move handler.
			mousemoveHandler,

			// out handler.
			outHandler;

			self.on('touchmove', mousemoveHandler = function(e) {
				e.stop();
				scrollWrapper.getEl().scrollLeft = originScrollLeft + touchstartLeft - e.getLeft();
			});

			self.on('touchend', outHandler = function(e) {

				var
				// left
				left = scrollWrapper.getEl().scrollLeft;

				if (touchstartLeft - e.getLeft() < 0) {
					scrollLeft();
				} else if (touchstartLeft - e.getLeft() > 0) {
					scrollRight();
				}

				e.stop();

				self.off('touchmove', mousemoveHandler);
				self.off('touchend', outHandler);
				self.off('mouseout', outHandler);
			});
			self.on('mouseout', outHandler);

			e.stop();
		});

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}
	}
});
