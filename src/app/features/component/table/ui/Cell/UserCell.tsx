import { Avatar, Flex, Typography } from 'antd';

const { Text } = Typography;

interface Props {
  additionalInfo?: string;
  avatar?: string;
  name?: string;
}

function UserCell({ additionalInfo, avatar, name }: Props) {
  return (
    <Flex align="center" gap="0.5rem">
      <Avatar className="flex-shrink-0" size={40} src={avatar} />
      <Flex vertical>
        <Text className="line-clamp-1 font-semibold">{name}</Text>
        <Text className="line-clamp-1 text-xs text-neutral-500">
          {additionalInfo}
        </Text>
      </Flex>
    </Flex>
  );
}

export default UserCell;
