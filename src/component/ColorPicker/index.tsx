import { BgColorsOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { CompactPicker, Color } from "react-color";
import style from './index.module.scss'

const ColorPicker = () => {
  const [color, setColor] = useState();
  const [isShowing, setShowing] = useState(false);
  const handleChange = (color: any)=> {
    setColor(color);
    console.log(color)
  };
   // const hex = color? color.hex: '';
  return (
    <div className={style.container} onClick={()=>setShowing(!isShowing)}>
      <div className={style.colorBlock} style={{ width:'100px', height: '20px'}}>背景颜色</div>
      <CompactPicker className={style.picker}  color={color} onChangeComplete={handleChange} />
     
      {/* <CirclePicker/>
      <SliderPicker/> */}
    </div>
  );
};

export default ColorPicker;