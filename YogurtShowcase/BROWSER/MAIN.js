YogurtShowcase.MAIN = METHOD({

	run : (params) => {

		YogurtShowcase.MATCH_VIEW({
			uri : ['', '**'],
			target : YogurtShowcase.Control
		});
		
		YogurtShowcase.MATCH_VIEW({
			uri : '',
			target : YogurtShowcase.Home
		});

		/*
		 * Kitchen Sink
		 */
		
		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink',
			target : YogurtShowcase.KitchenSink.Home
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Toolbar',
			target : YogurtShowcase.KitchenSink.Toolbar
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Button',
			target : YogurtShowcase.KitchenSink.Button
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Form',
			target : YogurtShowcase.KitchenSink.Form
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Alert',
			target : YogurtShowcase.KitchenSink.Alert
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Prompt',
			target : YogurtShowcase.KitchenSink.Prompt
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Confirm',
			target : YogurtShowcase.KitchenSink.Confirm
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/MenuLayout',
			target : YogurtShowcase.KitchenSink.MenuLayout
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/BottomBar',
			target : YogurtShowcase.KitchenSink.BottomBar
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Slider',
			target : YogurtShowcase.KitchenSink.Slider
		});

		YogurtShowcase.MATCH_VIEW({
			uri : 'KitchenSink/Calendar',
			target : YogurtShowcase.KitchenSink.Calendar
		});
	}
});
