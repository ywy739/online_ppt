import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';

// deprecated
// 获取本地图片，提供裁剪选项
// https://ant.design/components/upload-cn/
// 图片信息安全，没有上传服务器 https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL
// https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL

type StaticImgProps = {
    style?: React.CSSProperties;
}

const StaticImg = (props: StaticImgProps) => {
  const {style} = props;
  const [fileList, setFileList] = useState([]);

  const onChange = (event: any) => {
    const {fileList: newFileList} = event;
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div style={style}>
        <ImgCrop rotate>
            <Upload 
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList as UploadFile<unknown>[]}
                onChange={onChange}
                onPreview={onPreview}
                maxCount = {1}
            >
                {fileList.length === 0 && '+ Upload'}
            </Upload>
        </ImgCrop>
    </div>
  );
};

export default StaticImg;
