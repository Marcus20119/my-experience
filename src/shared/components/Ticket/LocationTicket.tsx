import { COLOR } from '@/shared/assets/styles/constants';
import { ImageTool } from '@/shared/utils';
import { Button, Flex, Image, Tooltip, Typography } from 'antd';
import { Location } from 'iconsax-react';
import { cn } from '@/lib/tailwind';
import { Loading } from '../Loading';
import { Thumbnail } from '../Thumbnail';
import { Value } from '../Value';

const { Text } = Typography;

interface Props {
  address?: null | string;
  amenities?: { icon: string; name: string }[] | null;
  loading?: boolean;
  maxPrice?: null | number;
  minPrice?: null | number;
  name?: null | string;
  numOfAvailableRoom?: null | number;
  onClick?: () => void;
  thumbnail?: null | string;
}

function LocationTicket({
  address,
  amenities,
  maxPrice,
  minPrice,
  name,
  thumbnail,
  onClick,
  loading,
  numOfAvailableRoom,
}: Props) {
  if (loading)
    return (
      <Flex className="w-full rounded-xl border-x-0 border-b-[0.375rem] border-t-0 border-solid border-b-transparent transition-all">
        <Flex
          className="w-full rounded-xl border border-solid border-neutral-300 p-4 transition-all"
          gap="1rem"
          vertical
        >
          <Loading.Skeleton className="rounded-lg" height="10.375rem" />

          <Flex gap="0.5rem" vertical>
            <Loading.Skeleton className="rounded-lg" height="1.5rem" />
            <Flex className="h-8" gap="0.5rem">
              <Location
                className="flex-shrink-0"
                color={COLOR.primary}
                size="16"
                variant="Bold"
              />
              <Loading.Skeleton className="rounded-lg" height="2rem" />
            </Flex>
          </Flex>

          <Flex gap="0.75rem">
            {Array(5)
              ?.fill(null)
              ?.map((_, index) => (
                <Loading.Skeleton
                  className="rounded-md"
                  height="1.75rem"
                  key={index}
                  width="1.75rem"
                />
              ))}
          </Flex>

          <Flex align="center" gap="0.5rem" justify="space-between">
            <Loading.Skeleton className="rounded-lg" height="2rem" />

            <Button
              className="h-8 rounded-lg text-sm font-semibold"
              type="primary"
            >
              ||||View room
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );

  return (
    <Flex
      className={cn(
        'w-full rounded-xl border-x-0 border-b-[0.375rem] border-t-0 border-solid border-b-transparent transition-all',
        onClick
          ? 'cursor-pointer hover:-translate-y-2 hover:border-b-primary hover:shadow-xl'
          : '',
      )}
      onClick={onClick}
    >
      <Flex
        className="w-full rounded-xl border border-solid border-neutral-300 p-4 transition-all"
        gap="1rem"
        vertical
      >
        <Flex className="relative h-[10.375rem]">
          {thumbnail ? (
            <Image
              src={ImageTool.resizeUrl(thumbnail, {
                height: 192,
              })}
              className="rounded-lg object-cover object-center"
              height="100%"
              preview={false}
              width="100%"
            />
          ) : (
            <Thumbnail.Business
              className="h-full w-full rounded-lg"
              mode="horizontal"
            />
          )}

          <Text className="absolute right-2 top-2 rounded-md bg-neutral-50/90 px-2 py-1 text-xs font-semibold">
            {numOfAvailableRoom ?? 0}
          </Text>
        </Flex>

        <Flex gap="0.5rem" vertical>
          <Value.TruncateText
            className="line-clamp-1 text-base font-semibold"
            value={name}
          />
          <Flex className="h-8" gap="0.5rem">
            <Location
              className="flex-shrink-0"
              color={COLOR.primary}
              size="16"
              variant="Bold"
            />
            <Value.TruncateText
              className="line-clamp-2 text-xs"
              value={address}
            />
          </Flex>
        </Flex>

        <Flex gap="0.75rem">
          {amenities?.map(({ icon, name }, index) => (
            <Tooltip
              getPopupContainer={triggerNode =>
                triggerNode.parentElement as HTMLElement
              }
              key={index}
              title={name}
            >
              <Flex
                align="center"
                className="flex h-7 w-7 rounded-md bg-primaryLight"
                justify="center"
              >
                <Image
                  src={ImageTool.resizeUrl(icon, {
                    height: 50,
                  })}
                  className="object-contain object-center"
                  height="1.25rem"
                  preview={false}
                  width="1.25rem"
                />
              </Flex>
            </Tooltip>
          ))}
        </Flex>

        <Flex align="center" gap="0.5rem" justify="space-between">
          <Value.Price
            value={{
              max: maxPrice ?? 0,
              min: minPrice ?? 0,
            }}
            mode="primary"
            unit="months"
          />

          <Button
            className="h-8 rounded-lg text-sm font-semibold"
            type="primary"
          >
            ||||||View room
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LocationTicket;
