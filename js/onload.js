// 色をロードする
window.addEventListener("DOMContentLoaded", function () {
	loadTextFile("./color.json", function (result) {
		json = JSON.parse(result);

		// 一度全部削除
		let doc_content_box = document.getElementById("main");
		while (doc_content_box.childNodes.length > 0) doc_content_box.childNodes[0].remove();

		// 組み立てる
		for (let category in Object.keys(json)) {

			let categoryName = Object.keys(json)[category];
			let cols = json[categoryName];

			let categoryTitle = document.createElement("h2");
			categoryTitle.classList.add("categoryTitle");
			categoryTitle.textContent = categoryName.toUpperCase();
			doc_content_box.appendChild(categoryTitle);

			let categoryColors = document.createElement("div");
			categoryColors.classList.add("colorFrames");

			for (let i in cols) {
				let frame = document.createElement("div");
				frame.classList.add("colorFrame");
				let title = document.createElement("div");	// タイトルの追加
				title.classList.add("colorTitle");
				title.style.backgroundColor = cols[i]["KeyColor"];
				title.style.color = textColor(cols[i]["KeyColor"]);
				title.textContent = cols[i]["Name"].toUpperCase();
				frame.appendChild(title);

				let subtitle = document.createElement("div");
				if (cols[i]["subName"]) subtitle.textContent = cols[i]["subName"];
				else subtitle.textContent = "";
				subtitle.classList.add("colorSubTitle");
				subtitle.style.color = textColor(cols[i]["KeyColor"]);
				title.appendChild(subtitle);

				for (let k = 0; k < cols[i]["Color"].length; k++) {
					let col = document.createElement("div");
					col.classList.add("color");
					col.style.color = textColor(cols[i]["Color"][k]);
					col.style.backgroundColor = cols[i]["Color"][k];
					col.textContent = cols[i]["Color"][k].toUpperCase();
					frame.appendChild(col);
				}

				// 追加する
				categoryColors.appendChild(frame);
			}

			// 追加
			doc_content_box.appendChild(categoryColors);
		}

	});
});

// textの色を決める関数
function textColor(c) {
	let r = parseInt("0x" + c.substr(1, 2), 16);
	let g = parseInt("0x" + c.substr(3, 2), 16);
	let b = parseInt("0x" + c.substr(5, 2), 16);
	let bk = Math.sqrt(Math.pow(r - 0, 2) + Math.pow(g - 0, 2) + Math.pow(b - 0, 2));
	let wh = Math.sqrt(Math.pow(r - 255, 2) + Math.pow(g - 255, 2) + Math.pow(b - 255, 2));
	if (bk > wh) return "#000000";
	return "#FFFFFF";
}
