import type { BreadcrumbProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { useAppNavigate } from '@/shared/hooks';
import { Breadcrumb, Dropdown, Flex, Tabs, Typography } from 'antd';
import { ArrowDown2, ArrowRight2, ArrowUp2 } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/tailwind';
import type { BreadCrumbItem, HeaderTabItem } from '../features/header';
import { useHeaderStore } from '../features/header';

const { Text, Title } = Typography;

interface Props {
  breadCrumb?: BreadCrumbItem[];
  children: React.ReactNode;
  tabs?: HeaderTabItem[];
  title: string;
}

function ContentLayout({ breadCrumb, children, tabs, title }: Props) {
  const { navigate } = useAppNavigate();
  const { pathname } = useLocation();
  const { isContentHeaderCollapsed, setHeaderStates } = useHeaderStore();

  const formattedBreadCrumb: BreadcrumbProps['items'] = breadCrumb?.map(
    ({ onClick, route, title }) => ({
      onClick: () => {
        onClick?.();
        route && navigate(route);
      },
      title: (
        <Text
          className={cn(
            'font-medium',
            onClick || route
              ? 'cursor-pointer text-neutral-500 hover:text-primary'
              : 'cursor-default',
          )}
        >
          {title}
        </Text>
      ),
    }),
  );

  return (
    <Flex className="flex-1" vertical>
      <div className="sticky left-0 top-[3.5rem] z-headerContent">
        <Flex
          align="top"
          className={cn(
            'box-border overflow-hidden border-neutral-200 bg-neutral-0 px-4 transition-all duration-300',
            isContentHeaderCollapsed
              ? 'h-0 max-h-0 overflow-hidden'
              : 'h-headerContent max-h-20 border-0 border-b border-solid',
          )}
        >
          <Flex
            className="w-full py-3"
            gap="0.375rem"
            justify="space-between"
            vertical
          >
            {breadCrumb ? (
              <Breadcrumb
                items={formattedBreadCrumb}
                separator={
                  <ArrowRight2
                    className="translate-y-0.5"
                    color={COLOR.neutral['500']}
                    size="16"
                  />
                }
              />
            ) : null}
            <Title>{title}</Title>
          </Flex>

          <Flex align="end" className="h-full">
            {tabs?.length ? (
              <Tabs
                className="[&_.ant-tabs-nav]:m-0"
                defaultActiveKey={pathname}
                items={tabs.map(tab => ({
                  key: tab.route.path,
                  label: (
                    <Dropdown
                      menu={{
                        items: tab.menuItems,
                      }}
                      open={pathname === tab.route.path ? undefined : false}
                      placement="bottom"
                      trigger={['hover']}
                    >
                      <Flex align="center" gap="0.5rem">
                        <Text className="whitespace-nowrap">{tab.label}</Text>
                        {pathname === tab.route.path ? (
                          <ArrowDown2 size="16" />
                        ) : null}
                      </Flex>
                    </Dropdown>
                  ),
                }))}
                onChange={key =>
                  navigate({
                    path: key as RouterPath,
                  })
                }
                size="small"
                type="card"
              />
            ) : null}
          </Flex>
        </Flex>

        <Flex
          align="center"
          className={cn(
            'absolute right-0 top-0 h-6 w-7 cursor-pointer rounded-b-md bg-neutral-100 transition-all duration-300 hover:bg-neutral-50',
            isContentHeaderCollapsed ? 'shadow-md' : 'shadow-none',
          )}
          justify="center"
          onClick={() =>
            setHeaderStates({
              isContentHeaderCollapsed: !isContentHeaderCollapsed,
            })
          }
        >
          {isContentHeaderCollapsed ? (
            <ArrowDown2 size="20" />
          ) : (
            <ArrowUp2 size="20" />
          )}
        </Flex>
      </div>
      <div className="flex-1 overflow-hidden p-contentPadding">{children}</div>
    </Flex>
  );
}

export default ContentLayout;
