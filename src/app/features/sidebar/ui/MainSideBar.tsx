import { COLOR } from '@/shared/assets/styles/constants';
import { ReactComponent as LogoReact } from '@/shared/assets/svgs/logo-react.svg';
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
  const { isMainBarCollapsed, isMainBarLocked, setSidebarStates } =
    useSidebarStore();
  const { activeMainKey, mainSidebarItems } = useGetSidebarItems();

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
      isMainBarCollapsed: true,
      isMainBarLocked: !isMainBarLocked,
    });
  };

  return (
    <Flex
      className={cn(
        'h-full bg-neutral-900 p-4 transition-all duration-300 ease-in-out',
        isMainBarCollapsed ? 'w-sidebarCollapsed' : 'w-sidebarExpanded',
      )}
      gap="1rem"
      onMouseEnter={onExpandMainSidebar}
      onMouseLeave={onCollapseMainSidebar}
      vertical
    >
      <Flex
        align="center"
        className={cn(
          'h-10 transition-all duration-300 ease-in-out',
          isMainBarCollapsed ? 'pl-2' : 'pl-5',
        )}
        gap="0.5rem"
      >
        <LogoReact className="h-8 w-8 flex-shrink-0" />
        {!isMainBarCollapsed ? (
          <Text className="text-secondary line-clamp-1 font-mono text-2xl transition-all">
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
                align="center"
                className={cn(
                  'h-10 rounded-lg transition-all duration-300 ease-in-out',
                  activeMainKey === item.key
                    ? 'text-secondary bg-primary'
                    : 'hover:text-secondary text-neutral-50 hover:bg-primary',
                  isMainBarCollapsed ? 'px-3' : 'px-4',
                )}
                gap="0.5rem"
                onClick={() => {
                  setSidebarStates({
                    isSubBarCollapsed: false,
                  });
                }}
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
          align="center"
          className={cn(
            'text-secondary mt-auto h-10 cursor-pointer rounded-lg text-neutral-50 transition-all duration-300 ease-in-out',
            isMainBarCollapsed ? 'px-3' : 'px-4',
          )}
          gap="0.5rem"
          onClick={onToggleLockMainSidebar}
        >
          {isMainBarLocked ? (
            <ToggleOnCircle className="flex-shrink-0" color={COLOR.secondary} />
          ) : (
            <ToggleOffCircle
              className="flex-shrink-0"
              color={COLOR.secondary}
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
