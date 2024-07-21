import { NavBar } from '@/app/features/navbar';
import { MAX_WIDTH_LAYOUT } from '@/shared/constants';
import { useResponsive } from '@/shared/hooks';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { Flex, Image, Layout } from 'antd';
import { cn } from '@/lib/tailwind';

const { Header: AntHeader } = Layout;

function Header() {
  const { businessLogo } = useBusinessStore();
  const { isDesktop } = useResponsive();

  return (
    <AntHeader
      className={cn(
        'sticky left-0 top-0 z-10 bg-white',
        isDesktop ? 'h-[6.25rem] px-8' : 'h-[4.25rem] px-4',
      )}
    >
      <Flex align="center" className="h-full" justify="center">
        <Flex
          style={{
            maxWidth: MAX_WIDTH_LAYOUT,
          }}
          align="center"
          className="h-full w-full"
          justify="space-between"
        >
          <Image
            className="flex-shrink-0 cursor-pointer"
            height="3.25rem"
            preview={false}
            src={businessLogo}
          />

          {isDesktop ? <NavBar.Desktop /> : <NavBar.Mobile />}
        </Flex>
      </Flex>

      <div className="absolute left-0 h-[1px] w-full bg-gray-100 shadow-sm" />
    </AntHeader>
  );
}

export default Header;
