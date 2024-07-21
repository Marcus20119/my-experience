import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function PrivateLayout() {
  return (
    <Layout className="h-fit w-full">
      <Header />

      <div className="w-full bg-white" id="main-content">
        <Flex align="center" className="h-fit w-full" vertical>
          <Outlet />

          <Footer />
        </Flex>
      </div>
    </Layout>
  );
}

export default PrivateLayout;
