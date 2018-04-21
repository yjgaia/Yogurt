Yogurt.MenuLayout = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.toolbar
		//OPTIONAL: params.leftMenu
		//OPTIONAL: params.rightMenu
		//OPTIONAL: params.bottomBar

		let toolbar = params.toolbar;
		let leftMenu = params.leftMenu;
		let rightMenu = params.rightMenu;
		let bottomBar = params.bottomBar;
		
		let isLeftMenuHiding = true;
		let isLeftMenuShowing;
		let isRightMenuHiding = true;
		let isRightMenuShowing;

		let menuCount = 0;
		
		let leftMenuWrapper;
		let rightMenuWrapper;
		let content;
		let touchPad;
		
		let toolbarTapEvent;
		let contentTapEvent;
		let bottomBarTapEvent;
		
		if (leftMenu !== undefined) {
			menuCount += 1;
		}
		if (rightMenu !== undefined) {
			menuCount += 1;
		}

		let wrapper = DIV({
			c : [leftMenu !== undefined ? leftMenuWrapper = DIV({
				style : {
					position : 'fixed',
					top : 0,
					backgroundColor : Yogurt.Theme.menuLayoutMenuBackgroundColor,
					width : Yogurt.Theme.menuLayoutMenuWidth,
					height : '100%',
					overflowY : 'scroll',
					zIndex : 999999,
					onDisplayResize : (width, height) => {

						if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
							return {
								left : 0
							};
						} else {
							return {
								left : -Yogurt.Theme.menuLayoutMenuWidth
							};
						}
					}
				},
				c : leftMenu
			}) : '', rightMenu !== undefined ? rightMenuWrapper = DIV({
				style : {
					position : 'fixed',
					top : 0,
					backgroundColor : Yogurt.Theme.menuLayoutMenuBackgroundColor,
					width : Yogurt.Theme.menuLayoutMenuWidth,
					height : '100%',
					overflowY : 'scroll',
					zIndex : 999999,
					onDisplayResize : (width, height) => {

						if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
							return {
								right : 0
							};
						} else {
							return {
								right : -Yogurt.Theme.menuLayoutMenuWidth
							};
						}
					}
				},
				c : rightMenu
			}) : '', toolbar, content = DIV({
				style : {
					onDisplayResize : (width, height) => {

						if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
							return {
								marginLeft : Yogurt.Theme.menuLayoutMenuWidth,
								width : BODY.getWidth() - Yogurt.Theme.menuLayoutMenuWidth * menuCount
							};
						} else {
							return {
								marginLeft : 0,
								width : '100%'
							};
						}
					}
				}
			})]
		});

		toolbar.addContentStyle({
			onDisplayResize : (width, height) => {

				if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
					return {
						left : Yogurt.Theme.menuLayoutMenuWidth,
						width : BODY.getWidth() - (leftMenu === undefined ? 0 : Yogurt.Theme.menuLayoutMenuWidth) - (rightMenu === undefined ? 0 : Yogurt.Theme.menuLayoutMenuWidth)
					};
				} else {
					return {
						left : 0,
						width : '100%'
					};
				}
			}
		});

		inner.setWrapperDom(wrapper);
		inner.setContentDom(content);

		let setBottomBar = self.setBottomBar = (_bottomBar) => {

			bottomBar = _bottomBar;

			bottomBar.addContentStyle({
				onDisplayResize : (width, height) => {

					if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
						return {
							left : Yogurt.Theme.menuLayoutMenuWidth,
							width : BODY.getWidth() - Yogurt.Theme.menuLayoutMenuWidth * 2
						};
					} else {
						return {
							left : 0,
							width : '100%'
						};
					}
				}
			});

			wrapper.append(bottomBar);
		};

		if (bottomBar !== undefined) {
			setBottomBar(bottomBar);
		}

		let removeBottomBar = self.removeBottomBar = () => {
			bottomBar.remove();
			bottomBar = undefined;
		};

		let showLeftMenu = self.showLeftMenu = () => {
			
			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
				// ignore.
			} else {

				if (isLeftMenuHiding === true && isLeftMenuShowing !== true) {
				
					scrollTo(0, 0);

					if (touchPad !== undefined) {
						touchPad.remove();
					}

					content.append( touchPad = DIV({
						style : {
							position : 'absolute',
							left : Yogurt.Theme.menuLayoutMenuWidth,
							top : 0,
							width : '100%',
							height : '100%',
							zIndex : 999999
						},
						on : {
							tap : () => {
								hideLeftMenu();
							}
						}
					}));

					ANIMATE({
						node : content,
						keyframes : {
							from : {
								marginLeft : 0
							},
							to : {
								marginLeft : Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					}, () => {
						isLeftMenuShowing = true;
					});

					ANIMATE({
						node : toolbar.getContentDom(),
						keyframes : {
							from : {
								left : 0
							},
							to : {
								left : Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					});

					ANIMATE({
						node : leftMenuWrapper,
						keyframes : {
							from : {
								left : -Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								left : 0
							}
						}
					});

					if (bottomBar !== undefined) {

						ANIMATE({
							node : bottomBar.getContentDom(),
							keyframes : {
								from : {
									left : 0
								},
								to : {
									left : Yogurt.Theme.menuLayoutMenuWidth
								}
							}
						});
					}

					isLeftMenuHiding = false;

					toolbarTapEvent = EVENT({
						node : toolbar,
						name : 'touchstart'
					}, (e) => {
						toggleLeftMenu();
					});

					contentTapEvent = EVENT({
						node : content,
						name : 'touchstart'
					}, (e) => {
						toggleLeftMenu();
					});

					if (bottomBar !== undefined) {

						bottomBarTapEvent = EVENT({
							node : bottomBar,
							name : 'touchstart'
						}, (e) => {
							toggleLeftMenu();
						});
					}
				}
			}
		};

		let hideLeftMenu = self.hideLeftMenu = () => {

			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {

				if (touchPad !== undefined) {
					touchPad.remove();
					touchPad = undefined;
				}

			} else {

				if (isLeftMenuHiding !== true && isLeftMenuShowing === true) {

					if (touchPad !== undefined) {
						touchPad.remove();
						touchPad = undefined;
					}

					ANIMATE({
						node : content,
						keyframes : {
							from : {
								marginLeft : Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								marginLeft : 0
							}
						}
					}, () => {
						isLeftMenuHiding = true;
					});

					ANIMATE({
						node : toolbar.getContentDom(),
						keyframes : {
							from : {
								left : Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								left : 0
							}
						}
					});

					ANIMATE({
						node : leftMenuWrapper,
						keyframes : {
							from : {
								left : 0
							},
							to : {
								left : -Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					});

					if (bottomBar !== undefined) {

						ANIMATE({
							node : bottomBar.getContentDom(),
							keyframes : {
								from : {
									left : Yogurt.Theme.menuLayoutMenuWidth
								},
								to : {
									left : 0
								}
							}
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

		let toggleLeftMenu = self.toggleLeftMenu = () => {

			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
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

		let showRightMenu = self.showRightMenu = () => {

			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
				// ignore.
			} else {

				if (isRightMenuHiding === true && isRightMenuShowing !== true) {
				
					scrollTo(0, 0);

					if (touchPad !== undefined) {
						touchPad.remove();
					}

					content.append( touchPad = DIV({
						style : {
							position : 'absolute',
							left : -Yogurt.Theme.menuLayoutMenuWidth,
							top : 0,
							width : '100%',
							height : '100%',
							zIndex : 999999
						},
						on : {
							tap : () => {
								hideRightMenu();
							}
						}
					}));

					ANIMATE({
						node : content,
						keyframes : {
							from : {
								marginLeft : 0
							},
							to : {
								marginLeft : -Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					}, () => {
						isRightMenuShowing = true;
					});

					ANIMATE({
						node : toolbar.getContentDom(),
						keyframes : {
							from : {
								left : 0
							},
							to : {
								left : -Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					});

					ANIMATE({
						node : rightMenuWrapper,
						keyframes : {
							from : {
								right : -Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								right : 0
							}
						}
					});

					if (bottomBar !== undefined) {

						ANIMATE({
							node : bottomBar.getContentDom(),
							keyframes : {
								from : {
									left : 0
								},
								to : {
									left : -Yogurt.Theme.menuLayoutMenuWidth
								}
							}
						});
					}

					isRightMenuHiding = false;

					toolbarTapEvent = EVENT({
						node : toolbar,
						name : 'touchstart'
					}, (e) => {
						toggleRightMenu();
					});

					contentTapEvent = EVENT({
						node : content,
						name : 'touchstart'
					}, (e) => {
						toggleRightMenu();
					});

					if (bottomBar !== undefined) {

						bottomBarTapEvent = EVENT({
							node : bottomBar,
							name : 'touchstart'
						}, (e) => {
							toggleRightMenu();
						});
					}
				}
			}
		};

		let hideRightMenu = self.hideRightMenu = () => {

			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {

				if (touchPad !== undefined) {
					touchPad.remove();
					touchPad = undefined;
				}

			} else {

				if (isRightMenuHiding !== true && isRightMenuShowing === true) {

					if (touchPad !== undefined) {
						touchPad.remove();
						touchPad = undefined;
					}

					ANIMATE({
						node : content,
						keyframes : {
							from : {
								marginLeft : -Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								marginLeft : 0
							}
						}
					}, () => {
						isRightMenuHiding = true;
					});

					ANIMATE({
						node : toolbar.getContentDom(),
						keyframes : {
							from : {
								left : -Yogurt.Theme.menuLayoutMenuWidth
							},
							to : {
								left : 0
							}
						}
					});

					ANIMATE({
						node : rightMenuWrapper,
						keyframes : {
							from : {
								right : 0
							},
							to : {
								right : -Yogurt.Theme.menuLayoutMenuWidth
							}
						}
					});

					if (bottomBar !== undefined) {

						ANIMATE({
							node : bottomBar.getContentDom(),
							keyframes : {
								from : {
									left : -Yogurt.Theme.menuLayoutMenuWidth
								},
								to : {
									left : 0
								}
							}
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

		let toggleRightMenu = self.toggleRightMenu = () => {

			if (WIN_WIDTH() > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
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
});
