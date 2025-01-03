import { useCanvaEditorContext } from '@/app/features/feature/canva-editor/context';
import { cn } from '@/lib/tailwind';
import { Button, Space, Tooltip } from 'antd';
import { BackwardItem, ForwardItem, Trash } from 'iconsax-react';
import { useMemo } from 'react';

const { Compact } = Space;

interface Props {
  zIndex: number;
}

function CanvaItemActions({ zIndex }: Props) {
  const {
    isEditing,
    items,
    onBringToFront,
    onRemoveProduct,
    onSendToBack,
    selectedItem,
    setSelectedItem,
    stageSize,
  } = useCanvaEditorContext();

  // change top position of actions based on rotation
  const top = useMemo(() => {
    if (!selectedItem) {
      return 0;
    }

    const { height, rotation, width, x, y } = selectedItem;

    const alpha = rotation * (Math.PI / 180);
    // the degree when diagonal line is vertical
    const beta = Math.atan(width / height);
    const diagonalLength = Math.sqrt(height ** 2 + width ** 2);

    const a = {
      x: x - (Math.sin(beta - alpha) * diagonalLength) / 2,
      y: y - (Math.cos(beta - alpha) * diagonalLength) / 2,
    };

    const b = {
      x: x + (Math.sin(beta + alpha) * diagonalLength) / 2,
      y: y - (Math.cos(beta + alpha) * diagonalLength) / 2,
    };

    const c = {
      x: x + (Math.sin(beta - alpha) * diagonalLength) / 2,
      y: y + (Math.cos(beta - alpha) * diagonalLength) / 2,
    };

    const d = {
      x: x - (Math.sin(beta + alpha) * diagonalLength) / 2,
      y: y + (Math.cos(beta + alpha) * diagonalLength) / 2,
    };

    const maxY = Math.max(a.y, b.y, c.y, d.y);

    if (Math.abs(rotation) > 150) {
      return maxY + (48 / stageSize.height) * 100; // 48 is the height of the rotate stick
    }

    return maxY;
  }, [selectedItem, stageSize.height]);

  const actions = useMemo(() => {
    if (!selectedItem) {
      return [];
    }

    return [
      {
        disabled: !items?.some(item => item.zIndex > selectedItem?.zIndex),
        icon: <ForwardItem size="20" variant="Bulk" />,
        label: 'Bring to front',
        onClick: () => {
          onBringToFront(selectedItem.id);
          setSelectedItem({ ...selectedItem, zIndex: selectedItem.zIndex + 1 });
        },
      },
      {
        disabled: selectedItem?.zIndex === 0,
        icon: <BackwardItem size="20" variant="Bulk" />,
        label: 'Send to back',
        onClick: () => {
          onSendToBack(selectedItem.id);
          setSelectedItem({ ...selectedItem, zIndex: selectedItem.zIndex - 1 });
        },
      },
      {
        disabled: false,
        icon: <Trash size="20" variant="Bulk" />,
        label: 'Remove',
        onClick: () => {
          onRemoveProduct(selectedItem.id);
          setSelectedItem(null);
        },
      },
    ];
  }, [
    items,
    onBringToFront,
    onRemoveProduct,
    onSendToBack,
    selectedItem,
    setSelectedItem,
  ]);

  // if no item is selected or the item is being edited, don't show actions
  if (!selectedItem || isEditing) {
    return null;
  }

  return (
    <Compact
      block
      className="absolute w-fit -translate-x-1/2 translate-y-1/2"
      style={{
        left: `${selectedItem.x}%`,
        top: `${top}%`,
        zIndex,
      }}
    >
      {actions.map(action => (
        <Tooltip key={action.label} placement="bottom" title={action.label}>
          <Button
            className={cn(
              action.disabled ? 'border-neutral-100 bg-neutral-100' : '',
            )}
            disabled={action.disabled}
            icon={action.icon}
            onClick={action.onClick}
          />
        </Tooltip>
      ))}
    </Compact>
  );
}

export default CanvaItemActions;
