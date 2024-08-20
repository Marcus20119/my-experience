import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

interface Props {
  value?: string[];
}

function ListValue({ value }: Props) {
  if (!value?.length) return null;

  return (
    <Paragraph>
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            <Text>{item}</Text>
          </li>
        ))}
      </ul>
    </Paragraph>
  );
}

export default ListValue;
