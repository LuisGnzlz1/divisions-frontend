import { Layout as LayoutApp } from 'antd';
import Header from "./../header";
import PageHeader from "./../page.header";

const { Content } = LayoutApp;

function Layout({children}) {

    return (
      <LayoutApp>
          <Header/>
          <PageHeader/>
          <Content style={{ padding: '40px 40px'}}>
              {children}
          </Content>
      </LayoutApp>
  );
}

export default Layout;
