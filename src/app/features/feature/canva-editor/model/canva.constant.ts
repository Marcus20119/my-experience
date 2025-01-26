import type { CanvaSize } from './canva.type';
import { CanvaPaperType } from './canva.type';

export const CANVA_COLOR = {
  image: '#14a2b5',
  shape: '#4f56dd',
  text: '#8441c3',
};

export const CANVA_SIZE = {
  actionBarWidth: 56,
  footerHeight: 48,
  headerHeight: 48,
  sidebarSectionSpace: 8,
  sidebarWidth: 300,
};

export const MIN_ZOOM_LEVEL = 0.3;
export const MAX_ZOOM_LEVEL = 3;

export const A4_SIZE: CanvaSize = {
  height: 3508,
  width: 2480,
};

export const PAPER_SIZE: Record<CanvaPaperType, CanvaSize> = {
  [CanvaPaperType.A4Horizontal]: {
    height: 2480,
    width: 3508,
  },
  [CanvaPaperType.A4Vertical]: {
    height: 3508,
    width: 2480,
  },
  [CanvaPaperType.Square]: {
    height: 2480,
    width: 2480,
  },
};

export const STAR_RATIO = 2.25; // 2.25 is the ratio of inner to outer radius

export const DEFAULT_STROKE_COLOR = '#000000';
export const DEFAULT_STROKE_DISABLED_COLOR = '#00000050';
export const DEFAULT_STROKE_WIDTH = 0;

export const DEFAULT_FILL_COLOR = '#00000000';
