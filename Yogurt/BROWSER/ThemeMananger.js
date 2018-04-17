/*
 * 테마를 관리합니다.
 */
Yogurt.ThemeMananger = OBJECT({
	
	init : (inner, self) => {
		
		if (Yogurt.Theme === undefined) {
			Yogurt.Theme = {};
		}
		
		Yogurt.Theme = EXTEND({
			origin : {
				
			},
			extend : Yogurt.Theme
		});
	}
});
