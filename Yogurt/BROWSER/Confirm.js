Yogurt.Confirm = CLASS({

	preset : function() {
		'use strict';

		return UUI.MODAL;
	},

	params : function() {
		'use strict';

		return {
			wrapperStyle : {
				backgroundColor : '#fff',
				color : '#333',
				textAlign : 'center',
				border : '1px solid #333',
				borderRadius : 5,
				onDisplayResize : function(width, height) {

					if (width > 300) {
						return {
							width : 280
						};
					} else {
						return {
							width : '90%'
						};
					}
				}
			},
			contentStyle : {
				padding : 20,
				fontSize : 20
			}
		};
	},

	init : function(inner, self, message, yes) {
		'use strict';
		//REQUIRED: message
		//REQUIRED: yes

		var
		// input
		input;

		self.append(message);

		self.append(DIV({
			style : {
				marginTop : 20
			},
			c : [Yogurt.Button({
				style : {
					width : '47%',
					flt : 'left'
				},
				c : 'Yes',
				on : {
					tap : function() {
						yes();
						self.remove();
					}
				}
			}), Yogurt.Button({
				style : {
					width : '47%',
					flt : 'right'
				},
				c : 'No',
				on : {
					tap : function() {
						self.close();
					}
				}
			}), CLEAR_BOTH()]
		}));

		UANI.FADE_IN({
			node : self.getNode()
		});
	}
});
