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
	}
});
