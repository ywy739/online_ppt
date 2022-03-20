import { Input, Image } from "antd";
import React from "react";

type DOMDescription = {
    type: string;
    style?: React.CSSProperties;
    src?: string; // 图片源
}
const StaticComponent = (arg: DOMDescription) => {
    const {type, style, ...rest} = arg;
    console.log(arg);
    switch(type){
        case 'text':
            return <Input placeholder="文本" style={{ ...style}} {...rest}/>;
        case 'img':
            return <img style={{width:'200px', height:'200px', ...style}} {...rest}/>;
        case 'shape':
            return null;
        default:
            return null;
    }
}
export default StaticComponent;