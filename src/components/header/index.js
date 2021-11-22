import { Layout, Menu, Dropdown, Space, Badge, Avatar } from 'antd';
import { DownOutlined, BellFilled, QuestionCircleFilled, ShoppingFilled } from '@ant-design/icons';
import imgLogo from "../../assets/logos/logo-white.svg";
import './style.less';

function Header() {

    const menuDropdown = (
        <Menu>
            <Menu.Item key="1">
                <span>
                    Listado de tabla
                </span>
            </Menu.Item>
        </Menu>
    );

  return (
      <Layout.Header className="header">
          <div className="logo" >
              <img src={imgLogo} alt="logo" />
          </div>
          <div className="left-side">
              <Space size="large">
                  <span className="ant-dropdown-link option-menu">Dashboard</span>
                  <span className="ant-dropdown-link option-menu">Organizacion</span>
                  <Dropdown overlay={menuDropdown}>
                      <span className="ant-dropdown-link option-menu" onClick={e => e.preventDefault()}>
                          Modelos <DownOutlined />
                      </span>
                  </Dropdown>
                  <Dropdown overlay={menuDropdown}>
                      <span className="ant-dropdown-link option-menu" onClick={e => e.preventDefault()}>
                          Seguimiento <DownOutlined />
                      </span>
                  </Dropdown>
              </Space>
          </div>
          <div className="right-side">
              <Space size="large">
                  <ShoppingFilled className="option-menu" style={{ fontSize: 18 }} />
                  <QuestionCircleFilled className="option-menu" style={{ fontSize: 18 }} />
                  <Badge count={5} size="small">
                      <BellFilled className="option-menu" style={{ fontSize: 18 }} />
                  </Badge>
                  <Avatar size={40}>A</Avatar>
                  <Dropdown overlay={menuDropdown}>
                      <span className="ant-dropdown-link option-menu" onClick={e => e.preventDefault()}>
                          Administrador <DownOutlined />
                      </span>
                  </Dropdown>
                  <div className="logo" >
                      <img src={imgLogo} alt="logo" />
                  </div>
              </Space>
          </div>
      </Layout.Header>
  );
}

export default Header;
