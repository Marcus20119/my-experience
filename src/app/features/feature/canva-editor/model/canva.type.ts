export enum CanvaItemType {
  Image = 'image',
  Shape = 'shape',
  Text = 'text',
}

export enum CanvaShapeType {
  Circle = 'circle',
  Ellipse = 'ellipse',
  Hexagon = 'hexagon',
  Pentagon = 'pentagon',
  Rectangle = 'rectangle',
  Square = 'square',
  Star = 'star',
  Triangle = 'triangle',
}

export enum CanvaStrokeType {
  Dashed = 'dashed',
  Dotted = 'dotted',
  None = 'none',
  Solid = 'solid',
}

export enum CanvaPaperType {
  A4Horizontal = 'a4Horizontal',
  A4Vertical = 'a4Vertical',
  Square = 'square',
}

export interface CanvaSize {
  height: number;
  width: number;
}

export interface CanvaItemCommonEntity {
  id: string;
  rotation?: number;
  strokeColor?: string;
  strokeType?: CanvaStrokeType;
  strokeWidth?: number;
  x: number;
  y: number;
  zIndex: number;
}

export interface CanvaImageItemEntity extends CanvaItemCommonEntity {
  cornerRadius?: number;
  height: number;
  type: CanvaItemType.Image;
  url: string;
  width: number;
}

export interface CanvaShapeItemEntity extends CanvaItemCommonEntity {
  fill?: string;
  props:
    | CanvaHexagonShapePropEntity
    | CanvaPentagonShapePropEntity
    | CircleShapePropEntity
    | EllipseShapePropEntity
    | RectangleShapePropEntity
    | SquareShapePropEntity
    | StarShapePropEntity
    | TriangleShapePropEntity;
  type: CanvaItemType.Shape;
}

export interface CanvaTextItemEntity extends CanvaItemCommonEntity {
  fill?: string;
  height: number;
  text: string;
  type: CanvaItemType.Text;
  width: number;
}

export interface RectShapePropEntity {
  cornerRadius?: number;
  height: number;
  width: number;
}

export interface RegularPolygonShapePropEntity {
  radius: number;
}

export interface RectangleShapePropEntity extends RectShapePropEntity {
  shapeType: CanvaShapeType.Rectangle;
}

export interface SquareShapePropEntity extends RectShapePropEntity {
  cornerRadius?: number;
  height: number;
  shapeType: CanvaShapeType.Square;
  width: number;
}

export interface CircleShapePropEntity {
  radius: number;
  shapeType: CanvaShapeType.Circle;
}

export interface EllipseShapePropEntity {
  radiusX: number;
  radiusY: number;
  shapeType: CanvaShapeType.Ellipse;
}

export interface TriangleShapePropEntity extends RegularPolygonShapePropEntity {
  shapeType: CanvaShapeType.Triangle;
}

export interface StarShapePropEntity {
  innerRadius: number;
  outerRadius: number;
  shapeType: CanvaShapeType.Star;
}

export interface CanvaPentagonShapePropEntity
  extends RegularPolygonShapePropEntity {
  shapeType: CanvaShapeType.Pentagon;
}

export interface CanvaHexagonShapePropEntity
  extends RegularPolygonShapePropEntity {
  shapeType: CanvaShapeType.Hexagon;
}

export type CanvaItemEntity =
  | CanvaImageItemEntity
  | CanvaShapeItemEntity
  | CanvaTextItemEntity;

export type AddCanvaItemEntityInput =
  | Omit<CanvaImageItemEntity, 'id' | 'rotation' | 'zIndex'>
  | Omit<CanvaShapeItemEntity, 'id' | 'rotation' | 'zIndex'>
  | Omit<CanvaTextItemEntity, 'id' | 'rotation' | 'zIndex'>;

export type UpdateCanvaItemEntityInput =
  | Partial<CanvaImageItemEntity>
  | Partial<CanvaShapeItemEntity>
  | Partial<CanvaTextItemEntity>;
