Yogurt.Folder = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				cursor : 'default'
			},
			listStyle : {
				marginLeft : 10
			}
		};
	},
	
	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.listStyle
		//OPTIONAL: params.on
		//OPTIONAL: params.items
		//OPTIONAL: params.isRequiringClearBoth
		
		let listStyle = params.listStyle;

		let list = UUI.LIST({
			style : listStyle
		}).appendTo(self);
		
		list.hide();
		
		self.on('tap', () => {
			if (list.checkIsShowing() === true) {
				list.hide();
			} else {
				list.show();
			}
		});

		let addItem = self.addItem = (params) => {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.item
			//OPTIONAL: params.isFirst

			list.addItem(params);
		};

		if (params !== undefined && params.items !== undefined) {

			EACH(params.items, (item, key) => {
				addItem({
					key : key,
					item : item
				});
			});
		}

		let removeItem = self.removeItem = (key) => {
			//REQUIRED: key

			list.removeItem(key);
		};

		let removeAllItems = self.removeAllItems = () => {
			list.removeAllItems();
		};
	}
});
