
import { Menu, Dropdown, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useStore } from 'react-redux';
import { useState } from 'react';
import { changeEleStyle } from '../../../store/editingSlide';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

const { Text, Title } = Typography;

const FontSetting = () => {
    const [fontStyle, setFontStyle] = useState('default');
    const dispatch = useAppDispatch();
    const menu = (
        <Menu>
          <Menu.Item key={0} onClick={() => dispatch(changeEleStyle({fontSize:'20px'}))}>
              <Title level={2}>标题</Title>
          </Menu.Item>
          <Menu.Item  key={1}>
              <Title level={5}>副标题</Title>
          </Menu.Item>
          <Menu.Item  key={2}>
              <Text >正文</Text>
          </Menu.Item>
          <Menu.Item  key={3}>
              <Text strong>加粗</Text>
          </Menu.Item>
          <Menu.Item  key={4}>
              <Text underline>下划线</Text>
          </Menu.Item>
          <Menu.Item  key={5}>
              <Text type="danger">说明</Text>
          </Menu.Item>
        </Menu>
    );
      
    return (
    <Dropdown overlay={menu}>
        <span>常用格式<DownOutlined /></span>
    </Dropdown>
    );
}

export default FontSetting;