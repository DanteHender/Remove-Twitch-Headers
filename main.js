function remove() {
	var url = window.location.href;
	if (url.indexOf("www.twitch.tv/directory") === -1)
		return;
	
	var following = url.indexOf("www.twitch.tv/directory/following") > -1;
	var deleted = false;
	
	try {
		var element = document.getElementsByClassName(following ? 'tw-mg-b-2' : 'tw-mg-t-3')[0];
		if (element.innerHTML.indexOf(following ? "Following" : "Browse") > -1) {
			element.parentNode.removeChild(element);
			if (!following) {
				element = document.getElementsByClassName('tw-mg-t-2')[0];
				element.parentNode.removeChild(element);
			}
			deleted = true;
		}
	} catch(err) {}
	
	if (!deleted)
		setTimeout(function(){remove();},500);
}

function navigation() {
	var navigators = document.getElementsByClassName('navigation-link tw-interactive');
	if (navigators.length === 0) {
		setTimeout(function(){navigation();},500);
		return;
	}
	
	for (var i = 0; i < navigators.length; i++) {
		navigators[i].onclick = function (event) {
			if(event.target.parentElement.parentElement.parentElement.parentElement.className !== "active navigation-link tw-interactive");
				remove();
		};
	}
}

remove();
navigation();