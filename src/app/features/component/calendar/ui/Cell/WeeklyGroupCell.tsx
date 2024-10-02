import type {
  WeeklyCalendarEntity,
  WeeklyGroup,
} from '@/app/features/component/calendar/model';
import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { getWeeklyCalendarGroupTopPosition } from '@/app/features/component/calendar/lib';
import { Flex, Row } from 'antd';
import { WeeklyCard } from '../Card';

interface Props<T extends WeeklyCalendarEntity> {
  group: WeeklyGroup<T>;
  index: number;
}

function WeeklyGroupCell<T extends WeeklyCalendarEntity>({
  group,
  index,
}: Props<T>) {
  const { endHour, hourCellHeight, startHour } = useWeeklyCalendarContext();

  if (!group.startTime || !group.items.length) return null;

  const { items: appointments, startTime } = group;

  const showAppointments = appointments.slice(0, 3);
  const _restAppointments = appointments.slice(3);

  // do something with restAppointments
  // console.log('restAppointments:', restAppointments);

  const top = getWeeklyCalendarGroupTopPosition({
    endHour,
    hourCellHeight,
    startHour,
    startTime,
  });

  return (
    <Flex
      className="group absolute left-0 right-0 rounded-lg transition-all hover:!z-[999]"
      style={{
        top,
        zIndex: index,
      }}
    >
      <Row className="w-full rounded-lg" gutter={4}>
        {showAppointments.map(appointment => (
          <WeeklyCard
            appointment={appointment}
            key={appointment.id}
            numberOfAppointments={showAppointments.length}
          />
        ))}
      </Row>
    </Flex>
  );
}

export default WeeklyGroupCell;
