export const getOrderby = (key: string, orderType: 'ASC' | 'DESC') =>
  `${key}:${orderType}`;

export const ApiTool = {
  getOrderby,
};
