Yogurt.Calendar = CLASS({

	preset : () => {
		return UUI.CALENDAR;
	},

	params : () => {
		return {
			style : {
				borderBottom : '10px solid ' + Yogurt.Theme.toolbarColor
			},
			headerStyle : {
				backgroundColor : Yogurt.Theme.toolbarColor,
				fontSize : 20,
				color : Yogurt.Theme.toolbarTextColor,
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
