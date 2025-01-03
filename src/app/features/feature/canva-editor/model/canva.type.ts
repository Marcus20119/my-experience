export interface CanvaSize {
  height: number;
  width: number;
}

export enum CanvaItemType {
  Image = 'image',
  Shape = 'shape',
  Text = 'text',
}

export interface CanvaImageItemEntity {
  height: number;
  id: string;
  rotation: number;
  type: CanvaItemType.Image;
  url: string;
  width: number;
  x: number;
  y: number;
  zIndex: number;
}

export interface CanvaShapeItemEntity {
  fill: string;
  height: number;
  id: string;
  rotation: number;
  type: CanvaItemType.Shape;
  width: number;
  x: number;
  y: number;
  zIndex: number;
}

export interface CanvaTextItemEntity {
  fill: string;
  height: number;
  id: string;
  rotation: number;
  text: string;
  type: CanvaItemType.Text;
  width: number;
  x: number;
  y: number;
  zIndex: number;
}

export type CanvaItemEntity =
  | CanvaImageItemEntity
  | CanvaShapeItemEntity
  | CanvaTextItemEntity;

export type AddCanvaItemEntityInput =
  | Omit<CanvaImageItemEntity, 'id' | 'rotation' | 'zIndex'>
  | Omit<CanvaShapeItemEntity, 'id' | 'rotation' | 'zIndex'>
  | Omit<CanvaTextItemEntity, 'id' | 'rotation' | 'zIndex'>;
