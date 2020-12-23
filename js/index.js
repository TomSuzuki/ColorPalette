// create page
window.addEventListener("DOMContentLoaded", function () {
	loadTextFile("./color.json", function (result) {
		// json
		let colorData = JSON.parse(result);

		// all remove
		let doc_content_box = document.getElementById("main");
		while (doc_content_box.childNodes.length > 0) doc_content_box.childNodes[0].remove();

		// create category
		for (let i in Object.keys(colorData)) {
			let res = createCategory(Object.keys(colorData)[i], colorData[Object.keys(colorData)[i]]);
			doc_content_box.appendChild(res["title"]);
			doc_content_box.appendChild(res["frames"]);
		}

	});
});

// create new category
function createCategory(CategoryTitle, CategoryData) {
	// create title
	let title = document.createElement("h2");
	title.classList.add("categoryTitle");
	title.textContent = CategoryTitle.toUpperCase();

	// create frame of frame
	let frames = document.createElement("div");
	frames.classList.add("colorFrames");

	// add frame
	for (let i in CategoryData) {
		frames.appendChild(createFrame(CategoryData[i]));
	}

	// return datas
	return {
		"title": title,
		"frames": frames
	}
}

// create new frame
function createFrame(FrameData) {
	// create frame
	let frame = document.createElement("div");
	frame.classList.add("color-frame");

	// create frame title
	let title = document.createElement("h2");
	title.style.backgroundColor = FrameData["key_color"];
	title.style.color = textColor(FrameData["key_color"]);
	title.textContent = FrameData["name"].toUpperCase();
	frame.appendChild(title);

	// create sub title
	let subtitle = document.createElement("h3");
	if (FrameData["sub_name"]) subtitle.textContent = FrameData["sub_name"];
	subtitle.style.color = textColor(FrameData["key_color"]);
	title.appendChild(subtitle);

	// add colors
	for (let k in FrameData["color"]) {
		let color = document.createElement("div");
		color.classList.add("color");
		color.style.color = textColor(FrameData["color"][k]);
		color.style.backgroundColor = FrameData["color"][k];
		color.textContent = FrameData["color"][k].toUpperCase();
		frame.appendChild(color);
	}

	return frame;
}

// text color [0xFFFFFF or 0x000000]
function textColor(c) {
	let r = parseInt("0x" + c.substr(1, 2), 16);
	let g = parseInt("0x" + c.substr(3, 2), 16);
	let b = parseInt("0x" + c.substr(5, 2), 16);
	let bk = distance3(r, g, b);
	let wh = distance3(255 - r, 255 - g, 255 - b);
	if (bk > wh) return "#000000";
	return "#FFFFFF";
}

// get distance^2 from (0,0,0)
function distance3(r, g, b) {
	return Math.pow(r, 2) + Math.pow(g, 2) + Math.pow(b, 2);
}
