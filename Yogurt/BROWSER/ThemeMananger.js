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
				
				// 레이아웃 관련 스타일
				wrapperStyle : {
					backgroundColor : '#fff',
					color : '#000',
					fontSize : 16
				},
				menuLayoutMenuWidth : 200,
				menuLayoutHideMenuWinWidth : 800,
				menuLayoutMenuBackgroundColor : '#222',
				
				// 버튼 관련 스타일
				buttonColor : '#eee',
				buttonTitleColor : '#333',
				buttonMouseoverColor : '#333',
				buttonMouseoverTitleColor : '#eee',
				
				// 툴바 관련 스타일
				toolbarBackground : undefined,
				toolbarBackgroundImage : undefined,
				toolbarColor : '#333',
				toolbarTextColor : '#fff',
				
				// 아래 바 관련 스타일
				bottomBarColor : '#666',
				bottomBarTextColor : '#fff',
				bottomBarHeight : 70
			},
			extend : Yogurt.Theme
		});
	}
});
