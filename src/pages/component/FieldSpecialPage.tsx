import { FieldLayout } from '@/app/layout';
import { queries } from '@/shared/tanstack/queries';
import { useQuery } from '@tanstack/react-query';

function FieldSpecialPage() {
  const { data } = useQuery(queries.countries.all(['name', 'idd', 'flags']));

  return (
    <FieldLayout
      route={{
        path: '/component/field/special',
      }}
    >
      Special Field Page
    </FieldLayout>
  );
}

export default FieldSpecialPage;
