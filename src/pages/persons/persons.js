import React, { useEffect, useState } from 'react';
import { fetchPersons } from '../../api/dataService';
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Persons() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetchPersons()
            .then((response) => {
                const personsData = response.data;
                setPersons(personsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <DataGrid
            dataSource={persons}
            showBorders={true}
            allowColumnResizing={true}
            filterRow={{
                visible: true,
                applyFilter: "auto"
            }}
        >
            <Column dataField="id" width={50} />
            <Column dataField="name" />
        </DataGrid>
    );
}
