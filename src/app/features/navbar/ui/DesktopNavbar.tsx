import { COLOR } from '@/shared/assets/styles/constants';
import { Dropdown, Flex, Typography } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/tailwind';
import { useGetNavItems } from '../model';

const { Text } = Typography;

function DesktopNavbar() {
  const navItems = useGetNavItems();
  const { pathname } = useLocation();

  const [, , key] = pathname.split('/');

  return (
    <>
      <Flex align="center" className="h-[3rem]" gap="2rem">
        {navItems.map(navItem => (
          <Dropdown
            menu={{
              items: navItem?.children ?? [],
            }}
            overlayStyle={{
              width: '11.75rem', // 188px
            }}
            key={navItem?.key}
            trigger={['hover']}
          >
            <Flex
              className={cn(
                'group relative mb-0 h-full cursor-pointer gap-2',
                navItem.onClick
                  ? 'cursor-pointer hover:opacity-80'
                  : 'cursor-default',
              )}
              align="center"
              onClick={navItem.onClick}
            >
              <Text className="line-clamp-1 text-lg font-semibold leading-6">
                {navItem.label}
              </Text>

              {navItem?.children?.length ? (
                <ArrowDown2 color={COLOR.neutral['800']} size="16" />
              ) : null}

              <div
                className={cn(
                  'absolute bottom-0 left-3 right-3 h-0.5 rounded-md bg-primary opacity-0 transition-all duration-300 ease-in',
                  navItem.key === key
                    ? 'max-w-full opacity-100'
                    : 'max-w-0 group-hover:max-w-full group-hover:opacity-100',
                )}
              />
            </Flex>
          </Dropdown>
        ))}
      </Flex>
    </>
  );
}

export default DesktopNavbar;
