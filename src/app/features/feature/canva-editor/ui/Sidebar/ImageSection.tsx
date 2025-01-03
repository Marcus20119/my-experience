import { useCanvaEditorContext } from '@/app/features/feature/canva-editor/context';
import { CANVA_SIZE } from '@/app/features/feature/canva-editor/model';
import { Icon } from '@iconify/react';
import { Button, Col, Flex, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import Item from '../Item';

function ImageSection() {
  const { t } = useTranslation();
  const { asset, height } = useCanvaEditorContext();

  const srcs = asset?.image.urls;
  const _loading = asset?.image.loading;

  return (
    <Flex gap={CANVA_SIZE.sidebarSectionSpace} vertical>
      <Flex className="w-full px-3">
        <Button
          className="w-full"
          icon={<Icon height="20" icon="lucide:upload-cloud" width="20" />}
          size="middle"
          type="primary"
        >
          {t('common.button.uploadPhoto')}
        </Button>
      </Flex>
      <div
        className="white-background-scrollbar w-full overflow-y-auto px-3"
        style={{
          height: height - (40 + CANVA_SIZE.sidebarSectionSpace * 3), // 40 is the height of the upload button
        }}
      >
        <Row
          gutter={[
            CANVA_SIZE.sidebarSectionSpace,
            CANVA_SIZE.sidebarSectionSpace,
          ]}
        >
          {srcs?.map((src, index) => (
            <Col key={index} span={12}>
              <Item.SidebarImage
                frameSize={
                  (CANVA_SIZE.sidebarWidth -
                    CANVA_SIZE.actionBarWidth -
                    12 * 2) /
                  2
                }
                src={src}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Flex>
  );
}

export default ImageSection;
