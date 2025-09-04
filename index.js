import express from 'express';

// Expressの設定
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const catImages = [
    {
      title: 'PCのやりすぎでこんな顔になっていませんか？（猫）',
      url: '/img/tomneko12151310_TP_V4.jpg'
    },
    {
      title: '気持ちよくお眠り中のスコティッシュフォールド',
      url: '/img/cat458A8400_TP_V4.jpg'
    },
    {
      title: '何もしていないのに再起動した時の猫',
      url: '/img/neko1869IMG_9052_TP_V4.jpg'
    },
    {
      title: '荷物をお届けにあがりましたー（猫）',
      url: '/img/HIRAyamatoneko_TP_V4.jpg'
    },
    {
      title: 'ダンボールの住猫',
      url: '/img/nekotodokimashita171027_TP_V4.jpg'
    }
  ];
  const randomIndex = Math.floor(Math.random() * catImages.length);
  const catImage = catImages[randomIndex];

  res.render('index', {
    catImageTitle: catImage.title,
    catImageUrl: catImage.url,
  });
});

// サーバを起動するコード
const port = 80;
try{
  app.listen(port, () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
  });
} catch (err) {
  console.error(`サーバの起動に失敗しました: ${err}`);
  console.error(err.stack);
}
