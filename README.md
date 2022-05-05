# qiita-publisher-cli について

## 目的

ブログの記事をGithubで管理して、Github Actionsを使って公開できるようにしたい。そのためにはまずは各種BlogサービスのCLIツールを使用するか、なければ作成する。
このプロジェクトではQiitaのCLIツールがないためQiitaのCLIツールを作る。その後、Github Actionsと組み合わせる。

## 欲しい機能

1. Qiitaに公開している記事を全てローカルにダウンロードする(この時、公開済みの記事の内容の差分も全て更新できるようにする)
2. ローカルの記事を全てQiitaに公開する(画像などのファイルもアップロードできるようにする)
3. ディレクトリ構造と公開されている記事とのリンク情報などは設定ファイルにまとめる。設定ファイルは公開されている記事の情報を基に更新されるし、こちらで好きなようにカスタマイズすることも可能な構造にする。
4. qiitaにログインしてAccessTokenの情報を取得して記録できるようにする(AccessTokenの情報を記録したファイルがなければ--tokenでoptionに追加することもできる)

## 参考にする他サービス(メモ)

* [Zenn](): 既にGithubで管理する機能が備わっているので、どうやっているのか参考にする。そして、できるだけ同様のディレクトリ構造でblogの運用ができるようにディレクトリ構造を組み立てる。

## interface(想定)

```
qiita-publisher init
qiita-publisher login
qiita-publisher download --token qiitaauthtoken --options
qiita-publisher build --token qiitaauthtoken --options
qiita-publisher publish --token qiitaauthtoken --options
```