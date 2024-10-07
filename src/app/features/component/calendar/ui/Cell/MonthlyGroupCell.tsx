import type {
  MonthlyCalendarEntity,
  MonthlyGroup,
} from '@/app/features/component/calendar/model';
import { Flex } from 'antd';

interface Props<T extends MonthlyCalendarEntity> {
  group: MonthlyGroup<T>;
}

function MonthlyGroupCell<T extends MonthlyCalendarEntity>({
  group,
}: Props<T>) {
  return <Flex>{group.items.length}</Flex>;
}

export default MonthlyGroupCell;
