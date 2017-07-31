YogurtShowcase('KitchenSink').FileTree = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		TITLE('Yogurt File Tree');

		let wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// left
				left : Yogurt.BackButton({
					on : {
						tap : () => {
							YogurtShowcase.GO('KitchenSink');
						}
					}
				}),

				// title
				title : '파일 트리'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [P({
					c : ['Welcome to File Tree Showcase.', Yogurt.FileTree({
						items : {
							1 : Yogurt.File({
								icon : FontAwesome.GetIcon('file'),
								spacing : 10,
								title : 'File 1'
							}),
							2 : Yogurt.Folder({
								icon : FontAwesome.GetIcon('folder'),
								spacing : 10,
								title : 'Folder 1',
								items : {
									1 : Yogurt.File({
										icon : FontAwesome.GetIcon('pencil'),
										spacing : 10,
										title : 'File 2'
									})
								}
							})
						}
					})]
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
