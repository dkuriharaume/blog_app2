<!-- title: 次にやること -->

# あと何を実装すればいい ?

備忘録を兼ねて。  

- MD ファイルの改行 
- 画像ファイルの指定
- サムネイルの実装 ?

## MD ファイルの改行

現状、MD ファイルのパラグラフのラインブレイクが正しく挿入されない。  
MD ファイルをパースして `<br>` を行末に自動挿入したい。

## 画像ファイルの指定

これも現状かなり面倒。  
理想は、

1. MD ファイルで画像のラベルを指定
2. MD ファイルをアップロード、もしくは解析すると、ラベルに応じた画像を up することを求めるページに遷移
3. Up された画像がサーバーに保存され、その位置に正しく挿入される。

## サムネイルの実装 ?

これは時間があれば。  
Bootstrap の CSS をいじる必要あり ?

## おまけ: テーブルのテスト

好きな食べ物。  

|名前|説明|理由|
|-|-|-|
|煮干し|いわしの小魚を塩ゆでしてカラッカラに乾かしたもの|動物性蛋白質が豊富に含まれる。<br>また、魚全体を食べられるので良質な油脂を摂ることが可能。<br>ただし、尿酸値が上がりやすくなるので食べ過ぎには注意|
|カカオニブ|カカオ豆をローストして発酵させて細かく砕いたもの|ポリフェノールが豊富に含まれる。チョコレートと違って砂糖が含まれないのも良い。カフェインが少なからず含まれるので摂りすぎには注意。とはいっても最近はあんまり気にしてないけど。|
|ピスタチオ|豆。ローストしてあるもの|美味しい。ポリフェノールも豊富に含まれる。<br>アーモンドとか他のナッツより、多分レクチンの含有量が少ない気がする。|