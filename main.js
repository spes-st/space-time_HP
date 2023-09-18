// ヘッダースクロールイベント
$(function () {
	var header = $("header");

	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			header.css("background-color", "rgba(255, 217, 0, 0.5");
			$("header a").css("color", "#000");
		} else {
			header.css("background", "none");
			$("header a").css("color", "#ffd900");
		}
	});
	// ハンバーガーメニューアクション
	$(".burger").click(function () {
		$(".burger").toggleClass("is-active");
		$(".menu").toggleClass("is-active");
	});
});
