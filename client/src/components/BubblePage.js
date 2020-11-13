import React, { useState, useEffect } from "react";
import {fetchColors} from '../utils/fetchColors'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchColors()
      .then((res) => {
        setColorList(res)
      })
      .catch((err) => {
        alert(`${err}`)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
