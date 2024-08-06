import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';
import { URL } from '../utils/constants';

type TableContextProps = {
  id: number;

  isPending: boolean;
  error: object | null;
  data: {
    id: number;
    rowName: string;
    total: number;
    salary: number;
    mimExploitation: number;
    machineOperatorSalary: number;
    materials: number;
    mainCosts: number;
    supportCosts: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    child: [];
  }[];
} | null;

const TableContext = createContext<TableContextProps>(null);

function TableContextProvider({ children }: { children: ReactNode }) {
  const id = 133930;

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`${URL}/v1/outlay-rows/entity/${id}/row/list`, { method: 'GET' }).then(res => res.json()),
  });

  return <TableContext.Provider value={{ isPending, error, data, id }}>{children}</TableContext.Provider>;
}

function useTableContext() {
  const context = useContext(TableContext);
  if (!context) throw new Error('TableContext was used outside of TableContextProvider');
  return context;
}

export { TableContextProvider, useTableContext };
