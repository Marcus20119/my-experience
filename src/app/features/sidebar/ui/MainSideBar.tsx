import { COLOR } from '@/shared/assets/styles/constants';
import { ReactComponent as ICReact } from '@/shared/assets/svgs/ic-react.svg';
import { Flex, Tooltip, Typography } from 'antd';
import { ToggleOffCircle, ToggleOnCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/tailwind';
import { useGetSidebarItems } from '../model';
import { useSidebarStore } from '../store';

const { Text } = Typography;

function MainSideBar() {
  const { t } = useTranslation();
  const { isMainBarCollapsed, setSidebarStates, isMainBarLocked } =
    useSidebarStore();
  const { mainSidebarItems, activeMainKey } = useGetSidebarItems();

  const onExpandMainSidebar = () => {
    if (isMainBarLocked) return;

    setSidebarStates({
      isMainBarCollapsed: false,
    });
  };

  const onCollapseMainSidebar = () => {
    if (isMainBarLocked) return;

    setSidebarStates({
      isMainBarCollapsed: true,
    });
  };

  const onToggleLockMainSidebar = () => {
    setSidebarStates({
      isMainBarLocked: !isMainBarLocked,
      isMainBarCollapsed: true,
    });
  };

  return (
    <Flex
      className={cn(
        'h-full bg-neutral-900 p-4 transition-all duration-300 ease-in-out',
        isMainBarCollapsed ? 'w-20' : 'w-52',
      )}
      gap="1rem"
      onMouseEnter={onExpandMainSidebar}
      onMouseLeave={onCollapseMainSidebar}
      vertical
    >
      <Flex
        className={cn(
          'h-10 transition-all duration-300 ease-in-out',
          isMainBarCollapsed ? 'pl-2' : 'pl-5',
        )}
        align="center"
        gap="0.5rem"
      >
        <ICReact className="h-8 w-8 flex-shrink-0" />
        {!isMainBarCollapsed ? (
          <Text className="line-clamp-1 font-mono text-2xl text-primaryText transition-all">
            ReactJS
          </Text>
        ) : null}
      </Flex>

      <Flex gap="0.5rem" vertical>
        {mainSidebarItems.map(item => (
          <Link key={item.key} to={item.path}>
            <Tooltip
              align={{ offset: [24, 0] }}
              placement="right"
              title={isMainBarLocked ? item.label : undefined}
            >
              <Flex
                className={cn(
                  'h-10 rounded-lg transition-all duration-300 ease-in-out',
                  activeMainKey === item.key
                    ? 'bg-primary text-primaryText'
                    : 'text-neutral-50 hover:bg-primary hover:text-primaryText',
                  isMainBarCollapsed ? 'px-3' : 'px-4',
                )}
                onClick={() => {
                  setSidebarStates({
                    isSubBarCollapsed: false,
                  });
                }}
                align="center"
                gap="0.5rem"
              >
                <div className="flex-shrink-0" role="presentation">
                  {item.icon}
                </div>
                {!isMainBarCollapsed ? (
                  <Text className="line-clamp-1 font-semibold text-inherit">
                    {item.label}
                  </Text>
                ) : null}
              </Flex>
            </Tooltip>
          </Link>
        ))}
      </Flex>

      <Tooltip
        align={{ offset: [24, 0] }}
        mouseEnterDelay={0.3} // Prevents the tooltip from flickering
        placement="right"
        title={isMainBarLocked ? t('layout.lockSidebar.unlock') : undefined}
      >
        <Flex
          className={cn(
            'mt-auto h-10 cursor-pointer rounded-lg text-neutral-50 text-primaryText transition-all duration-300 ease-in-out',
            isMainBarCollapsed ? 'px-3' : 'px-4',
          )}
          align="center"
          gap="0.5rem"
          onClick={onToggleLockMainSidebar}
        >
          {isMainBarLocked ? (
            <ToggleOnCircle
              className="flex-shrink-0"
              color={COLOR.primaryText}
            />
          ) : (
            <ToggleOffCircle
              className="flex-shrink-0"
              color={COLOR.primaryText}
            />
          )}

          {!isMainBarCollapsed ? (
            <Text className="line-clamp-1 font-semibold text-inherit">
              {isMainBarLocked
                ? t('layout.lockSidebar.unlock')
                : t('layout.lockSidebar.lock')}
            </Text>
          ) : null}
        </Flex>
      </Tooltip>
    </Flex>
  );
}

export default MainSideBar;
