import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

// 获取本地图片，提供裁剪选项
// https://ant.design/components/upload-cn/
// 图片信息安全，没有上传服务器 https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL
// https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL

type Props = {
    style?: React.CSSProperties;
    addImg: (src: string) => any;
}

const UploadCompoent = (props: Props) => {
  console.log(2,'UploadCompoent 图片 rerender');
  const {style, addImg} = props;
  const lodashFlag = new Set();
  
  const onChange = (arr: any) => {
    const {file : {originFileObj}} = arr;
    if(lodashFlag.has(originFileObj.uid)) {
      const reader  = new FileReader();
      reader.addEventListener("load", function () {
        const url = reader.result as string || '';
        addImg(url);
      }, false);
      reader.readAsDataURL(originFileObj);
      lodashFlag.delete(originFileObj.uid);
    }else {
      lodashFlag.add(originFileObj.uid)
    }
  };

  return (
    <div style={{...style, display: 'inline-block'}}>
        <ImgCrop rotate>
            <Upload 
                onChange={onChange}
                maxCount = {1}
                accept="image/png, image/jpeg"
                itemRender={()=>null}   
            >
              <Button  size='middle'>图片</Button>
            </Upload>
        </ImgCrop>
    </div>
  );
};

export default React.memo(UploadCompoent);
