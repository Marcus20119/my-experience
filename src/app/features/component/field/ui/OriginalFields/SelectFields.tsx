import type { OriginalFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import type { DefaultOptionType } from 'antd/es/select';
import type { TreeSelectProps } from 'antd/lib';
import { AutoComplete, Card, Cascader, Select } from '@/shared/components';
import { FormTool } from '@/shared/utils';
import { Form } from 'antd';

function SelectFields() {
  const selectOptions: DefaultOptionType[] = Array(10)
    .fill(null)
    .map((_, index) => ({
      label: `Option ${index + 1}`,
      value: `${index + 1}`,
    }));

  const treeSelectOptions: TreeSelectProps['treeData'] = Array(10)
    .fill(null)
    .map((_, index) => ({
      children: Array(5)
        .fill(null)
        .map((_, childIndex) => ({
          label: `Child ${index + 1}-${childIndex + 1}`,
          value: `${index + 1}-${childIndex + 1}`,
        })),
      label: `Parent ${index + 1}`,
      value: `${index + 1}`,
    }));

  const cascaderOptions: DefaultOptionType[] = Array(10)
    .fill(null)
    .map((_, index) => ({
      children: Array(10)
        .fill(null)
        .map((_, cityIndex) => ({
          children: Array(5)
            .fill(null)
            .map((_, districtIndex) => ({
              label: `District ${districtIndex + 1}`,
              value: `${index + 1}-${cityIndex + 1}-${districtIndex + 1}`,
            })),
          label: `City ${cityIndex + 1}`,
          value: `${index + 1}-${cityIndex + 1}`,
        })),
      label: `Country ${index + 1}`,
      value: `${index + 1}`,
    }));

  const autoCompleteOptions: DefaultOptionType[] = Array(10)
    .fill(null)
    .map((_, index) => ({
      label: `Country ${index + 1}`,
      value: `Country ${index + 1}`,
    }));

  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Single select" name="singleSelect">
          <Select
            allowClear
            filterOption={FormTool.filterSelectOption}
            optionFilterProp="label"
            options={selectOptions}
            placeholder="Select one option"
            showSearch
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label="Multiple select"
          name="multiSelect"
        >
          <Select
            allowClear
            filterOption={FormTool.filterSelectOption}
            mode="multiple"
            optionFilterProp="label"
            options={selectOptions}
            placeholder="Select multiple options"
            showSearch
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Tree select" name="treeSelect">
          <Select.Tree
            allowClear
            filterTreeNode={FormTool.filterTreeNode}
            placeholder="Select tree option"
            showCheckedStrategy="SHOW_PARENT"
            showSearch
            treeCheckable
            treeData={treeSelectOptions}
            treeLine
            treeNodeFilterProp="label"
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Cascader" name="cascader">
          <Cascader
            allowClear
            options={cascaderOptions}
            placeholder="Select tree option"
            showCheckedStrategy="SHOW_PARENT"
            showSearch
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Auto complete" name="autocomplete">
          <AutoComplete
            allowClear
            filterOption={FormTool.filterSelectOption}
            optionFilterProp="label"
            options={autoCompleteOptions}
            placeholder="Try to type 'Country 1'"
          />
        </Form.Item>
      ),
      span: 8,
    },
  ];
  return <Card.Grid grids={grids} title="Select fields" />;
}

export default SelectFields;
