Yogurt.Alert = CLASS({

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
				boxShadow : '0 0 5px rgba(0,0,0,0.3)',
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

	init : function(inner, self, message) {
		'use strict';
		//REQUIRED: message

		self.append(message);

		UANI.FADE_IN({
			node : self.getNode()
		});
	}
});
