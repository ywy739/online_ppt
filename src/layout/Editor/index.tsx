import { Button, Form, Input, Modal, Popover } from "antd";
import { addEle, deleteEle,  addImg, copyEle } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Ele } from "../../constants/slide";
import UploadCompoent from "../../component/UploadCompoent";
import React from "react";

const uploadTitle = '上传本地幻灯片';
const downloadTitle = '获取远程幻灯片';

const  Editor = () => { 
  const dispatch = useAppDispatch();
  const {contents, index, background} = useAppSelector(state => state.editingSlide);
  //const [contents, index] = [[], 8]
  console.log(1,'editor rerender')
  const handleAddImg = React.useCallback((src: string) => dispatch(addImg(src)),[]);
  
  // 上传数据弹窗
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [modalText, setModalText] = React.useState<any>();
  const [modalfooter, setModalfooter] = React.useState<any>(undefined);

  const upload = () => {
    setModalfooter(undefined);
    setTitle(uploadTitle);
    setModalText('上传本地幻灯片至服务器，服务器返回专属密钥。将你的密钥分享给别人，即可分享幻灯片。')
  }

  const download = () => {
    setModalfooter(undefined);
    setTitle (downloadTitle);
    const content = <Form.Item
                        label="输入幻灯片对应的密钥"
                        name="key"
                        rules={[{ required: true, message: 'Please input your key!' }]}
                      >
                        <Input />
                    </Form.Item>;
    setModalText(content);
  }

  const uoploadOk = (keys: string) => {
    const content = <Form.Item
                        label="复制密钥，分享给别人"
                        name="key"
                        rules={[{ required: true, message: 'Please input your key!' }]}
                      >
                        <text>{keys}</text>
                    </Form.Item>;
    setModalText(content);
  }
 
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalfooter(null);
      if(title === uploadTitle) {
        uoploadOk('jhdknnbh')
        setTitle ('上传成功');
      }else {
        setTitle('');
      }
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setTitle('');
  };

  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Popover placement="topLeft" content={'上传本地幻灯片，分享给其他人'} trigger="hover">
          <Button size='middle' onClick={upload} type="primary">上传</Button>
        </Popover>
        <Popover placement="topLeft" content={'通过密钥获取远程幻灯片'} trigger="hover">
          <Button size='middle' onClick={download} type="primary">获取</Button>
        </Popover>
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Text))}>文本</Button>
        <UploadCompoent addImg={handleAddImg}/>
        <div className={style.free} ></div>
        <Button size='middle' onClick={() => dispatch(deleteEle())} danger>删除</Button>
        <Button size='middle' onClick={() => dispatch(copyEle())} danger>拷贝</Button>
      </div>
      <div className={style.draggableContainer}>
        <div className={style.editingSlide} style={{background}}>
          {contents.map((ele, cIndex) => {
            return <DraggableComponent key={`${index}-${cIndex}`} {...{...ele,index:cIndex}}/>
          })}
        </div>
      </div>
      <Modal
        title={title}
        visible={!!title}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText='取消'
        okText = '发送'
        footer={modalfooter}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
}


export default Editor;
