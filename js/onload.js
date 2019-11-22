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
            let dom = createElement("div");
            dom.classList.add("colorFrame");
        }
    });
});

// csvを区切って配列に入れる
function convertCSVtoArray(str) {
    let result = [];
    let tmp = str.split("\n");
    for (let i = 0; i < tmp.length; ++i) result[i] = tmp[i].split(',');
    return result;
}
