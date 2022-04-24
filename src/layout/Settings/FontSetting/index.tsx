
import { Menu, Dropdown, Typography, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { changeEleStyle } from '../../../store/editingSlide';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import style from './index.module.scss';
import ColorPicker from '../../../component/ColorPicker';

const { Text, Title } = Typography;
const { Option } = Select;

const FontSettingMap = {
    ['t2' as string]: {fontSize:'72px', fontWeight: 'bold'},
    ['t6' as string]: {fontSize:'48px'},
    ['default' as string]: {fontSize:'32px'},
    ['strong' as string]: {fontWeight: 'bold'},
    ['underline' as string]: {textDecoration: 'underline'},
    ['danger' as string]: {color: 'red'},
}

const FontSetting = () => {
    console.log(2,' font setting rerender');
    const dispatch = useAppDispatch();
      
    const handleChange = (value: string) => {
        dispatch(changeEleStyle(FontSettingMap[value]))
    
    }
    const setFontColor = (value: any) => {

        dispatch(changeEleStyle({color: value}))
    }

    return (
    <>
    <div className={style.row}>
        <div>字体大小</div>
        <Select  className={style.container} defaultValue='' style={{ width: 120, height: 42 }} onChange={handleChange}>
            <Option value="t2"><Title level={2}>标题</Title></Option>
            <Option value="t6"><Title level={5}>副标题</Title></Option>
            <Option value="default"> <Text >正文</Text></Option>
            <Option value="strong"><Text strong>加粗</Text></Option>
            <Option value="underline"> <Text underline>下划线</Text></Option>
            <Option value="danger"><Text type="danger">说明</Text></Option>
        </Select>
    </div> 
    <div className={style.row}>
        <div>字体颜色</div>
        <ColorPicker onChange={(color) => setFontColor(color)}/>
    </div>   
    </>
    );
}

export default FontSetting;