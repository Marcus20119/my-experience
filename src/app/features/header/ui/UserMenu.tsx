import type { MenuItemType } from 'antd/es/menu/interface';
import { Dropdown, Image } from 'antd';
import { DirectNormal, Medal, User } from 'iconsax-react';

function UserMenu() {
  const menuItems: MenuItemType[] = [
    {
      key: 'aboutMe',
      label: 'About me',
      icon: <User size="20" />,
    },
    {
      key: 'certificate',
      label: 'My certificates',
      icon: <Medal size="20" />,
    },
    {
      key: 'project',
      label: 'My projects',
      icon: <DirectNormal size="20" />,
    },
  ];

  return (
    <Dropdown
      menu={{
        items: menuItems,
      }}
      overlayStyle={{
        width: '12rem',
      }}
    >
      <Image
        className="rounded-full object-cover"
        height="2.25rem"
        preview={false}
        src="/src/shared/assets/images/avatar.jpg"
        width="2.25rem"
      />
    </Dropdown>
  );
}

export default UserMenu;
