Yogurt.Confirm = CLASS({

	preset : function() {
		'use strict';

		return Yogurt.Alert;
	},

	init : function(inner, self, message, yes) {
		'use strict';
		//REQUIRED: message
		//REQUIRED: yes

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
	}
});
