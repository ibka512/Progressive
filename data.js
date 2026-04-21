/**
 * 钟摆日语 - 词库与常量数据
 */

const DefaultWords = [
{
  word: "気",
  kana: "き",
  type: "名词",
  meaning: "Spirit; mood; attention.",
  example: "$\\overset{きせつ}{季節}$の$\\overset{か}{変}$わり$\\overset{め}{目}$は$\\overset{き}{気}$をつけてください。/Please be careful during the change of seasons."
},
{
  word: "季節",
  kana: "きせつ",
  type: "名词",
  meaning: "Season.",
  example: "$\\overset{き}{気}$のせいか、$\\overset{ことし}{今年}$の$\\overset{きせつ}{季節}$の$\\overset{か}{変}$わり$\\overset{め}{目}$は$\\overset{はや}{早}$い。/I don't know if it's just my imagination, but the change of seasons feels early this year."
},
{
  word: "気持ち",
  kana: "きもち",
  type: "名词",
  meaning: "Feeling; mood.",
  example: "$\\overset{しんせん}{新鮮}$な$\\overset{くうき}{空気}$を$\\overset{す}{吸}$うと、$\\overset{きも}{気持}$ちが$\\overset{よ}{良}$くなる。/Breathing fresh air makes you feel better."
},
{
  word: "空気",
  kana: "くうき",
  type: "名词",
  meaning: "Air; atmosphere.",
  example: "ここはおいしい$\\overset{くうき}{空気}$があって、$\\overset{げんき}{元気}$が$\\overset{で}{出}$る。/The air here is fresh and makes you feel energetic."
},
{
  word: "元気",
  kana: "げんき",
  type: "名・形动",
  meaning: "Energetic; healthy.",
  example: "$\\overset{かぜ}{風邪}$を$\\overset{ひ}{引}$いたが、もう$\\overset{げんき}{元気}$を$\\overset{と}{取}$り$\\overset{もど}{戻}$した。/Although I caught a cold, I have regained my energy. || $\\overset{かれ}{彼}$は$\\overset{しごと}{仕事}$で$\\overset{いそが}{忙}$しいが、いつも$\\overset{げんき}{元気}$だ。/Although he is busy with work, he is always full of energy."
},
{
  word: "仕事",
  kana: "しごと",
  type: "名・サ变动词する自",
  meaning: "Work; job; occupation.",
  example: "$\\overset{しょうがつ}{正月}$が$\\overset{お}{終}$わって、$\\overset{あした}{明日}$から$\\overset{しごと}{仕事}$だ。/The New Year is over, and work starts tomorrow. || $\\overset{まいにち}{毎日}$$\\overset{よる}{夜}$$\\overset{おそ}{遅}$くまで$\\overset{しごと}{仕事}$をしている。/Working late into the night every day."
},
{
  word: "正月",
  kana: "しょうがつ",
  type: "名词",
  meaning: "New Year; January.",
  example: "$\\overset{しょうがつ}{正月}$に$\\overset{かぞく}{家族}$と$\\overset{いっしょ}{一緒}$に$\\overset{しょくじ}{食事}$をした。/I had a meal with my family during the New Year."
},
{
  word: "食事",
  kana: "しょくじ",
  type: "名・サ变动词する自",
  meaning: "Meal; dining.",
  example: "バランスの$\\overset{よ}{良}$い$\\overset{しょくじ}{食事}$は$\\overset{けんこう}{健康}$にいい。/A balanced diet is good for your health. || $\\overset{せんげつ}{先月}$、あのレストランで$\\overset{しょくじ}{食事}$した。/I had a meal at that restaurant last month."
},
{
  word: "新聞",
  kana: "しんぶん",
  type: "名词",
  meaning: "Newspaper.",
  example: "$\\overset{せんげつ}{先月}$の$\\overset{しんぶん}{新聞}$を$\\overset{す}{捨}$てて、$\\overset{そうじ}{掃除}$をした。/I threw away last month's newspapers and cleaned up."
},
{
  word: "先月",
  kana: "せんげつ",
  type: "名词",
  meaning: "Last month.",
  example: "$\\overset{せんげつ}{先月}$、$\\overset{あたら}{新}$しい$\\overset{せんたく}{洗濯}$$\\overset{き}{機}$を$\\overset{か}{買}$った。/I bought a new washing machine last month."
},
{
  word: "洗濯",
  kana: "せんたく",
  type: "名・サ变动词する他",
  meaning: "Laundry; washing.",
  example: "$\\overset{きょう}{今日}$は$\\overset{てんき}{天気}$がいいので、$\\overset{せんたく}{洗濯}$の$\\overset{ひ}{日}$だ。/The weather is nice today, so it's a good day for laundry. || $\\overset{しゅうまつ}{週末}$に$\\overset{ふく}{服}$をまとめて$\\overset{せんたく}{洗濯}$する。/I gather my clothes and do the laundry on the weekend."
},
{
  word: "掃除",
  kana: "そうじ",
  type: "名・サ变动词する他",
  meaning: "Cleaning; sweeping.",
  example: "$\\overset{へや}{部屋}$の$\\overset{そうじ}{掃除}$をしてから、$\\overset{で}{出}$かける。/I will clean the room before going out. || $\\overset{まいにち}{毎日}$$\\overset{きょうしつ}{教室}$を$\\overset{そうじ}{掃除}$しなければならない。/The classroom must be cleaned every day."
},
{
  word: "中華料理",
  kana: "ちゅうかりょうり",
  type: "名词",
  meaning: "Chinese food; Chinese cuisine.",
  example: "$\\overset{きのう}{昨日}$、$\\overset{おい}{美味}$しい$\\overset{ちゅうかりょうり}{中華料理}$の$\\overset{みせ}{店}$を$\\overset{み}{見}$つけた。/Yesterday, I found a delicious Chinese restaurant."
},
{
  word: "天気",
  kana: "てんき",
  type: "名词",
  meaning: "Weather.",
  example: "$\\overset{てんき}{天気}$の$\\overset{へんか}{変化}$が$\\overset{はげ}{激}$しいので、$\\overset{き}{気}$をつけてください。/The weather is changing drastically, so please be careful."
},
{
  word: "時計",
  kana: "とけい",
  type: "名词",
  meaning: "Clock; watch.",
  example: "$\\overset{とけい}{時計}$を$\\overset{み}{見}$たら、$\\overset{にゅういん}{入院}$の$\\overset{じかん}{時間}$が$\\overset{ちか}{近}$づいていた。/I looked at the clock and realized it was almost time to be hospitalized."
},
{
  word: "入院",
  kana: "にゅういん",
  type: "名・サ变动词する自",
  meaning: "Hospitalization; admission to hospital.",
  example: "$\\overset{かれ}{彼}$の$\\overset{にゅういん}{入院}$の$\\overset{りゆう}{理由}$は$\\overset{びょうき}{病気}$です。/The reason for his hospitalization is illness. || $\\overset{おも}{重}$い$\\overset{びょうき}{病気}$で$\\overset{びょういん}{病院}$に$\\overset{にゅういん}{入院}$することになった。/Because of a serious illness, it was decided to be hospitalized."
},
{
  word: "病気",
  kana: "びょうき",
  type: "名词",
  meaning: "Illness; disease; sickness.",
  example: "$\\overset{びょうき}{病気}$が$\\overset{なお}{治}$って、$\\overset{ぶじ}{無事}$に$\\overset{たいいん}{退院}$した。/I recovered from the illness and was safely discharged from the hospital."
},
{
  word: "無事",
  kana: "ぶじ",
  type: "名・形动",
  meaning: "Safe; without incident.",
  example: "$\\overset{かぞく}{家族}$の$\\overset{ぶじ}{無事}$を$\\overset{いの}{祈}$る。/Pray for the safety of the family. || $\\overset{じこ}{事故}$に$\\overset{あ}{遭}$ったが、$\\overset{かれ}{彼}$は$\\overset{ぶじ}{無事}$だった。/Although he was in an accident, he was safe."
},
{
  word: "変化",
  kana: "へんか",
  type: "名・サ变动词する自他",
  meaning: "Change; variation.",
  example: "$\\overset{ちかごろ}{近頃}$、$\\overset{きこう}{気候}$の$\\overset{へんか}{変化}$が$\\overset{はげ}{激}$しい。/Recently, climate changes have been drastic. || $\\overset{じだい}{時代}$とともにもう$\\overset{へんか}{変化}$している。/It has already changed with the times."
},
{
  word: "返事",
  kana: "へんじ",
  type: "名・サ变动词する自",
  meaning: "Reply; answer.",
  example: "$\\overset{てがみ}{手紙}$の$\\overset{へんじ}{返事}$を$\\overset{ほんだな}{本棚}$に$\\overset{お}{置}$いた。/I put the reply letter on the bookshelf. || $\\overset{なまえ}{名前}$を$\\overset{よ}{呼}$ばれたら、$\\overset{おお}{大}$きな$\\overset{こえ}{声}$で$\\overset{へんじ}{返事}$をしなさい。/If your name is called, please answer in a loud voice."
},
{
  word: "本棚",
  kana: "ほんだな",
  type: "名词",
  meaning: "Bookshelf.",
  example: "$\\overset{ほんだな}{本棚}$の$\\overset{せいり}{整理}$をするのに$\\overset{ゆうき}{勇気}$がいる。/It takes some courage to organize the bookshelf (because there are too many books)."
},
{
  word: "勇気",
  kana: "ゆうき",
  type: "名词",
  meaning: "Courage; bravery.",
  example: "$\\overset{こんなん}{困難}$に$\\overset{た}{立}$ち$\\overset{む}{向}$かう$\\overset{ゆうき}{勇気}$を$\\overset{も}{持}$ってください。/Please have the courage to face difficulties."
},
{
  word: "油断",
  kana: "ゆだん",
  type: "名・サ变动词する自",
  meaning: "Negligence; carelessness.",
  example: "$\\overset{ゆだん}{油断}$$\\overset{たいてき}{大敵}$という$\\overset{ことば}{言葉}$を$\\overset{おぼ}{覚}$えておこう。/Let's remember the saying 'Carelessness is the greatest enemy'. || $\\overset{あんぜん}{安全}$だからといって、$\\overset{ゆだん}{油断}$してはいけない。/You shouldn't let your guard down just because it's safe."
},
{
  word: "料理",
  kana: "りょうり",
  type: "名・サ变动词する他",
  meaning: "Cooking; dish; cuisine.",
  example: "$\\overset{はは}{母}$の$\\overset{つく}{作}$った$\\overset{りょうり}{料理}$はとても$\\overset{おい}{美味}$しい。/The food my mother cooks is very delicious. || $\\overset{しょうがつ}{正月}$に$\\overset{おせちりょうり}{御節料理}$を$\\overset{りょうり}{料理}$した。/I prepared Osechi-ryori (New Year's dishes) during the New Year."
},
{
  word: "安全",
  kana: "あんぜん",
  type: "名・形动",
  meaning: "Safety; security.",
  example: "$\\overset{こうつう}{交通}$$\\overset{あんぜん}{安全}$に$\\overset{じゅうぶん}{十分}$$\\overset{き}{気}$をつけてください。/Please pay close attention to traffic safety. || あの$\\overset{いち}{位置}$はとても$\\overset{あんぜん}{安全}$だと$\\overset{おも}{思}$う。/I think that position is very safe."
},
{
  word: "位置",
  kana: "いち",
  type: "名・サ变动词",
  meaning: "Position; location.",
  example: "$\\overset{がっこう}{学校}$の$\\overset{いち}{位置}$を$\\overset{ちず}{地図}$で$\\overset{かくにん}{確認}$する。/Confirm the location of the school on the map. || $\\overset{わたし}{私}$の$\\overset{いえ}{家}$は$\\overset{えき}{駅}$の$\\overset{ちか}{近}$くに$\\overset{いち}{位置}$している。/My house is located near the station."
},
{
  word: "映像",
  kana: "えいぞう",
  type: "名词",
  meaning: "Image; video; reflection.",
  example: "$\\overset{かじ}{家事}$をしながら、テレビの$\\overset{えいぞう}{映像}$を$\\overset{み}{見}$る。/Watching video on the TV while doing housework."
},
{
  word: "御節料理",
  kana: "おせちりょうり",
  type: "名词",
  meaning: "Osechi-ryori; traditional Japanese New Year foods.",
  example: "$\\overset{しょうがつ}{正月}$に$\\overset{かぞく}{家族}$と$\\overset{おせちりょうり}{御節料理}$を$\\overset{た}{食}$べた。/I ate Osechi-ryori with my family during the New Year."
},
{
  word: "家事",
  kana: "かじ",
  type: "名词",
  meaning: "Housework; chores.",
  example: "$\\overset{はは}{母}$は$\\overset{まいにち}{毎日}$$\\overset{かじ}{家事}$で$\\overset{いそが}{忙}$しい。/My mother is busy with housework every day."
},
{
  word: "火事",
  kana: "かじ",
  type: "名词",
  meaning: "Fire; conflagration.",
  example: "$\\overset{ちか}{近}$くで$\\overset{かじ}{火事}$があり、$\\overset{きゅう}{急}$に$\\overset{そと}{外}$へ$\\overset{に}{逃}$げた。/There was a fire nearby, so I hurriedly escaped outside."
},
{
  word: "気候",
  kana: "きこう",
  type: "名词",
  meaning: "Climate.",
  example: "この$\\overset{ちいき}{地域}$の$\\overset{きこう}{気候}$はとても$\\overset{す}{過}$ごしやすい。/The climate in this region is very pleasant."
},
{
  word: "気付く",
  kana: "きづく",
  type: "五段动词自",
  meaning: "To notice; to realize; to become aware.",
  example: "$\\overset{かれ}{彼}$が$\\overset{きづ}{気付}$いたときには、もう$\\overset{おそ}{遅}$かった。/By the time he realized it, it was already too late."
},
{
  word: "気の毒",
  kana: "きのどく",
  type: "名・形动",
  meaning: "Pitiful; unfortunate; regrettable.",
  example: "$\\overset{かれ}{彼}$の$\\overset{しっぱい}{失敗}$を$\\overset{き}{気}$の$\\overset{どく}{毒}$に$\\overset{おも}{思}$う。/I feel sorry for his failure. || $\\overset{き}{気}$の$\\overset{どく}{毒}$な$\\overset{じじょう}{事情}$があって、$\\overset{がっこう}{学校}$をやめた。/I quit school due to unfortunate circumstances."
},
{
  word: "気分",
  kana: "きぶん",
  type: "名词",
  meaning: "Feeling; mood; physical condition.",
  example: "$\\overset{きゅう}{急}$に$\\overset{きぶん}{気分}$が$\\overset{わる}{悪}$くなって、$\\overset{たお}{倒}$れてしまった。/I suddenly felt unwell and collapsed."
},
{
  word: "急",
  kana: "きゅう",
  type: "名・形动・副",
  meaning: "Sudden; urgent; steep.",
  example: "$\\overset{きゅう}{急}$な$\\overset{ようじ}{用事}$ができて、$\\overset{い}{行}$けなくなりました。/Something urgent came up, so I can't go. || $\\overset{きゅう}{急}$な$\\overset{さかみち}{坂道}$を$\\overset{のぼ}{登}$る。/Climbing a steep slope."
},
{
  word: "計画",
  kana: "けいかく",
  type: "名・サ变动词する他",
  meaning: "Plan; project.",
  example: "$\\overset{りょこう}{旅行}$の$\\overset{けいかく}{計画}$を$\\overset{た}{立}$てる。/Make a travel plan. || $\\overset{なつやす}{夏休}$みに$\\overset{うみ}{海}$へ$\\overset{い}{行}$くことを$\\overset{けいかく}{計画}$している。/I am planning to go to the beach during summer vacation."
},
{
  word: "景気",
  kana: "けいき",
  type: "名词",
  meaning: "Economic conditions; business climate.",
  example: "$\\overset{さいきん}{最近}$、$\\overset{けいき}{景気}$が$\\overset{かいふく}{回復}$してきたようだ。/Recently, the economy seems to have recovered."
},
{
  word: "警察",
  kana: "けいさつ",
  type: "名词",
  meaning: "Police; police station.",
  example: "$\\overset{じけん}{事件}$が$\\overset{お}{起}$きて、すぐ$\\overset{けいさつ}{警察}$を$\\overset{よ}{呼}$んだ。/An incident occurred, and I called the police immediately."
}
];

const Gojuon = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ".split('');
