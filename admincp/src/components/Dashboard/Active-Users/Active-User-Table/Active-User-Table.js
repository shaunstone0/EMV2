import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const ActiveUserTable = () => {
    const data = {
        First_Name: 'Shaun',
        Last_Name: 'Stone'
    };

    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'First_Name'
            },
            {
                Header: 'Last Name',
                accessor: 'Last_Name'
            }
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });
    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={5} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={7} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr key={1} {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td key={2} {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ActiveUserTable;
