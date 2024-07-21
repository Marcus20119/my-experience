import type { FlexProps } from 'antd/lib';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { Flex, Image } from 'antd';
import { cn } from '@/lib/tailwind';

interface Props extends Pick<FlexProps, 'className' | 'style'> {
  mode: 'center' | 'horizontal';
}

function BusinessThumbnail({ mode, className, ...props }: Props) {
  const { businessLogo } = useBusinessStore();

  if (mode === 'horizontal') {
    return (
      <Flex align="center" className={cn('bg-primary', className)} {...props}>
        {businessLogo ? (
          <Flex
            align="center"
            className="h-1/2 w-full bg-white p-[5%]"
            justify="center"
          >
            <Image
              className="object-contain object-center"
              height="100%"
              preview={false}
              src={businessLogo}
            />
          </Flex>
        ) : null}
      </Flex>
    );
  }

  return (
    <Flex
      align="center"
      className={cn('w-full bg-primary', className)}
      justify="center"
      {...props}
    >
      <Flex
        align="center"
        className="h-1/2 w-1/2 rounded-xl bg-white p-[5%]"
        justify="center"
      >
        <Image
          className="object-contain object-center"
          height="100%"
          preview={false}
          src={businessLogo}
        />
      </Flex>
    </Flex>
  );
}

export default BusinessThumbnail;
