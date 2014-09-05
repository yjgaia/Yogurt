Yogurt.Prompt = CLASS({

	preset : function() {
		'use strict';

		return Yogurt.Alert;
	},

	init : function(inner, self, message, submit) {
		'use strict';
		//REQUIRED: message
		//REQUIRED: submit

		var
		// input
		input;

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
	}
});
