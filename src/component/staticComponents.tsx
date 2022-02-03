import { Input } from "antd";
import React from "react";

type DOMDescription = {
    type: string;
    style?: React.CSSProperties;
}
const StaticComponent = (arg: DOMDescription) => {
    const {type, style} = arg;
    switch(type){
        case 'text':
            return <Input placeholder="文本" style={{width:'20px', ...style}}/>;
        case 'img':
            return <Input placeholder="图片" style={{width:'30px', ...style}}/>;
        default:
            return null;
    }
}
export default StaticComponent;