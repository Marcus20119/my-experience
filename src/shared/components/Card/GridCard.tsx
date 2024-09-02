import type { CardProps } from 'antd/lib';
import { Card } from 'antd';
import { cn } from '@/lib/tailwind';

const getWidthPercentage = (span: number) => `${(span / 24) * 100}%`;

export interface GridCardItem {
  content: React.ReactNode;
  span: number;
}

interface Props extends CardProps {
  grids: GridCardItem[];
}

function GridCard({ grids, rootClassName, ...props }: Props) {
  return (
    <Card
      rootClassName={cn('rounded-b-lg overflow-hidden', rootClassName)}
      {...props}
    >
      {grids.map((grid, index) => (
        <Card.Grid
          hoverable={false}
          key={index}
          style={{
            width: getWidthPercentage(grid.span),
          }}
        >
          {grid.content}
        </Card.Grid>
      ))}
    </Card>
  );
}

export default GridCard;
