import React, { useState } from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import { Tooltip } from 'reactstrap';


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



const Subtitle = ({engSub, jpSub}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(window.getSelection().toString() !== ''&&!tooltipOpen);

  return (
    <div className="subtitle" onClick={onHighlight}>
      <p>Sometimes you need to allow users to select text within a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p>

      <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        Try to select this text!
      </Tooltip>
      {jpSub}

      <br/>

      {engSub}
    </div>
  )
}

export default Subtitle;
