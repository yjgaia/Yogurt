YogurtShowcase.MAIN = METHOD({

	run : (params) => {
		
		// 다크 테마 반영
		Yogurt.Theme = Yogurt.DarkTheme;
		
		YogurtShowcase.MATCH_VIEW({
			uri : '',
			target : YogurtShowcase.Home
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Toolbar',
			target : YogurtShowcase.Toolbar
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Button',
			target : YogurtShowcase.Button
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Form',
			target : YogurtShowcase.Form
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Alert',
			target : YogurtShowcase.Alert
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Prompt',
			target : YogurtShowcase.Prompt
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Confirm',
			target : YogurtShowcase.Confirm
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'MenuLayout',
			target : YogurtShowcase.MenuLayout
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'BottomBar',
			target : YogurtShowcase.BottomBar
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Slider',
			target : YogurtShowcase.Slider
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'Calendar',
			target : YogurtShowcase.Calendar
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'FileTree',
			target : YogurtShowcase.FileTree
		});
	}
});
