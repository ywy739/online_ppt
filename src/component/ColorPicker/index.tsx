import { BgColorsOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { CompactPicker, Color } from "react-color";
import style from './index.module.scss'

type Props = {
  onChange? : (arg: any)=> any;
}

const ColorPicker = (props: Props) => {
  const { onChange } = props;
  const [color, setColor] = useState();
  const [isShowing, setShowing] = useState(false);
  const handleChange = (color: any)=> {
    setColor(color);
    if(onChange) {
      onChange(color.hex)
    }
    console.log(color)
  };
   // const hex = color? color.hex: '';
  return (
    <div className={style.container} onClick={()=>setShowing(!isShowing)}>
      <CompactPicker className={style.picker}  color={color} onChangeComplete={handleChange} />
     
      {/* <CirclePicker/>
      <SliderPicker/> */}
    </div>
  );
};

export default ColorPicker;