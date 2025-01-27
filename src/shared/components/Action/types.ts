export interface ButtonActionEntity {
  disabled?: boolean;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  popover?: React.ReactNode;
  type: 'button';
}

export interface CustomActionEntity {
  element: React.ReactNode;
  label: string;
  type: 'custom';
}

export type CompactActionEntity = ButtonActionEntity | CustomActionEntity;
