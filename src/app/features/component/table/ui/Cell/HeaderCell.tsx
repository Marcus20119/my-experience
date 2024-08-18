import type { HeaderCellProps } from '@/app/features/component/table';
import { Typography } from 'antd';
import { Resizable } from 'react-resizable';

const { Text } = Typography;

function HeaderCell({
  children,
  onResetSize,
  onResize,
  width,
  ...restProps
}: HeaderCellProps) {
  if (!width) {
    return (
      <th {...restProps}>
        <Text className="line-clamp-1">{children}</Text>
      </th>
    );
  }

  return (
    <Resizable
      draggableOpts={{ enableUserSelectHack: false }}
      handle={
        <button
          className="z-tableResizableHandle absolute -right-1.5 bottom-0 grid h-full w-3 cursor-col-resize place-content-center"
          onClick={e => {
            e.stopPropagation();
          }}
          onDoubleClick={onResetSize}
          type="button"
        />
      }
      height={0}
      onResize={onResize}
      width={width}
    >
      <th {...restProps}>
        <Text className="line-clamp-1">{children}</Text>
      </th>
    </Resizable>
  );
}

export default HeaderCell;
