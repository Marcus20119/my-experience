import type { FileType } from '@/shared/types';
import { COLOR } from '@/shared/assets/styles/constants';
import { Icon } from '@iconify/react';
import { Button, Flex, Typography } from 'antd';
import { Trash } from 'iconsax-react';
import { cn } from '@/lib/tailwind';
import FileIcon from './FileIcon';

const { Text } = Typography;

export interface UploadedFileProps {
  id: string;
  isBlob?: boolean;
  loading: boolean;
  name: string;
  size?: number;
  type?: FileType;
  url?: string;
}

interface Props {
  file: UploadedFileProps;
  onRemove?: (id: string) => void;
}

function UploadedFile({
  file: { id, loading, name, type, url },
  onRemove,
}: Props) {
  return (
    <Flex
      align="center"
      className="h-[4.125rem] rounded-md border border-solid border-neutral-200 pl-2 pr-3"
      gap="0.5rem"
      justify="space-between"
    >
      <Flex align="center" gap="0.5rem">
        <FileIcon fileType={type} src={url} />
        <a
          className={cn(
            'flex-1 text-neutral-700',
            url ? 'cursor-pointer hover:underline' : 'cursor-default',
          )}
          href={url}
          onClick={e => {
            if (!url) {
              e.preventDefault();
            }
          }}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text className="line-clamp-2">{name}</Text>
        </a>
      </Flex>

      <Flex align="center" className="h-8 w-8" justify="center">
        {loading ? (
          <Icon
            color={COLOR.neutral['500']}
            height={24}
            icon="line-md:loading-loop"
            width={24}
          />
        ) : (
          <Button
            icon={<Trash size="18" />}
            onClick={() => onRemove?.(id)}
            size="small"
          />
        )}
      </Flex>
    </Flex>
  );
}

export default UploadedFile;
