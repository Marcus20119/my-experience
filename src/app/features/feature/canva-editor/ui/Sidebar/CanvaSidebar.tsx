import {
  CANVA_COLOR,
  CANVA_SIZE,
} from '@/app/features/feature/canva-editor/model';
import { COLOR } from '@/shared/assets/styles/constants';
import { ConfigProvider, Flex, Typography } from 'antd';
import { Gallery, Shapes1, Text as TextIC } from 'iconsax-react';
import { useState } from 'react';
import { cn } from '@/lib/tailwind';
import ImageSection from './ImageSection';

const { Text } = Typography;

enum CanvaActionTabKey {
  Image = 'image',
  Shape = 'shape',
  Text = 'text',
}

interface CanvaActionTab {
  children: React.ReactNode;
  color: string;
  icon: React.ReactNode;
  key: CanvaActionTabKey;
  label: string;
}

function CanvaSidebar() {
  const [activeTabKey, setActiveTabKey] = useState<CanvaActionTabKey>(
    CanvaActionTabKey.Image,
  );

  const tabs: CanvaActionTab[] = [
    {
      children: <ImageSection />,
      color: CANVA_COLOR.image,
      icon: <Gallery size="28" variant="Bulk" />,
      key: CanvaActionTabKey.Image,
      label: 'Image',
    },
    {
      children: <div>Text</div>,
      color: CANVA_COLOR.text,
      icon: <TextIC size="28" variant="Bulk" />,
      key: CanvaActionTabKey.Text,
      label: 'Text',
    },
    {
      children: <div>Shape</div>,
      color: CANVA_COLOR.shape,
      icon: <Shapes1 size="28" variant="Bulk" />,
      key: CanvaActionTabKey.Shape,
      label: 'Shape',
    },
  ];

  const activeTab = tabs.find(tab => tab.key === activeTabKey);

  return (
    <Flex className="h-full w-full">
      <Flex
        style={{
          width: CANVA_SIZE.actionBarWidth,
        }}
        vertical
      >
        {tabs.map(tab => {
          const isActive = tab.key === activeTabKey;
          return (
            <Flex
              align="center"
              className={cn(
                'cursor-pointer rounded-l-lg py-2 pl-3 transition-all duration-300 ease-in-out',
                isActive ? '' : '',
              )}
              gap="0.125rem"
              key={tab.key}
              onClick={() => {
                setActiveTabKey(tab.key);
              }}
              vertical
            >
              <div
                className={cn(
                  'rounded-lg p-0.5',
                  isActive ? 'shadow-card-lg' : '',
                )}
                style={{
                  color: isActive ? tab.color : COLOR.neutral['400'],
                }}
              >
                {tab.icon}
              </div>
              <Text className="text-xs">{tab.label}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        className="h-full flex-1"
        style={{
          paddingBottom: CANVA_SIZE.sidebarSectionSpace,
          paddingTop: CANVA_SIZE.sidebarSectionSpace,
        }}
        vertical
      >
        <ConfigProvider
          theme={{
            components: {
              ['Button']: {
                colorTextBase: COLOR.neutral['0'],
                colorTextLightSolid: COLOR.neutral['0'],
                primaryColor: COLOR.neutral['0'],
              },
            },
            token: {
              colorPrimary: CANVA_COLOR.image,
            },
          }}
        >
          {activeTab?.children}
        </ConfigProvider>
      </Flex>
    </Flex>
  );
}

export default CanvaSidebar;
