import type { BreadCrumbItem } from '@/shared/types';
import type { BreadcrumbProps } from 'antd';
import { COLOR } from '@/shared/assets/styles/constants';
import { MAX_WIDTH_LAYOUT } from '@/shared/constants';
import { useResponsive } from '@/shared/hooks';
import { Breadcrumb, Flex, Typography } from 'antd';
import { ArrowRight2 } from 'iconsax-react';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

interface Props {
  breadCrumb?: BreadCrumbItem[];
  children: React.ReactNode;
}

function ContentLayout({ children, breadCrumb }: Props) {
  const { isDesktop } = useResponsive();

  const formattedBreadCrumb: BreadcrumbProps['items'] = breadCrumb?.map(
    ({ title, onClick }) => ({
      title: (
        <Text
          className={cn(
            'text-base font-medium',
            onClick
              ? 'cursor-pointer text-neutral-500 hover:text-primary'
              : 'cursor-default',
          )}
        >
          {title}
        </Text>
      ),
      onClick,
    }),
  );

  return (
    <Flex
      className={cn('w-full', isDesktop ? 'px-8' : 'px-4')}
      justify="center"
    >
      <Flex
        style={{
          maxWidth: MAX_WIDTH_LAYOUT,
        }}
        className="w-full py-5"
        gap="2rem"
        vertical
      >
        {breadCrumb ? (
          <Breadcrumb
            separator={
              <ArrowRight2
                className="translate-y-0.5"
                color={COLOR.neutral['500']}
                size="16"
              />
            }
            items={formattedBreadCrumb}
          />
        ) : null}
        {children}
      </Flex>
    </Flex>
  );
}

export default ContentLayout;
