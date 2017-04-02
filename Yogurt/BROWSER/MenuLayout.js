Yogurt.MenuLayout = CLASS((cls) => {

	let menuWidth = 200;
	let hideMenuWinWidth = 800;
	let menuBackgroundColor = '#222';

	cls.getMenuWidth = getMenuWidth = () => {
		return menuWidth;
	};

	cls.getHideMenuWinWidth = getHideMenuWinWidth = () => {
		return hideMenuWinWidth;
	};

	return {

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
			
			if (BROWSER_CONFIG.Yogurt !== undefined && BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth !== undefined) {
				menuWidth = BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth;
			}
			
			if (BROWSER_CONFIG.Yogurt !== undefined && BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth !== undefined) {
				hideMenuWinWidth = BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth;
			}
			
			if (BROWSER_CONFIG.Yogurt !== undefined && BROWSER_CONFIG.Yogurt.menuLayoutMenuBackgroundColor !== undefined) {
				menuBackgroundColor = BROWSER_CONFIG.Yogurt.menuLayoutMenuBackgroundColor;
			}
	
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
						backgroundColor : menuBackgroundColor,
						width : menuWidth,
						height : '100%',
						overflowY : 'scroll',
						zIndex : 999999,
						onDisplayResize : (width, height) => {
	
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
						backgroundColor : menuBackgroundColor,
						width : menuWidth,
						height : '100%',
						overflowY : 'scroll',
						zIndex : 999999,
						onDisplayResize : (width, height) => {
	
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
						onDisplayResize : (width, height) => {
	
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
				})]
			});
	
			toolbar.addContentStyle({
				onDisplayResize : (width, height) => {
	
					if (width > hideMenuWinWidth) {
						return {
							left : menuWidth,
							width : BODY.getWidth() - (leftMenu === undefined ? 0 : menuWidth) - (rightMenu === undefined ? 0 : menuWidth)
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
	
						if (width > hideMenuWinWidth) {
							return {
								left : menuWidth,
								width : BODY.getWidth() - menuWidth * 2
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
				
				if (WIN_WIDTH() > hideMenuWinWidth) {
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
								left : menuWidth,
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
							keyframes : KEYFRAMES({
								from : {
									marginLeft : 0
								},
								to : {
									marginLeft : menuWidth
								}
							})
						}, () => {
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
	
				if (WIN_WIDTH() > hideMenuWinWidth) {
	
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
							keyframes : KEYFRAMES({
								from : {
									marginLeft : menuWidth
								},
								to : {
									marginLeft : 0
								}
							})
						}, () => {
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
	
			let toggleLeftMenu = self.toggleLeftMenu = () => {
	
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
	
			let showRightMenu = self.showRightMenu = () => {
	
				if (WIN_WIDTH() > hideMenuWinWidth) {
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
								left : -menuWidth,
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
							keyframes : KEYFRAMES({
								from : {
									marginLeft : 0
								},
								to : {
									marginLeft : -menuWidth
								}
							})
						}, () => {
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
	
				if (WIN_WIDTH() > hideMenuWinWidth) {
	
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
							keyframes : KEYFRAMES({
								from : {
									marginLeft : -menuWidth
								},
								to : {
									marginLeft : 0
								}
							})
						}, () => {
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
	
			let toggleRightMenu = self.toggleRightMenu = () => {
	
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
