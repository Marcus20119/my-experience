import type { AnyObject } from 'antd/lib/_util/type';
import type { ParseKeys } from 'i18next';
import type { Key } from 'react';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type { MyTableColumn } from '../model';

export interface CustomizeColumnProps {
  index: number;
  key: Key;
  titleI18Key: ParseKeys;
}

export interface CustomizeTableProps {
  activeColumnKeys: Key[];
  columns: CustomizeColumnProps[];
  name: string;
  orderColumnKeys: Key[];
}

interface TableColumnsState {
  tables: CustomizeTableProps[];
}

interface TableColumnsAction {
  getTable: (tableName: string) => CustomizeTableProps;
  initTableColumns: (
    tableName: string,
    columns: MyTableColumn<AnyObject>[],
  ) => void;
  resetTable: (tableName: string, newTable: CustomizeTableProps) => void;
  setActiveColumnKeys: (tableName: string, columnKeys: Key[]) => void;
  setOrderColumnKeys: (tableName: string, columnKeys: Key[]) => void;
}

export const useTableStore = create(
  devtools(
    persist<TableColumnsState & TableColumnsAction>(
      (set, get) => ({
        getTable: tableName => {
          const { tables } = get();

          const table = tables.find(item => item.name === tableName);

          return (
            table ?? {
              activeColumnKeys: [],
              columns: [],
              name: tableName,
              orderColumnKeys: [],
            }
          );
        },
        initTableColumns: (tableName, columns) => {
          set(state => {
            const index = state.tables.findIndex(
              item => item.name === tableName,
            );

            if (index === -1) {
              const newTable: CustomizeTableProps = {
                activeColumnKeys: columns.map(column => column.key),
                columns: columns.map((column, i) => ({
                  index: i,
                  key: column.key,
                  titleI18Key: column.titleI18Key,
                })),
                name: tableName,
                orderColumnKeys: columns.map(column => column.key),
              };

              return {
                tables: [...state.tables, newTable],
              };
            }

            return state;
          });
        },
        resetTable: (tableName, newTable) => {
          set(state => ({
            tables: state.tables.map(item => {
              if (item.name === tableName) {
                return newTable;
              }

              return item;
            }),
          }));
        },
        setActiveColumnKeys: (tableName, columnKeys) => {
          set(state => {
            const selectedTable = state.tables.find(
              item => item.name === tableName,
            ) as CustomizeTableProps;

            if (!selectedTable) return state;

            return {
              tables: state.tables.map(item => {
                if (item.name === tableName) {
                  return {
                    ...item,
                    activeColumnKeys: columnKeys,
                  };
                }

                return item;
              }),
            };
          });
        },
        setOrderColumnKeys: (table, columnKeys) => {
          set(state => {
            const selectedTable = state.tables.find(
              item => item.name === table,
            );

            if (!selectedTable) return state;

            return {
              tables: state.tables.map(item => {
                if (item.name === table) {
                  return {
                    ...item,
                    orderColumnKeys: columnKeys,
                  };
                }

                return item;
              }),
            };
          });
        },
        tables: [],
      }),
      {
        name: 'store-table',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
