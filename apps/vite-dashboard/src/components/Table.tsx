import React, { useState, useMemo } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export type Column<T> = {
  accessor: keyof T;
  header: string;
  sortable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cell?: (value: any, row: T) => React.ReactNode;
  className?: string
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function Table<T>({ data, columns }: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (columnAccessor: keyof T, sortable?: boolean) => {
    if (!sortable) return;

    if (sortColumn === columnAccessor) {
      setSortDirection((prevDirection) => {
        if (prevDirection === 'asc') return 'desc';
        if (prevDirection === 'desc') return null;
        return 'asc';
      });
    } else {
      setSortColumn(columnAccessor);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) {
      return data;
    }

    const sortableData = [...data];
    sortableData.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue === null || aValue === undefined) return sortDirection === 'asc' ? 1 : -1;
      if (bValue === null || bValue === undefined) return sortDirection === 'asc' ? -1 : 1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Fallback for other types or if types are mixed
      return 0;
    });
    return sortableData;
  }, [data, sortColumn, sortDirection]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 table-auto">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor as string}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  column.sortable ? 'cursor-pointer select-none' : ''
                } ${column.className || ''}`}
                onClick={() => handleSort(column.accessor, column.sortable)}
              >
                <div className="flex items-center">
                  {column.header}
                  {column.sortable && sortColumn === column.accessor && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-sm text-gray-500 text-center">
                No data to display.
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={column.accessor as string}
                    className={`px-6 py-4 text-sm text-gray-900 ${column.className || ''}`}
                  >
                    {column.cell
                      ? column.cell(row[column.accessor], row)
                      : String(row[column.accessor])} 
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}