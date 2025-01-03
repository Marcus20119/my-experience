import type Konva from 'konva';
import type { RefObject } from 'react';
import { createContext, useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type {
  AddCanvaItemEntityInput,
  CanvaItemEntity,
  CanvaSize,
} from '../model';
import { useGetContainerSize, useInitialCanvaEvents } from '../lib';
import { A4_SIZE, CANVA_SIZE } from '../model';

export interface CanvaEditorContextProps {
  asset?: {
    image: {
      loading?: boolean;
      urls: string[];
    };
  };
  height: number;
  initialItems?: CanvaItemEntity[];
  width: number;
}

interface CanvaEditorInternalContextProps {
  isEditing: boolean;
  items: CanvaItemEntity[];
  onAddItem: (item: AddCanvaItemEntityInput) => void;
  onBringToFront: (id: string) => void;
  onRemoveProduct: (id: string) => void;
  onSendToBack: (id: string) => void;
  onUpdateItem: (updatedItem: CanvaItemEntity) => void;
  selectedItem: CanvaItemEntity | null;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<CanvaItemEntity | null>>;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
  stageRef: null | RefObject<Konva.Stage>;
  stageSize: CanvaSize;
  workspaceRef: null | RefObject<HTMLDivElement>;
  workspaceSize: CanvaSize;
  zoomLevel: number;
}

const CanvaEditorContext = createContext<
  CanvaEditorContextProps & CanvaEditorInternalContextProps
>({
  height: 0,
  isEditing: false,
  items: [],
  onAddItem: () => 0,
  onBringToFront: () => 0,
  onRemoveProduct: () => 0,
  onSendToBack: () => 0,
  onUpdateItem: () => 0,
  selectedItem: null,
  setIsEditing: () => 0,
  setSelectedItem: () => 0,
  setZoomLevel: () => 0,
  stageRef: null,
  stageSize: { height: 0, width: 0 },
  width: 0,
  workspaceRef: null,
  workspaceSize: { height: 0, width: 0 },
  zoomLevel: 1,
});

interface ProviderProps extends CanvaEditorContextProps {
  children: React.ReactNode;
}

export function CanvaEditorProvider({
  children,
  initialItems = [],
  ...props
}: ProviderProps) {
  const stageRef = useRef<Konva.Stage>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const [zoomLevel, setZoomLevel] = useState(1);
  const [items, setItems] = useState<CanvaItemEntity[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<CanvaItemEntity | null>(
    null,
  );
  const [isEditing, setIsEditing] = useState(false);
  console.log('items:', items);

  const workspaceSize = {
    height: props.height - CANVA_SIZE.footerHeight,
    width: props.width - CANVA_SIZE.sidebarWidth - 1, // 1 is the border width
  };

  const originalStageSize = useGetContainerSize({
    frameSize: workspaceSize,
    imageSize: A4_SIZE,
  });

  const stageSize = {
    height: originalStageSize.height * zoomLevel,
    width: originalStageSize.width * zoomLevel,
  };

  const onAddItem = (item: AddCanvaItemEntityInput) => {
    const newItem: CanvaItemEntity = {
      ...item,
      id: uuidv4(),
      rotation: 0,
      zIndex: items.length,
    };

    setItems([...items, newItem]);
  };

  const onUpdateItem = (updatedItem: CanvaItemEntity) => {
    const newItems = items.map(item =>
      item.id === updatedItem.id
        ? {
            ...item,
            ...updatedItem,
          }
        : item,
    );

    setItems(newItems);
  };

  const onRemoveProduct = (id: string) => {
    setItems(prev =>
      prev
        .map(item => ({
          ...item,
          zIndex:
            selectedItem?.zIndex && item.zIndex > selectedItem.zIndex
              ? item.zIndex - 1
              : item.zIndex,
        }))
        .filter(product => product.id !== id),
    );
  };

  const onBringToFront = (id: string) => {
    const currentItem = items.find(item => item.id === id);
    if (!currentItem) return;

    const newItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          zIndex: currentItem.zIndex + 1,
        };
      }

      if (item.zIndex === currentItem.zIndex + 1) {
        return {
          ...item,
          zIndex: currentItem.zIndex,
        };
      }

      return item;
    });

    setItems(newItems);
  };

  const onSendToBack = (id: string) => {
    const currentItem = items.find(item => item.id === id);
    if (!currentItem) return;

    const newItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          zIndex: currentItem.zIndex - 1,
        };
      }

      if (item.zIndex === currentItem.zIndex - 1) {
        return {
          ...item,
          zIndex: currentItem.zIndex,
        };
      }

      return item;
    });

    setItems(newItems);
  };

  useInitialCanvaEvents({
    setZoomLevel,
    workspaceRef,
  });

  const internalContext: CanvaEditorInternalContextProps = {
    isEditing,
    items,
    onAddItem,
    onBringToFront,
    onRemoveProduct,
    onSendToBack,
    onUpdateItem,
    selectedItem,
    setIsEditing,
    setSelectedItem,
    setZoomLevel,
    stageRef,
    stageSize,
    workspaceRef,
    workspaceSize,
    zoomLevel,
  };

  return (
    <CanvaEditorContext.Provider value={{ ...props, ...internalContext }}>
      {children}
    </CanvaEditorContext.Provider>
  );
}

export function useCanvaEditorContext() {
  const context = useContext(CanvaEditorContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useCanvaEditorContext must be used within CanvaEditorContext',
    );
  }

  return context;
}
