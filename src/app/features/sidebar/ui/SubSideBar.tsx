import { COLOR } from '@/shared/assets/styles/constants';
import { Flex, Typography } from 'antd';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/tailwind';
import { useGetSidebarItems } from '../model';
import { useSidebarStore } from '../store';

const { Text } = Typography;

function SubSideBar() {
  const { isSubBarCollapsed, setSidebarStates } = useSidebarStore();
  const { activeSubKey, mainLabel, subSidebarItems } = useGetSidebarItems();

  if (!subSidebarItems?.length) return null;

  const onToggleSubSidebar = () => {
    setSidebarStates({
      isSubBarCollapsed: !isSubBarCollapsed,
    });
  };

  return (
    <Flex
      className={cn(
        'relative h-full bg-neutral-50 py-4 transition-all duration-300 ease-in-out',
        isSubBarCollapsed ? 'w-0' : 'w-52',
      )}
      gap="1rem"
      vertical
    >
      <Flex
        align="center"
        className={cn('h-9 px-3', isSubBarCollapsed ? 'hidden' : '')}
      >
        <Text className="line-clamp-1 text-xl font-semibold text-primary">
          {mainLabel}
        </Text>
      </Flex>

      <Flex className={cn(isSubBarCollapsed ? 'hidden' : '')} vertical>
        {subSidebarItems.map(item => (
          <Link key={item.key} to={item.path}>
            <Flex
              align="center"
              className={cn(
                'h-12 border-0 border-b border-solid border-neutral-300 pl-4 pr-1 text-neutral-700 transition-colors',
                activeSubKey === item.key
                  ? 'bg-neutral-100'
                  : 'bg-neutral-50 hover:bg-neutral-100',
              )}
              gap="0.5rem"
              justify="space-between"
            >
              <Text className="line-clamp-1 font-semibold text-inherit">
                {item.label}
              </Text>
              {activeSubKey === item.key ? (
                <div
                  className="h-7 w-1 rounded-l-lg bg-neutral-900"
                  role="presentation"
                />
              ) : null}
            </Flex>
          </Link>
        ))}
      </Flex>

      <Flex
        align="center"
        className="absolute right-0 top-7 h-5 w-5 translate-x-1/2 cursor-pointer rounded-full border border-solid border-neutral-300 bg-neutral-600"
        justify="center"
        onClick={onToggleSubSidebar}
        role="presentation"
      >
        {isSubBarCollapsed ? (
          <ArrowRight2 color={COLOR.neutral['300']} size="12" />
        ) : (
          <ArrowLeft2 color={COLOR.neutral['300']} size="12" />
        )}
      </Flex>
    </Flex>
  );
}

export default SubSideBar;
