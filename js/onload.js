// 色をロードする
window.addEventListener("DOMContentLoaded", function () {
	loadTextFile("./color.csv", function (result) {
		csv = convertCSVtoArray(result);
		console.log("色の数：", csv.length);
		console.log(csv[0][0], csv[0].length - 1);

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
	//if(c < "#444444") return "#FFFFFF";
	console.log(c);
	return "#000000";
}

// csvを区切って配列に入れる
function convertCSVtoArray(str) {
	let result = [];
	let tmp = str.split("\n");
	for (let i = 0; i < tmp.length; ++i) result[i] = tmp[i].split(',');
	return result;
}
