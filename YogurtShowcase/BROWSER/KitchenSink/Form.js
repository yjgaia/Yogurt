YogurtShowcase('KitchenSink').Form = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Form.');

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
				title : 'Form'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [

				// title
				H1({
					style : {
						fontSize : 20,
						textAlign : 'center'
					},
					c : ['What color do you like?']
				}),

				// color select
				DIV({
					style : {
						width : 230,
						margin : 'auto',
						marginTop : 20
					},
					c : [

					// red
					UUI.BUTTON({
						style : {
							flt : 'left',
							backgroundColor : 'red',
							color : '#FFF',
							width : 100,
							height : 100,
							borderRadius : 50
						}
					}),

					// blue
					UUI.BUTTON({
						style : {
							marginLeft : 30,
							flt : 'left',
							backgroundColor : 'blue',
							color : '#FFF',
							width : 100,
							height : 100,
							borderRadius : 50
						}
					}), CLEAR_BOTH()]
				}),

				// form
				UUI.VALID_FORM({
					style : {
						marginTop : 20
					},
					c : [
					// name
					Yogurt.Input({
						placeholder : 'What your name?'
					}),

					// human
					Yogurt.Checkbox({
						style : {
							marginTop : 10
						},
						label : 'Are your human?'
					}),

					// age
					Yogurt.Select({
						style : {
							marginTop : 10
						},
						options : RUN(() => {

							let array = [OPTION({
								c : ['How old are you?']
							})];

							REPEAT({
								start : 0,
								end : 200
							}, (age) => {
								array.push(OPTION({
									value : age,
									c : [age]
								}));
							});

							return array;
						})
					}),

					// description
					Yogurt.Textarea({
						style : {
							marginTop : 10
						},
						placeholder : 'Who you are?'
					}),

					// submit button
					Yogurt.Submit({
						style : {
							marginTop : 20
						}
					})]
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', ()  {
			wrapper.remove();
		});
	}
});
