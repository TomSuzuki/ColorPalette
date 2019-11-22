// 色をロードする
window.addEventListener("DOMContentLoaded", function () {
	loadTextFile("./color.csv", function (result) {
		csv = convertCSVtoArray(result);

		// 一度全部削除
		let doc_content_box = document.getElementById("main");
		while (doc_content_box.childNodes.length > 0) doc_content_box.childNodes[0].remove();

		// 組み立てる
		for (let i = 0; i < csv.length; i++) {
			let frame = document.createElement("div");
			frame.classList.add("colorFrame");
			let title = document.createElement("div");	// タイトルの追加
			title.classList.add("colorTitle");
			title.style.backgroundColor = csv[i][1];
			title.textContent = csv[i][0];
			frame.appendChild(title);

			for (let j = 2; j < csv[i].length; j++) {
				let col = document.createElement("div");
				col.classList.add("color");
				col.style.color = textColor(csv[i][j]);
				col.style.backgroundColor = csv[i][j];
				col.textContent = csv[i][j];
				frame.appendChild(col);
			}

			// 追加する
			doc_content_box.appendChild(frame);
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
	if(bk > wh) return "#000000";
	return "#FFFFFF";
}

// csvを区切って配列に入れる
function convertCSVtoArray(str) {
	let result = [];
	let tmp = str.split("\n");
	for (let i = 0; i < tmp.length; ++i) result[i] = tmp[i].split(',');
	return result;
}
