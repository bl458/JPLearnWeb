import React from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

const helper = () => {
  // if (window.getSelection().toString() !== '') {
  //   console.log(window.getSelection().toString())
  // }

  var kuroshiro = new Kuroshiro();
  kuroshiro.init(new KuromojiAnalyzer({ dictPath: "/dict" }))
    .then(function () {
        return kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { to: "hiragana" });
    })
    .then(function(result){
        console.log(result);
    })
}

const Subtitle = ({engSub, jpSub}) => (
  <div className="subtitle">
    {jpSub}<br/>{engSub}
    {helper()}
  </div>
)

export default Subtitle;
