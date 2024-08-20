import type { HeaderCellProps } from '@/app/features/component/table';
import { Typography } from 'antd';
import { useState } from 'react';
import { Resizable } from 'react-resizable';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

function HeaderCell({
  children,
  onResetSize,
  onResize,
  width,
  ...restProps
}: HeaderCellProps) {
  const [isResizing, setIsResizing] = useState(false);

  if (!width) {
    return (
      <th {...restProps}>
        <Text className="line-clamp-1 [&_.ant-table-column-title]:line-clamp-1">
          {children}
        </Text>
      </th>
    );
  }

  return (
    <Resizable
      draggableOpts={{ enableUserSelectHack: false }}
      handle={
        <button
          className="resize-handle absolute -right-1.5 bottom-0 z-tableResizableHandle grid h-full w-3 cursor-col-resize place-content-center"
          onClick={e => {
            e.stopPropagation();
          }}
          onDoubleClick={onResetSize}
          type="button"
        />
      }
      height={0}
      onResize={onResize}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
      width={width}
    >
      <th
        {...restProps}
        className={cn(restProps.className, isResizing ? 'resizing' : '')}
      >
        <Text className="line-clamp-1 [&_.ant-table-column-title]:line-clamp-1">
          {children}
        </Text>
      </th>
    </Resizable>
  );
}

export default HeaderCell;
