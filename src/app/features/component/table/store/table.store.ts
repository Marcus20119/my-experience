import type { ParseKeys } from 'i18next';
import type { Key } from 'react';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface CustomizeColumnProps {
  index: number;
  key: Key;
  titleI18Key: ParseKeys;
}

export interface CustomizeTableProps {
  activeColumnKeys?: Key[];
  columns: CustomizeColumnProps[];
  name: string;
  orderColumnKeys?: Key[];
}

interface TableColumnsState {
  tables: CustomizeTableProps[];
}

interface TableColumnsAction {
  initTableColumns: (table: CustomizeTableProps) => void;
  resetTable: (tableName: string, newTable: CustomizeTableProps) => void;
  setActiveColumnKeys: (tableName: string, columnKeys: Key[]) => void;
  setOrderColumnKeys: (tableName: string, columnKeys: Key[]) => void;
}

export const useTableColumnsStore = create(
  devtools(
    persist<TableColumnsState & TableColumnsAction>(
      set => ({
        initTableColumns: (table: CustomizeTableProps) => {
          set(state => ({
            tables: [...state.tables, table],
          }));
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
