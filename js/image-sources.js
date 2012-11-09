$(document).ready(function() {
	
	var tags;
	
	$("a#src-link").click(function() {

		tags = [];

		$("*[data-src-url]").each(function(i) {
			
			url = $(this).data("src-url");
			text = $(this).data("src-text");
			pos = $(this).offset();

			el = $("<div class=\"src-tag\"><a href=\"" + url + "\">" + text + "</a></div>");

			$("body").append(el);
			el.hide();
			
			el.css({"left": pos.left + ($(this).width() / 2) - (el.width() / 2) + 6});
			if ($(this).data("src-bottom")) {
				el.css({"top": pos.top + $(this).height() + 18});
				el.addClass("btm");
			} else {
				el.css({"top": pos.top - 35});
			}

			el.fadeIn();
			
			tags.push(el);

		});

		close = $("<a href=\"javascript:void(0);\" class=\"src-close\">Hide Image Sources</a>");
		close.click(function() {
			$.each(tags, function(i, e) {
				e.fadeOut();
				e.remove();
			});
			close.fadeOut();
			e.remove();
		});
		$("body").append(close);
		close.hide();
		close.fadeIn();

	});
});
