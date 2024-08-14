import type { BreadCrumbItem } from '@/shared/types';
import type { BreadcrumbProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { useAppNavigate } from '@/shared/hooks';
import { useLocalStore } from '@/shared/stores';
import { Breadcrumb, Flex, Typography } from 'antd';
import { ArrowDown2, ArrowRight2, ArrowUp2 } from 'iconsax-react';
import { cn } from '@/lib/tailwind';

const { Text, Title } = Typography;

interface Props {
  breadCrumb?: BreadCrumbItem[];
  children: React.ReactNode;
  title: string;
}

function ContentLayout({ breadCrumb, children, title }: Props) {
  const { navigate } = useAppNavigate();
  const { hideContentHeader, setLocalStates } = useLocalStore();

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
    <Flex vertical>
      <div className="z-header-content sticky left-0 top-[3.5rem]">
        <Flex
          align="top"
          className={cn(
            'box-border overflow-hidden border-neutral-200 bg-neutral-0 px-4 transition-all duration-300',
            hideContentHeader
              ? 'h-0 max-h-0 overflow-hidden'
              : 'h-20 max-h-20 border-0 border-b border-solid',
          )}
        >
          <Flex className="py-3" gap="0.375rem" vertical>
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
        </Flex>

        <Flex
          align="center"
          className="absolute bottom-0 right-0 h-6 w-7 cursor-pointer rounded-t-md bg-neutral-100 hover:bg-neutral-50"
          justify="center"
          onClick={() => setLocalStates({ hideContentHeader: true })}
        >
          <ArrowUp2 size="20" />
        </Flex>

        <Flex
          align="center"
          className={cn(
            'absolute right-0 top-0 h-6 w-7 cursor-pointer rounded-b-md bg-neutral-100 transition-all duration-300 hover:bg-neutral-50',
            hideContentHeader ? 'opacity-100' : 'opacity-0',
          )}
          justify="center"
          onClick={() => setLocalStates({ hideContentHeader: false })}
        >
          <ArrowDown2 size="20" />
        </Flex>
      </div>
      <Flex className="h-[2000px] p-4">{children}</Flex>
    </Flex>
  );
}

export default ContentLayout;
