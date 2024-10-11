import type { SpecialFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import { Card } from '@/shared/components';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';

function GoogleAPIFields() {
  const { t } = useTranslation();

  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label={t('component.label.singleFile')}
          name="singleFile"
        >
          singleFile
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label={t('component.label.multipleFiles')}
          name="multipleFiles"
        >
          multipleFiles
        </Form.Item>
      ),
      span: 8,
    },
  ];

  return <Card.Grid grids={grids} title={t('component.title.uploadFields')} />;
}

export default GoogleAPIFields;
