Yogurt.Prompt = CLASS({

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

	init : function(inner, self, message, submit) {
		'use strict';
		//REQUIRED: message
		//REQUIRED: submit

		var
		// input
		input;

		self.append(message);

		self.append(FORM({
			c : [ input = Yogurt.Input({
				style : {
					marginTop : 10
				}
			}), Yogurt.Submit({
				style : {
					marginTop : 20
				}
			})],
			on : {
				submit : function(e) {
					submit(input.getValue());
					self.remove();
				}
			}
		}));

		UANI.FADE_IN({
			node : self.getNode()
		});
	}
});
