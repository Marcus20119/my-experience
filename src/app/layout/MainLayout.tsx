import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../features/sidebar';

function MainLayout() {
  return (
    <Flex className="min-h-screen">
      <Sidebar />

      <div className="h-[2000px]">
        <Outlet />
      </div>
    </Flex>
  );
}

export default MainLayout;
