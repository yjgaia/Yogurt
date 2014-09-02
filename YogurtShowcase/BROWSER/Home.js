YogurtShowcase.Home = CLASS({

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

		TITLE('Yogurt Toolbar.');

		wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// title
				title : 'Yogurt!'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [IMG({
					style : {
						display : 'block',
						maxWidth : '100%'
					},
					src : YogurtShowcase.R('yogurt.jpg')
				}), P({
					style : {
						marginTop : 20
					},
					c : ['Welcome to Yogurt Showcase.\nYogurt is ', A({
						href : 'http://uppercase.io',
						target : '_blank',
						c : ['UPPERCASE.IO']
					}), '-Based Mobile UI Framework.']
				}), UL({
					style : {
						marginTop : 20
					},
					c : RUN(function() {

						var
						// array
						array = [];

						EACH([{
							title : 'Toolbar',
							uri : 'Toolbar'
						}, {
							title : 'Toolbar Button',
							uri : 'ToolbarButton'
						}, {
							title : 'Button',
							uri : 'Button'
						}, {
							title : 'Form',
							uri : 'Form'
						}, {
							title : 'List',
							uri : 'List'
						}, {
							title : 'Icon',
							uri : 'Icon'
						}, {
							title : 'Tap',
							uri : 'Tap'
						}, {
							title : 'Action Sheet',
							uri : 'ActionSheet'
						}, {
							title : 'Alert',
							uri : 'Alert'
						}, {
							title : 'Prompt',
							uri : 'Prompt'
						}, {
							title : 'Confirm',
							uri : 'Confirm'
						}, {
							title : 'Picker',
							uri : 'Picker'
						}, {
							title : 'Menu',
							uri : 'Menu'
						}], function(data, i) {

							array.push(Yogurt.Button({
								style : {
									marginTop : i === 0 ? 0 : 15
								},
								title : data.title,
								on : {
									tap : function() {
										YogurtShowcase.GO(data.uri);
									}
								}
							}));
						});

						return array;
					})
				})]
			})]
		}).appendTo(YogurtShowcase.GLOBAL.content);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
