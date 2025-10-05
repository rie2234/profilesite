# 📁 ファイル構成ガイド

## フォルダ構成
```
profilesite/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        └── profile.jpg (※追加が必要)
```

## 各ファイルの保存先

### 1️⃣ index.html
- **保存先**: `profilesite/index.html`
- **説明**: ルートディレクトリに保存

### 2️⃣ style.css
- **保存先**: `profilesite/assets/css/style.css`
- **説明**: CSSフォルダ内に保存

### 3️⃣ script.js
- **保存先**: `profilesite/assets/js/script.js`
- **説明**: JSフォルダ内に保存

### 4️⃣ profile.jpg (※あなたが追加)
- **保存先**: `profilesite/assets/images/profile.jpg`
- **推奨サイズ**: 640x640px以上（正方形）

## ダウンロード方法

各アーティファクトの **右上のボタン** から：
- 📋 **コピー**: コードをクリップボードにコピー
- ⬇️ **ダウンロード**: ファイルとして直接保存

## セットアップ手順

1. `profilesite` フォルダを作成
2. `assets` フォルダを作成
3. `assets` 内に `css`, `js`, `images` フォルダを作成
4. 各ファイルを対応する場所に保存
5. プロフィール画像を `assets/images/profile.jpg` として配置
6. `index.html` をブラウザで開いて確認

## 画像がない場合

HTMLの47行目を以下に変更：
```html
<img src="https://via.placeholder.com/640x640/d6bcfa/ffffff?text=Rie" alt="Rie">
```