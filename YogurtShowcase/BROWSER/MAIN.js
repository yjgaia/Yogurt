YogurtShowcase.MAIN = METHOD({

	run : function(params) {
		'use strict';

		YogurtShowcase.MATCH_VIEW({
			uris : ['', '**'],
			target : YogurtShowcase.Control
		});

		YogurtShowcase.MATCH_VIEW({
			uris : [''],
			target : YogurtShowcase.Home
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Toolbar'],
			target : YogurtShowcase.Toolbar
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['ToolbarButton'],
			target : YogurtShowcase.ToolbarButton
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Button'],
			target : YogurtShowcase.Button
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Form'],
			target : YogurtShowcase.Form
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Alert'],
			target : YogurtShowcase.Alert
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Prompt'],
			target : YogurtShowcase.Prompt
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Confirm'],
			target : YogurtShowcase.Confirm
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['MenuLayout'],
			target : YogurtShowcase.MenuLayout
		});
	}
});
