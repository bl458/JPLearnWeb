import React from 'react';

const helper = () => {
  if (window.getSelection().toString() !== '') {
    console.log(window.getSelection().toString())
  }
}

const Subtitle = ({engSub, jpSub}) => (
  <div className="subtitle">
    {jpSub}<br/>{engSub}
    {helper()}
  </div>
)

export default Subtitle;
