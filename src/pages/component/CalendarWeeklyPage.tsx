import type {
  MockWeeklyCalendarEntity,
  MockWeeklyFilterEntity,
} from '@/app/features/component/calendar';
import {
  mockWeeklyData,
  WeeklyCalendar,
  WeeklyCalendarFilter,
} from '@/app/features/component/calendar';
import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import CalendarLayout from '@/app/layout/CalendarLayout';
import { SPACING, WIDTH } from '@/shared/assets/styles/constants';
import { useCalculateElementSize } from '@/shared/hooks';
import { Flex, Form } from 'antd';

function CalendarWeeklyPage() {
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset: getHeaderHeight() + SPACING.contentPadding * 2 + 58 + 50, // 58 - filter height, 50 - header height
    widthOffset:
      getSidebarWidth() + SPACING.contentPadding * 2 + WIDTH.scrollbar,
  });

  const [form] = Form.useForm<MockWeeklyFilterEntity>();
  const baseDate = Form.useWatch('baseDate', form);

  return (
    <CalendarLayout
      route={{
        path: '/component/calendar/weekly',
      }}
    >
      <Flex gap="1rem" vertical>
        <WeeklyCalendarFilter form={form} />
        <WeeklyCalendar<MockWeeklyCalendarEntity>
          baseDate={baseDate}
          dataSource={mockWeeklyData}
          scroll={{ x: width, y: height }}
        />
      </Flex>
    </CalendarLayout>
  );
}

export default CalendarWeeklyPage;
