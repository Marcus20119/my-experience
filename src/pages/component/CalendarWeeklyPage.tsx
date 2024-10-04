import type {
  MockWeeklyCalendarEntity,
  MockWeeklyFilterEntity,
} from '@/app/features/component/calendar';
import {
  DayOfWeek,
  mockWeeklyData,
  WeeklyCalendar,
  WeeklyCalendarFilter,
} from '@/app/features/component/calendar';
import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import CalendarLayout from '@/app/layout/CalendarLayout';
import { SPACING, WIDTH } from '@/shared/assets/styles/constants';
import { useCalculateElementSize } from '@/shared/hooks';
import { Flex, Form, Typography } from 'antd';
import dayjs from 'dayjs';
import { cn } from '@/lib/tailwind';

const { Text, Title } = Typography;

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
          disabledCell={[
            {
              dayOfWeek: DayOfWeek.Sunday,
              type: 'dayOfWeek',
            },
            {
              dayOfWeek: DayOfWeek.Saturday,
              hours: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
              minutes: hour => (hour === 13 ? [30] : [0, 30]),
              type: 'dayOfWeek',
            },
          ]}
          itemRender={(item, { groupCount, height }) => (
            <Flex
              className="h-full w-full rounded-sm px-1 py-0.5 shadow-md"
              style={{
                backgroundColor: item.color,
              }}
              vertical
            >
              <Text>
                {groupCount > 2
                  ? dayjs(item.startTime).format('H:mm')
                  : `${dayjs(item.startTime).format('H:mm')} - ${dayjs(item.endTime).format('H:mm')}`}
              </Text>
              <Title
                className={cn(
                  'text-sm',
                  height < 160 && 'line-clamp-3',
                  height < 120 && 'line-clamp-2',
                  height < 80 && 'line-clamp-1',
                )}
                level={3}
              >
                {item.title}
              </Title>
            </Flex>
          )}
          onClickItem={item => {
            console.log(item);
          }}
          onCreateNewItem={startTime => {
            console.log(startTime);
          }}
          scroll={{ x: width, y: height }}
        />
      </Flex>
    </CalendarLayout>
  );
}

export default CalendarWeeklyPage;
