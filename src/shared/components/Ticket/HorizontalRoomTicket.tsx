import { COLOR } from '@/shared/assets/styles/constants';
import { ReactComponent as ICFloor } from '@/shared/assets/svgs/ic-floor.svg';
import { DateTimeTool, ImageTool } from '@/shared/utils';
import { Flex, Image, Tooltip, Typography } from 'antd';
import { Profile2User } from 'iconsax-react';
import { useState } from 'react';
import { cn } from '@/lib/tailwind';
import { Thumbnail } from '../Thumbnail';
import { Value } from '../Value';

const { Text } = Typography;

interface Props {
  active?: boolean;
  availableFrom?: null | string;
  capacity?: null | number;
  floorName?: string;
  name?: string;
  onClick?: () => void;
  price?: {
    amount?: null | number;
    currency?: string;
    unit?: string;
  };
  thumbnail?: null | string;
}

function HorizontalRoomTicket({
  active,
  capacity,
  name,
  price,
  thumbnail,
  onClick,
  availableFrom,
  floorName,
}: Props) {
  const [isThumbnailError, setIsThumbnailError] = useState<boolean>(false);

  return (
    <Flex
      className={cn(
        'h-36 w-full rounded-lg border border-solid p-3 shadow-sm transition-all',
        onClick ? 'cursor-pointer hover:shadow-md' : 'cursor-default',
        active
          ? 'border-primary hover:shadow-sm'
          : 'border-neutral-300 bg-white',
      )}
      align="stretch"
      gap="0.75rem"
      onClick={onClick}
    >
      {thumbnail && !isThumbnailError ? (
        <Flex className="aspect-square h-full flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={ImageTool.resizeUrl(thumbnail, {
              height: 192,
            })}
            className="object-cover"
            height="100%"
            onError={() => setIsThumbnailError(true)}
            preview={false}
            width="100%"
          />
        </Flex>
      ) : (
        <Thumbnail.Business
          className="aspect-square h-full flex-shrink-0 rounded-md"
          mode="horizontal"
        />
      )}

      <Flex className="flex-1" gap="0.5rem" vertical>
        <Tooltip title={name && name.length > 30 ? name : ''}>
          <Value.TruncateText
            className="line-clamp-1 text-base font-bold"
            value={name}
          />
        </Tooltip>

        <Flex align="center" gap="1rem">
          <Flex align="center" gap="0.5rem">
            <Profile2User color={COLOR.neutral['700']} size="20" />
            <Text>{capacity}</Text>
          </Flex>

          {floorName ? (
            <Flex align="center" gap="0.5rem">
              <ICFloor />
              <Text>{floorName}</Text>
            </Flex>
          ) : null}
        </Flex>

        {availableFrom ? (
          <Flex gap="0.25rem">
            <Text className="text-xs text-system-information">
              |||||availableFrom
            </Text>
            <Text className="text-xs text-system-information">∙</Text>
            <Text className="text-xs text-system-information">
              {DateTimeTool.formatDate(availableFrom)}
            </Text>
          </Flex>
        ) : null}

        <Flex
          className={cn(
            'mt-auto w-full py-1',
            active ? 'rounded-md bg-primaryLight px-2' : '',
          )}
        >
          <Value.Price
            mode="primary"
            unit={price?.unit}
            value={price?.amount}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HorizontalRoomTicket;
