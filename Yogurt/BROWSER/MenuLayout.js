Yogurt.MenuLayout = CLASS(function(cls) {
	'use strict';

	var
	// menu width
	menuWidth,

	// hide menu win width
	hideMenuWinWidth;

	cls.menuWidth = menuWidth = 200;

	cls.hideMenuWinWidth = hideMenuWinWidth = 800;

	return {

		preset : function() {
			return NODE;
		},

		init : function(inner, self, params) {
			//REQUIRED: params
			//REQUIRED: params.toolbar
			//OPTIONAL: params.leftMenu
			//OPTIONAL: params.rightMenu
			//OPTIONAL: params.bottomBar

			var
			// toolbar
			toolbar = params.toolbar,

			// left menu
			leftMenu = params.leftMenu,

			// right menu
			rightMenu = params.rightMenu,

			// bottom bar
			bottomBar = params.bottomBar,

			// is left menu hiding
			isLeftMenuHiding = true,

			// is left menu showing
			isLeftMenuShowing,

			// is right menu hiding
			isRightMenuHiding = true,

			// is right menu showing
			isRightMenuShowing,

			// menu count
			menuCount = 0,

			// wrapper
			wrapper,

			// left menu wrapper
			leftMenuWrapper,

			// right menu wrapper
			rightMenuWrapper,

			// content
			content,

			// toolbar tap event
			toolbarTapEvent,

			// content tap event
			contentTapEvent,

			// bottom bar tap event
			bottomBarTapEvent,

			// show left menu.
			showLeftMenu,

			// hide left menu.
			hideLeftMenu,

			// toggle left menu.
			toggleLeftMenu,

			// show right menu.
			showRightMenu,

			// hide right menu.
			hideRightMenu,

			// toggle right menu.
			toggleRightMenu;

			if (leftMenu !== undefined) {
				menuCount += 1;
			}

			if (rightMenu !== undefined) {
				menuCount += 1;
			}

			wrapper = DIV({
				c : [leftMenu !== undefined ? leftMenuWrapper = DIV({
					style : {
						position : 'fixed',
						top : 0,
						backgroundColor : '#222',
						width : menuWidth,
						height : '100%',
						overflowY : 'scroll',
						onDisplayResize : function(width, height) {

							if (width > hideMenuWinWidth) {
								return {
									left : 0
								};
							} else {
								return {
									left : -menuWidth
								};
							}
						}
					},
					c : leftMenu
				}) : '', rightMenu !== undefined ? rightMenuWrapper = DIV({
					style : {
						position : 'fixed',
						top : 0,
						backgroundColor : '#222',
						width : menuWidth,
						height : '100%',
						overflowY : 'scroll',
						onDisplayResize : function(width, height) {

							if (width > hideMenuWinWidth) {
								return {
									right : 0
								};
							} else {
								return {
									right : -menuWidth
								};
							}
						}
					},
					c : rightMenu
				}) : '', toolbar, content = DIV({
					style : {
						onDisplayResize : function(width, height) {

							if (width > hideMenuWinWidth) {
								return {
									marginLeft : menuWidth,
									width : BODY.getWidth() - menuWidth * menuCount
								};
							} else {
								return {
									marginLeft : 0,
									width : '100%'
								};
							}
						}
					}
				}), bottomBar]
			});

			inner.setWrapperDom(wrapper);
			inner.setContentDom(content);

			self.showLeftMenu = showLeftMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isLeftMenuHiding === true && isLeftMenuShowing !== true) {

						ANIMATE({
							node : content,
							keyframes : KEYFRAMES({
								from : {
									marginLeft : 0
								},
								to : {
									marginLeft : menuWidth
								}
							})
						}, function() {
							isLeftMenuShowing = true;
						});

						ANIMATE({
							node : toolbar.getContentDom(),
							keyframes : KEYFRAMES({
								from : {
									left : 0
								},
								to : {
									left : menuWidth
								}
							})
						});

						ANIMATE({
							node : leftMenuWrapper,
							keyframes : KEYFRAMES({
								from : {
									left : -menuWidth
								},
								to : {
									left : 0
								}
							})
						});

						if (bottomBar !== undefined) {

							ANIMATE({
								node : bottomBar.getContentDom(),
								keyframes : KEYFRAMES({
									from : {
										left : 0
									},
									to : {
										left : menuWidth
									}
								})
							});
						}

						isLeftMenuHiding = false;

						toolbarTapEvent = EVENT({
							node : toolbar,
							name : 'touchstart'
						}, function(e) {
							toggleLeftMenu();
						});

						contentTapEvent = EVENT({
							node : content,
							name : 'touchstart'
						}, function(e) {
							toggleLeftMenu();
						});

						if (bottomBar !== undefined) {

							bottomBarTapEvent = EVENT({
								node : bottomBar,
								name : 'touchstart'
							}, function(e) {
								toggleLeftMenu();
							});
						}
					}
				}
			};

			self.hideLeftMenu = hideLeftMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isLeftMenuHiding !== true && isLeftMenuShowing === true) {

						ANIMATE({
							node : content,
							keyframes : KEYFRAMES({
								from : {
									marginLeft : menuWidth
								},
								to : {
									marginLeft : 0
								}
							})
						}, function() {
							isLeftMenuHiding = true;
						});

						ANIMATE({
							node : toolbar.getContentDom(),
							keyframes : KEYFRAMES({
								from : {
									left : menuWidth
								},
								to : {
									left : 0
								}
							})
						});

						ANIMATE({
							node : leftMenuWrapper,
							keyframes : KEYFRAMES({
								from : {
									left : 0
								},
								to : {
									left : -menuWidth
								}
							})
						});

						if (bottomBar !== undefined) {

							ANIMATE({
								node : bottomBar.getContentDom(),
								keyframes : KEYFRAMES({
									from : {
										left : menuWidth
									},
									to : {
										left : 0
									}
								})
							});
						}

						isLeftMenuShowing = false;

						toolbarTapEvent.remove();
						contentTapEvent.remove();

						if (bottomBarTapEvent !== undefined) {
							bottomBarTapEvent.remove();
						}
					}
				}
			};

			self.toggleLeftMenu = toggleLeftMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isLeftMenuHiding === true && isLeftMenuShowing !== true) {
						showLeftMenu();
					}

					if (isLeftMenuHiding !== true && isLeftMenuShowing === true) {
						hideLeftMenu();
					}
				}
			};

			self.showRightMenu = showRightMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isRightMenuHiding === true && isRightMenuShowing !== true) {

						ANIMATE({
							node : content,
							keyframes : KEYFRAMES({
								from : {
									marginLeft : 0
								},
								to : {
									marginLeft : -menuWidth
								}
							})
						}, function() {
							isRightMenuShowing = true;
						});

						ANIMATE({
							node : toolbar.getContentDom(),
							keyframes : KEYFRAMES({
								from : {
									left : 0
								},
								to : {
									left : -menuWidth
								}
							})
						});

						ANIMATE({
							node : rightMenuWrapper,
							keyframes : KEYFRAMES({
								from : {
									right : -menuWidth
								},
								to : {
									right : 0
								}
							})
						});

						if (bottomBar !== undefined) {

							ANIMATE({
								node : bottomBar.getContentDom(),
								keyframes : KEYFRAMES({
									from : {
										left : 0
									},
									to : {
										left : -menuWidth
									}
								})
							});
						}

						isRightMenuHiding = false;

						toolbarTapEvent = EVENT({
							node : toolbar,
							name : 'touchstart'
						}, function(e) {
							toggleRightMenu();
						});

						contentTapEvent = EVENT({
							node : content,
							name : 'touchstart'
						}, function(e) {
							toggleRightMenu();
						});

						if (bottomBar !== undefined) {

							bottomBarTapEvent = EVENT({
								node : bottomBar,
								name : 'touchstart'
							}, function(e) {
								toggleRightMenu();
							});
						}
					}
				}
			};

			self.hideRightMenu = hideRightMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isRightMenuHiding !== true && isRightMenuShowing === true) {

						ANIMATE({
							node : content,
							keyframes : KEYFRAMES({
								from : {
									marginLeft : -menuWidth
								},
								to : {
									marginLeft : 0
								}
							})
						}, function() {
							isRightMenuHiding = true;
						});

						ANIMATE({
							node : toolbar.getContentDom(),
							keyframes : KEYFRAMES({
								from : {
									left : -menuWidth
								},
								to : {
									left : 0
								}
							})
						});

						ANIMATE({
							node : rightMenuWrapper,
							keyframes : KEYFRAMES({
								from : {
									right : 0
								},
								to : {
									right : -menuWidth
								}
							})
						});

						if (bottomBar !== undefined) {

							ANIMATE({
								node : bottomBar.getContentDom(),
								keyframes : KEYFRAMES({
									from : {
										left : -menuWidth
									},
									to : {
										left : 0
									}
								})
							});
						}

						isRightMenuShowing = false;

						toolbarTapEvent.remove();
						contentTapEvent.remove();

						if (bottomBarTapEvent !== undefined) {
							bottomBarTapEvent.remove();
						}
					}
				}
			};

			self.toggleRightMenu = toggleRightMenu = function() {

				if (WIN_WIDTH() > hideMenuWinWidth) {
					// ignore.
				} else {

					if (isRightMenuHiding === true && isRightMenuShowing !== true) {
						showRightMenu();
					}

					if (isRightMenuHiding !== true && isRightMenuShowing === true) {
						hideRightMenu();
					}
				}
			};
		}
	};
});
