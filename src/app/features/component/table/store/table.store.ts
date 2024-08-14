import type { Key } from 'react';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface ColumnProps {
  key: Key;
  title?: string | null;
}

export interface TableProps {
  activeColumnsKeys?: Key[];
  columnOrder?: Key[];
  columns: ColumnProps[];
  language: string;
  name: string;
}

interface TableColumnsState {
  tables: TableProps[];
}

interface TableColumnsAction {
  changeLanguage: (
    tableName: string,
    language: string,
    columns: ColumnProps[],
  ) => void;
  initTableColumns: (table: TableProps) => void;
  resetShowingTableColumns: () => void;
  resetTable: (tableName: string, newTable: TableProps) => void;
  setColumnOrder: (tableName: string, columnKeys: Key[]) => void;
  setShowAllColumns: (tableName: string) => void;
  setShowingTableColumns: (tableName: string, columnKeys: Key[]) => void;
}

export const useTableColumnsStore = create(
  devtools(
    persist<TableColumnsState & TableColumnsAction>(
      set => ({
        changeLanguage: (tableName, language, columns) => {
          set(state => {
            const selectedTable = state.tables.find(
              item => item.name === tableName,
            ) as TableProps;

            if (!selectedTable) return state;

            return {
              tables: state.tables.map(item => {
                if (item.name === tableName) {
                  return {
                    ...item,
                    columns,
                    language,
                  };
                }

                return item;
              }),
            };
          });
        },
        initTableColumns: (table: TableProps) => {
          set(state => ({
            tables: [...state.tables, table],
          }));
        },
        resetShowingTableColumns: () => {
          set(() => ({
            tables: [],
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
        setColumnOrder: (table, columnKeys) => {
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
                    columnOrder: columnKeys,
                  };
                }

                return item;
              }),
            };
          });
        },
        setShowAllColumns: tableName => {
          set(state => {
            const selectedTable = state.tables.find(
              item => item.name === tableName,
            ) as TableProps;

            if (!selectedTable) return state;

            return {
              tables: state.tables.map(item => {
                if (item.name === tableName) {
                  return {
                    ...item,
                    activeColumnsKeys: item.columns.map(column => column.key),
                  };
                }

                return item;
              }),
            };
          });
        },
        setShowingTableColumns: (tableName, columnKeys) => {
          set(state => {
            const selectedTable = state.tables.find(
              item => item.name === tableName,
            ) as TableProps;

            if (!selectedTable) return state;

            return {
              tables: state.tables.map(item => {
                if (item.name === tableName) {
                  return {
                    ...item,
                    activeColumnsKeys: columnKeys,
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
