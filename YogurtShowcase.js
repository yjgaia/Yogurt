require(process.env.UPPERCASE_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'YogurtShowcase',
		isDevMode : true,
		webServerPort : 8881
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
