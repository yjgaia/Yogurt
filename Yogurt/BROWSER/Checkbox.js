Yogurt.Checkbox = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//REQUIRED: params.label
		//OPTIONAL: params.value
		//OPTIONAL: params.c
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// label
		label = params.label,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// input style
		inputStyle = params.inputStyle,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ButtonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ButtonColor,

		// wrapper
		wrapper,

		// input
		input,

		// label dom
		labelDom,

		// get dom.
		getDom,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addInputStyle,

		// on.
		on;

		wrapper = DIV({
			style : {
				textDecoration : 'none',
				color : color,
				border : '1px solid ' + color,
				paddingLeft : 10
			},
			on : {
				tap : function(e) {
					input.toggleCheck();
					e.stop();
				}
			},
			c : [ input = INPUT({
				style : {
					flt : 'left',
					marginTop : 10,
					marginRight : 5
				},
				name : name,
				type : 'checkbox',
				value : value,
				on : on
			}), labelDom = SPAN({
				style : {
					flt : 'left',
					padding : 10,
					paddingLeft : 0
				},
				c : label
			}), CLEAR_BOTH()]
		});

		inner.setWrapperDom(wrapper);

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return input.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			input.setValue(value);
		};

		self.select = select = function() {
			input.select();
		};

		self.blur = blur = function() {
			input.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : input,
					name : eventName
				}, eventHandler);

			} else {

				EVENT({
					node : self,
					lowNode : wrapper,
					name : eventName
				}, eventHandler);
			}
		};
	}
});
