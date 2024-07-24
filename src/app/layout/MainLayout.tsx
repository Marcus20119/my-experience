import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../features/header';
import { Sidebar } from '../features/sidebar';

function MainLayout() {
  return (
    <Flex className="min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </Flex>
  );
}

export default MainLayout;
