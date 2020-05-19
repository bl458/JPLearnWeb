import React from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

const helper = () => {
  console.log("Entered helper")
  var kuroshiro = new Kuroshiro();

  if (window.getSelection().toString() !== '') {
    kuroshiro.init(new KuromojiAnalyzer({ dictPath: "/dict" }))
      .then(() => {
        return kuroshiro.convert(
          window.getSelection().toString(),
           { to: "hiragana" });
      })
      .then((result) => {
        console.log(result);
      })
  }



}

const Subtitle = ({engSub, jpSub}) => (
  <div className="subtitle" onClick={helper}>
    {jpSub}<br/>{engSub}
  </div>
)

export default Subtitle;
