require(process.env.UPPERCASE_IO_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'YogurtShowcase',
		isDevMode : true,
		webServerPort : 8881
	}
});
