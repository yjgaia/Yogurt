Yogurt.Calendar = CLASS({

	preset : () => {
		return UUI.CALENDAR;
	},

	params : () => {
		
		let background = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackground;
		let color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.toolbarColor;
		let backgroundImage = BROWSER_CONFIG.Yogurt === undefined ? undefined : BROWSER_CONFIG.Yogurt.toolbarBackgroundImage;
		let textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.toolbarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.toolbarTextColor;
		
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
			leftArrowIcon : FontAwesome.GetIcon('chevron-left'),
			rightArrowIcon : FontAwesome.GetIcon('chevron-right'),
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
