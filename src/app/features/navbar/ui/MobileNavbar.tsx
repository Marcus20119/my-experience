import { useToggle } from '@/shared/hooks';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { Icon } from '@iconify/react/dist/iconify.cjs';
import { Drawer, Flex, Image, Menu } from 'antd';
import { HambergerMenu } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import { useGetNavItems } from '../model';
import { StyledMenu } from './styles';

function MobileNavbar() {
  const { open, onClose, onToggle } = useToggle();
  const { businessLogo } = useBusinessStore();
  const navItems = useGetNavItems();
  const { pathname } = useLocation();

  const [, , key] = pathname.split('/');

  return (
    <>
      {navItems?.length ? (
        <Flex
          align="center"
          className="h-8 w-8 cursor-pointer"
          justify="center"
          onClick={onToggle}
        >
          <HambergerMenu size="26" />
        </Flex>
      ) : null}

      <Drawer
        styles={{
          header: {
            padding: '0px',
            height: '4.5rem',
            flex: 'unset',
          },
          body: {
            padding: '0px',
          },
        }}
        title={
          <Flex align="center" className="px-4" justify="space-between">
            <Image
              className="flex-shrink-0"
              height="3.25rem"
              preview={false}
              src={businessLogo}
            />

            <Icon
              className="cursor-pointer"
              height="26"
              icon="mingcute:close-line"
              onClick={onClose}
              width="26"
            />
          </Flex>
        }
        closeIcon={null}
        onClose={onClose}
        open={open}
        placement="right"
        rootClassName="navbar-drawer"
        width="100%"
      >
        <Flex className="mt-2" gap="0.75rem" vertical>
          <StyledMenu>
            <Menu defaultSelectedKeys={[key]} items={navItems} mode="inline" />
          </StyledMenu>
        </Flex>
      </Drawer>
    </>
  );
}

export default MobileNavbar;
