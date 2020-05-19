import React from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

const toFuri = async (jp) => {
  var kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "/dict" }));
  return await kuroshiro.convert(jp, { to: "hiragana" });
}

const onHighlight = () => {
  console.log("Entered onHighlight");

  if (window.getSelection().toString() !== '') {
    toFuri(window.getSelection().toString()).then(
      (result) => console.log(result)
    )
  }
}


const Subtitle = ({engSub, jpSub}) => (
  <div className="subtitle" onClick={onHighlight}>
    {jpSub}

    <br/>

    {engSub}
  </div>
)

export default Subtitle;
