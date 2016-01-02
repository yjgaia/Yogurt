Yogurt.Calendar = CLASS({

	preset : function() {
		'use strict';

		return UUI.CALENDAR;
	},

	params : function() {
		'use strict';
		
		var
		// background
		background = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackground,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.toolbarColor,

		// background image
		backgroundImage = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackgroundImage,

		// text color
		textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.toolbarTextColor;
		
		return {
			style : {
				borderBottom : '10px solid ' + color
			},
			headerStyle : {
				backgroundColor : color,
				fontSize : 20,
				color : textColor,
				padding : '10px 15px',
				fontWeight : 'bold'
			},
			leftArrowImg : IMG({
				src : Yogurt.R('cal/left.png')
			}),
			rightArrowImg : IMG({
				src : Yogurt.R('cal/right.png')
			}),
			dayStyle : {
				backgroundColor : '#999',
				color : '#fff',
				padding : 5,
				textAlign : 'center',
				fontWeight : 'bold'
			},
			dateStyle : {
				backgroundColor : '#eee',
				fontSize : 15,
				color : '#000',
				fontWeight : 'bold',
				padding : '8px 0',
				border : '1px solid #fff',
				textAlign : 'center',
				backgroundSize : 'cover',
				backgroundPosition : 'center',
				cursor : 'pointer'
			},
			todayDateStyle : {
				backgroundColor : '#ccc'
			},
			selectedDateStyle : {
				backgroundColor : '#999'
			},
			otherMonthDateStyle : {
				backgroundColor : '#eee',
				fontSize : 15,
				color : '#ccc',
				padding : '8px 0',
				border : '1px solid #fff',
				textAlign : 'center',
				cursor : 'pointer'
			}
		};
	}
});
