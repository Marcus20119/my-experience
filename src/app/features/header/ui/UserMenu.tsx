import type { MenuItemType } from 'antd/es/menu/interface';
import { Dropdown, Flex, Image } from 'antd';
import { DirectNormal, Medal, User } from 'iconsax-react';

function UserMenu() {
  const menuItems: MenuItemType[] = [
    {
      icon: <User size="20" />,
      key: 'aboutMe',
      label: 'About me',
    },
    {
      icon: <Medal size="20" />,
      key: 'certificate',
      label: 'My certificates',
    },
    {
      icon: <DirectNormal size="20" />,
      key: 'project',
      label: 'My projects',
    },
  ];

  return (
    <Dropdown
      getPopupContainer={triggerNode =>
        triggerNode.parentElement as HTMLElement
      }
      menu={{
        items: menuItems,
      }}
      overlayStyle={{
        width: '12rem',
      }}
    >
      {/* Wrap by Flex to prevent Warning: findDOMNode is deprecated in StrictMode */}
      <Flex>
        <Image
          className="rounded-full object-cover"
          height="2.25rem"
          preview={false}
          src="/src/shared/assets/images/avatar.jpg"
          width="2.25rem"
        />
      </Flex>
    </Dropdown>
  );
}

export default UserMenu;
