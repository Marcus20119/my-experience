import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../features/header';
import { Sidebar, useSidebarStore } from '../features/sidebar';

function MainLayout() {
  const { getSidebarWidth } = useSidebarStore();
  const sideBarWidth = getSidebarWidth();

  return (
    <Flex className="min-h-screen">
      <Sidebar />

      <Flex
        className="transition-all duration-300"
        style={{
          width: `calc(100% - ${sideBarWidth}px)`,
        }}
        vertical
      >
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default MainLayout;
