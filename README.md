<div align="center">
  <h1>
    <a href="https://tomsuzuki.github.io/ColorPalette/">
      Color Palette
    </a>
  </h1>
  <a href="https://github.com/anuraghazra/github-readme-stats/actions">
    <img alt="LICENSE" src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat" />
  </a>
  <a href="https://codeclimate.com/github/TomSuzuki/ColorPalette/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/58df045aefdd61f64d66/maintainability" />
  </a>
  <br>
  <p>
    色見本です。気に入った色を追加しています。  
  </p>
</div>
  
## 色見本  
個人的に使う色を置いています。

## ソースコード
いろんなテストコードを詰め合わせているので可読性は...

## メモ
### npm run generate
```
npm run generate
```

### `ELIFECYCLE` エラー時
`node_modules`を削除。
```
npm install
```

## テスト時
[http://127.0.0.1:5500](http://127.0.0.1:5500)

## deploy
```
npm run generate
```
コミット後
```
npm run deploy
```

## memo
```
npm install push-dir --save-dev
```
`package.json`に追加
```
"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
```