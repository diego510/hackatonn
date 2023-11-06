import React, { useEffect, useState } from "react";
import { fetchTipogrupos } from "../../api/dataService"; // Asegúrate de tener una función similar para recuperar los tipos de grupo
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Tipogrupo() {
    const [tipogrupos, setTipogrupos] = useState([]);

    useEffect(() => {
        fetchTipogrupos() // Asegúrate de tener una función similar para recuperar tipos de grupo
            .then((response) => {
                const tipogruposData = response.data;
                setTipogrupos(tipogruposData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Tipo de Grupo List</h1>
            <ul>
                {tipogrupos.length > 0 ? (
                    tipogrupos.map((tipogrupo) => (
                        <li key={tipogrupo.id}>{tipogrupo.name}</li>
                    ))
                ) : (
                    <li>No tipos de grupo disponibles</li>
                )}
            </ul>
        </div>
    );
}
