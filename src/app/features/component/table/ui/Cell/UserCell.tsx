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
      {avatar ? (
        <Avatar className="flex-shrink-0" size={40} src={avatar} />
      ) : (
        <Flex
          align="center"
          className="h-10 w-10 flex-shrink-0 rounded-full bg-primaryText"
          justify="center"
        >
          <Text className="text-xl font-bold uppercase text-primary">
            {name?.[0]}
          </Text>
        </Flex>
      )}
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
