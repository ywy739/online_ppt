import { Input } from "antd";
import React from "react";

type DOMDescription = {
    type: string;
    style?: React.CSSProperties;
}
const getDOM = (arg: DOMDescription) => {
    const {type} = arg;
    switch(type){
        case 'text':
            return <Input placeholder="文本" />;
        case 'img':
            return (<Input placeholder="图片" />);
    }
}
export default getDOM;