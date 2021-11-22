import { PageHeader as Page, Tabs, Button } from 'antd';
import { DownloadOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import './style.less';

const { TabPane } = Tabs;

function PageHeader() {

  return (
      <Page
          className="page-header"
          title="Organizacion"
          footer={
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Divisiones" key="1" />
                  <TabPane tab="Colaboradores" key="2" />
              </Tabs>
          }
          extra={[
              <Button key="1" type="primary" icon={<PlusOutlined />} size='large' />,
              <Button key="2"icon={<UploadOutlined />} size='large' />,
              <Button key="3" icon={<DownloadOutlined />} size='large' />,
          ]}
          >
      </Page>
  );
}

export default PageHeader;
