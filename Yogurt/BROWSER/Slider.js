Yogurt.Slider = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.slides
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isNotUsingDots
		//OPTIONAL: params.dotColor
		//OPTIONAL: params.dotHighlightColor

		var
		// slides
		slides = params.slides,

		// content style
		contentStyle = params.contentStyle,

		// is not using dots
		isNotUsingDots = params.isNotUsingDots,
		
		// dot color
		dotColor = params.dotColor === undefined ? RGBA([128, 128, 128, 0.3]) : params.dotColor,
		
		// dot highlight color
		dotHighlightColor = params.dotHighlightColor === undefined ? '#000' : params.dotHighlightColor,

		// wrapper
		wrapper,

		// scroll wrapper
		scrollWrapper,
		
		// left button
		leftButton,
		
		// right button
		rightButton,

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
		
		// scroll to.
		scrollTo,

		// add content style.
		addContentStyle,

		// get page.
		getPage;

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
				}), leftButton = DIV({
					style : {
						position : 'absolute',
						left : 0,
						top : 0,
						width : 20,
						height : '100%',
						textAlign : 'center',
						cursor : 'pointer'
					},
					c : UUI.V_CENTER({
						style : {
							height : '100%'
						},
						c : IMG({
							src : Yogurt.R('left.png')
						})
					}),
					on : {
						tap : function() {
							scrollTo(page - 1);
						}
					}
				}), rightButton = DIV({
					style : {
						position : 'absolute',
						right : 0,
						top : 0,
						width : 20,
						height : '100%',
						textAlign : 'center',
						cursor : 'pointer'
					},
					c : UUI.V_CENTER({
						style : {
							height : '100%'
						},
						c : IMG({
							src : Yogurt.R('right.png')
						})
					}),
					on : {
						tap : function() {
							scrollTo(page + 1);
						}
					}
				})]
			}), isNotUsingDots === true ? '' : UUI.V_CENTER({
				style : {
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
								style : {
									flt : 'left',
									padding : '0 2px'
								},
								contentStyle : {
									backgroundColor : i === 0 ? dotHighlightColor : dotColor,
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
		
		// hide first.
		leftButton.hide();

		self.scrollTo = scrollTo = function(_page) {
			
			if (_page <= 0) {
				leftButton.hide();
			} else {
				leftButton.show();
			}
			
			if (_page >= slides.length - 1) {
				rightButton.hide();
			} else {
				rightButton.show();
			}

			if (_page >= 0 &&_page < slides.length) {
				
				if (isNotUsingDots !== true) {
					dots[page].addContentStyle({
						backgroundColor : dotColor
					});
				}
	
				if (scrollInterval !== undefined) {
					scrollInterval.remove();
					scrollInterval = undefined;
				}
	
				if (page < _page) {
					page = _page;
	
					scrollInterval = INTERVAL(function() {
						if (scrollWrapper.getEl().scrollLeft >= page * width) {
							scrollWrapper.getEl().scrollLeft = page * width;
							return false;
						}
						scrollWrapper.getEl().scrollLeft += width / 50;
					});
	
				} else if (page > _page) {
					page = _page;
	
					scrollInterval = INTERVAL(function() {
						if (scrollWrapper.getEl().scrollLeft <= page * width) {
							scrollWrapper.getEl().scrollLeft = page * width;
							return false;
						}
						scrollWrapper.getEl().scrollLeft -= width / 50;
					});
				}
	
				if (isNotUsingDots !== true) {
					dots[page].addContentStyle({
						backgroundColor : dotHighlightColor
					});
				}
	
				EVENT.fireAll({
					node : self,
					name : 'scroll'
				});
			}
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
					scrollTo(page - 1);
				} else if (touchstartLeft - e.getLeft() > 0) {
					scrollTo(page + 1);
				}

				e.stop();

				self.off('touchmove', mousemoveHandler);
				self.off('touchend', outHandler);
				self.off('mouseout', outHandler);
			});
			self.on('mouseout', outHandler);

			e.stop();
		});

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}

		self.getPage = getPage = function() {
			return page;
		};
	}
});
