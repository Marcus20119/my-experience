import type { WeeklyCalendarEntity } from '@/app/features/component/calendar/model';
import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { getWeeklyCalendarItemHeight } from '@/app/features/component/calendar/lib';
import { Col, Flex } from 'antd';
import { useMemo } from 'react';

interface AppointmentCardProps {
  appointment: WeeklyCalendarEntity;
  numberOfAppointments: number;
}

function WeeklyCard({
  appointment,
  numberOfAppointments,
}: AppointmentCardProps) {
  const { endHour, hourCellHeight, startHour } = useWeeklyCalendarContext();
  const { endTime, startTime } = appointment;

  const height = getWeeklyCalendarItemHeight({
    endHour,
    endTime,
    hourCellHeight,
    startHour,
    startTime,
  });

  const span: number = useMemo(() => {
    if (numberOfAppointments === 1) return 24;
    if (numberOfAppointments === 2) return 12;
    return 8;
  }, [numberOfAppointments]);

  return (
    <Col span={span}>
      <Flex
        style={{
          height,
        }}
      >
        hehe
      </Flex>
    </Col>
  );
}

export default WeeklyCard;
