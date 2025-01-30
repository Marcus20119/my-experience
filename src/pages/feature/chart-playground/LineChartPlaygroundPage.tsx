import { ChartPlaygroundLayout } from '@/app/layout';

function LineChartPlaygroundPage() {
  return (
    <ChartPlaygroundLayout
      route={{
        path: '/feature/chart-playground/line',
      }}
    >
      Line chart
    </ChartPlaygroundLayout>
  );
}

export default LineChartPlaygroundPage;
