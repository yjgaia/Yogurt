require(process.env.UPPERCASE_PATH + '/LOAD.js');

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
