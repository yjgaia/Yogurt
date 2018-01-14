Yogurt.Slider = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.slides
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isNotUsingDots
		//OPTIONAL: params.dotColor
		//OPTIONAL: params.dotHighlightColor

		let slides = params.slides;
		let contentStyle = params.contentStyle;
		let isNotUsingDots = params.isNotUsingDots;
		let dotColor = params.dotColor === undefined ? 'rgba(128, 128, 128, 0.3)' : params.dotColor;
		let dotHighlightColor = params.dotHighlightColor === undefined ? '#000' : params.dotHighlightColor;

		let scrollWrapper;
		let leftButton;
		let rightButton;
		let content;

		let dots = [];
		let page = 0;

		let width;

		let scrollInterval;

		let wrapper = DIV({
			c : [DIV({
				style : {
					position : 'relative'
				},
				c : [scrollWrapper = DIV({
					style : {
						overflowX : 'hidden'
					},
					c : content = DIV({
						c : RUN(() => {

							let array = [];

							EACH(slides, (slide) => {
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
							height : '100%',
							color : '#fff'
						},
						c : FontAwesome.GetIcon('chevron-left')
					}),
					on : {
						tap : () => {
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
							height : '100%',
							color : '#fff'
						},
						c : FontAwesome.GetIcon('chevron-right')
					}),
					on : {
						tap : () => {
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
					c : RUN(() => {

						let array = [];

						REPEAT(slides.length, (i) => {

							let dot;

							array.push( dot = UUI.PANEL({
								style : {
									flt : 'left',
									padding : '0 2px'
								},
								contentStyle : {
									backgroundColor : i === 0 ? dotHighlightColor : dotColor,
									width : 8,
									height : 8,
									borderRadius : 4,
									cursor : 'pointer'
								},
								on : {
									tap : () => {
										scrollTo(i);
									}
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

		self.on('show', () => {

			width = self.getWidth();

			self.addContentStyle({
				width : width * slides.length
			});

			EACH(slides, (slide) => {
				slide.addStyle({
					flt : 'left',
					width : width
				});
			});
		});
		
		// hide first.
		leftButton.hide();

		let scrollTo = self.scrollTo = (_page) => {
			
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

			if (_page >= 0 && _page < slides.length) {
				
				if (isNotUsingDots !== true) {
					dots[page].addContentStyle({
						backgroundColor : dotColor
					});
				}
				
				if (scrollInterval !== undefined) {
					scrollInterval.remove();
					scrollInterval = undefined;
				}
				
				if (Math.abs(page - _page) > 1) {
					page = _page;
					
					scrollWrapper.getEl().scrollLeft = page * width;
				}
				
				else if (page < _page) {
					page = _page;
	
					scrollInterval = INTERVAL(() => {
						if (scrollWrapper.getEl().scrollLeft >= page * width) {
							scrollWrapper.getEl().scrollLeft = page * width;
							return false;
						}
						scrollWrapper.getEl().scrollLeft += width / 50;
					});
				
				} else if (page > _page) {
					page = _page;
	
					scrollInterval = INTERVAL(() => {
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

		self.on('touchstart', (e) => {

			let originScrollLeft = scrollWrapper.getEl().scrollLeft;
			let touchstartLeft = e.getLeft();

			let mousemoveHandler;
			let outHandler;

			self.on('touchmove', mousemoveHandler = (e) => {
				e.stop();
				scrollWrapper.getEl().scrollLeft = originScrollLeft + touchstartLeft - e.getLeft();
			});

			self.on('touchend', outHandler = (e) => {

				let left = scrollWrapper.getEl().scrollLeft;

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

		let addContentStyle = self.addContentStyle = (style) => {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}

		let getPage = self.getPage = () => {
			return page;
		};
	}
});
