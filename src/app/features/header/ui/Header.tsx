import { Flex, Input } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import UserMenu from './UserMenu';

function Header() {
  const { t } = useTranslation();

  return (
    <Flex
      align="center"
      className="z-header-main sticky right-0 top-0 h-14 w-full border-0 border-b border-solid border-neutral-200 bg-neutral-0 px-6"
      justify="space-between"
    >
      <Input
        className="max-w-52 flex-1"
        placeholder={t('common.placeholder.quickSearch')}
        prefix={<SearchNormal1 size="16" />}
        size="small"
      />
      <UserMenu />
    </Flex>
  );
}

export default Header;
