import { Input, Image } from "antd";
import React from "react";
import ContentEditable from 'react-contenteditable';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { changeEle } from "../store/editingSlide";

type DOMDescription = {
    type: string;
    style?: React.CSSProperties;
    src?: string; // 图片源
    text?: string;// 文本组件的文本
}
const StaticComponent = (arg: DOMDescription) => {
    const {type, style, text, ...rest} = arg;
    const dispatch = useAppDispatch();
    console.log(arg);
    switch(type){
        case 'text':
            //return <Input placeholder="文本" style={style} {...rest}/>;
            return (
                <ContentEditable
                    {...rest}
                    html={text||'请输入文本'}
                    onChange={(e: any) =>{
                        console.log(444,e)
                        const text = e.target.value
                        //.replace(/<\/?[^>]+(>|$)/g, '');
                        dispatch(changeEle({text}))
                    }}
                    tagName="div"
                    style={style}
                />
            );
        case 'img':
            return <img style={{width:'200px', height:'200px', ...style}} {...rest}/>;
        case 'shape':
            return null;
        default:
            return null;
    }
}
export default StaticComponent;