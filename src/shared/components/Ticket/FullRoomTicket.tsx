import { COLOR } from '@/shared/assets/styles/constants';
import { ReactComponent as ICFloor } from '@/shared/assets/svgs/ic-floor.svg';
import { ImageTool } from '@/shared/utils';
import { Icon } from '@iconify/react';
import { Divider, Flex, Typography } from 'antd';
import { Maximize3, Profile2User } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { Gallery } from '../Gallery';
import { Value } from '../Value';

const { Text } = Typography;

interface Props {
  amount?: null | number;
  area?: null | number;
  capacity?: null | number;
  floorName?: null | string;
  gallery?: null | string[];
  locationName?: null | string;
  name?: string;
  originalAmount?: null | number;
  roomTypeName?: string;
  unit?: null | string;
}

function FullRoomTicket({
  capacity,
  amount,
  area,
  gallery,
  originalAmount,
  roomTypeName,
  unit,
  locationName,
  name,
  floorName,
}: Props) {
  const { t } = useTranslation();

  const generalInfoItems = [
    {
      icon: <Maximize3 color={COLOR.neutral['700']} size="16" />,
      value: area ? `${area} m²` : undefined,
    },
    {
      icon: <ICFloor />,
      value: floorName,
    },
    {
      icon: <Profile2User color={COLOR.neutral['700']} size="16" />,
      value: capacity,
    },
    {
      icon: (
        <Icon
          color={COLOR.neutral['700']}
          height="16"
          icon="ph:door"
          width="16"
        />
      ),
      value: roomTypeName,
    },
  ];

  const shouldShowOriginalAmount = originalAmount && originalAmount !== amount;

  return (
    <Flex
      className="h-full w-full overflow-hidden rounded-lg shadow-sm"
      vertical
    >
      <Gallery.Carousel
        gallery={gallery?.map(image =>
          ImageTool.resizeUrl(image, {
            width: 728,
          }),
        )}
      />

      <Flex className="rounded-b-lg bg-white p-4" gap="1.25rem" vertical>
        <Value.TruncateText
          className="line-clamp-1 text-xl font-semibold"
          value={`${name}_${locationName}`}
        />
        <Flex align="center" gap="0.5rem">
          {generalInfoItems
            ?.filter(({ value }) => !!value)
            .map(({ icon, value }, index) => (
              <Flex
                align="center"
                className="rounded-md border border-solid border-neutral-200 bg-neutral-100 p-2"
                gap="0.5rem"
                key={index}
              >
                {icon}
                <Text>{value}</Text>
              </Flex>
            ))}
        </Flex>

        <Divider className="m-0" />

        {shouldShowOriginalAmount ? (
          <Flex gap="0.75rem" vertical>
            <Flex align="center" justify="space-between">
              <Text className="text-base font-semibold">
                {t('common.label.discountPrice')}:
              </Text>
              <Value.Price
                mode="error"
                size="large"
                unit={unit}
                value={amount}
              />
            </Flex>

            <Flex align="center" justify="space-between">
              <Text className="text-base font-semibold">
                {t('common.label.originalPrice')}:
              </Text>
              <Value.Price
                mode="line-through"
                size="large"
                unit={unit}
                value={originalAmount}
              />
            </Flex>
          </Flex>
        ) : (
          <Flex align="center" justify="space-between">
            <Text className="text-base font-semibold">
              {t('common.label.price')}:
            </Text>
            <Value.Price mode="error" size="large" unit={unit} value={amount} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default FullRoomTicket;
