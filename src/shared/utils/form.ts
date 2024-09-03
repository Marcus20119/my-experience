import type { DefaultOptionType } from 'antd/es/select';
import type { TreeSelectProps } from 'antd/lib';
import { TextTool } from './text';

const filterSelectOption = (input?: string, option?: DefaultOptionType) => {
  const formattedInput = TextTool.latinize(input).toLowerCase();

  if (!option || !option.label || typeof option.label !== 'string') {
    return false;
  }

  const formattedOption = TextTool.latinize(option?.label ?? '').toLowerCase();

  return formattedOption.includes(formattedInput);
};

const filterTreeNode = (
  input: string,
  option: NonNullable<TreeSelectProps['treeData']>[number],
) => {
  const formattedInput = TextTool.latinize(input).toLowerCase();

  if (!option || !option.label || typeof option.label !== 'string') {
    return false;
  }

  const formattedOption = TextTool.latinize(option?.label ?? '').toLowerCase();

  return formattedOption.includes(formattedInput);
};

export const FormTool = {
  filterSelectOption,
  filterTreeNode,
};
