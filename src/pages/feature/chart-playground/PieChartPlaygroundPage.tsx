import { ChartPlaygroundLayout } from '@/app/layout';

function PieChartPlaygroundPage() {
  return (
    <ChartPlaygroundLayout
      route={{
        path: '/feature/chart-playground/pie',
      }}
    >
      Pie chart
    </ChartPlaygroundLayout>
  );
}

export default PieChartPlaygroundPage;
