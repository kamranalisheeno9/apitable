import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page2.css'
import DataTable2 from './page2data.json'
import { Container, Table } from 'react-bootstrap';

const Table2 = () => {
    return (
        <Container className="table-2">
            <h1>"Environnement de RECETTE"</h1><br />
            <Table  bordered hover>
                <thead>
                    <tr>
                        <th>Repertoire/Fichier</th>
                        <th>Etat</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody className="table-2-body">
                    {DataTable2.map(data => {
                        return (
                            <tr className={data.etat ? "green":"red"} key={data.id}>
                                <td>{data.obj}</td>
                                <td >{data.etat ? "Ok":"KO"}</td>
                                <td>{data.detail}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </Container>
    );
}

export default Table2;