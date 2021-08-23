import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable1 from './page1data.json'
import './page1.css'
import { Container, Table } from 'react-bootstrap';

const Table1 = () => {
    
    return (
        <Container className="table-1">
            <h1>"Environnement de RECETTE"</h1><br />
            <Table bordered >
                <thead>
                    <tr className="double-header" >
                        <th className="C">Etapes</th>
                        <th className="C">Descriptif</th>
                        <th>PROD <br /> 
                        <th className="E">E0ED</th>
                        </th>
                        <th>PRE PROD

                        <th className="E">E1ED</th>

                        </th>
                        <th>RECETTE
                        <th className="E">E2ED</th>
                            
                             </th>
                        <th colSpan="2">RECETTE NEO
                        <th className="E">EHED</th>
                        <th className="inner-td">ENED</th>
                        
                        </th>
                        <th colSpan="2">RECETTE ONE
                        <th className="E">ERED  </th>
                        <th className="inner-td">ELED</th>
                        
                        </th>
                    </tr>


                </thead>
                <tbody className="table-1-body">
                    <tr>
                    <td>Distribution</td>
                        <td>Envoi Des fichiers vers le faconnier</td>
                       {DataTable1.map((data,index)=>{
                           return(
                            <>
                                    <td key={index} className="green" >{data.ok1}</td>
                            
                           </>
                           )
                       })}

                    </tr>
                    <tr >
                        <td>Traitements</td>
                        <td>Demon de suivi</td>
                        {DataTable1.map((data,index)=>{
                           return(
                            <>
                                    <td key={index} className="green" >{data.ok2}</td>
                            
                           </>
                           )
                       })}
                        

                    </tr>
                    <tr >
                        <td>Demon de suivi</td>
                        <td>Routine des mise a jour de la station em temps reel</td>
                        {DataTable1.map((data,index)=>{
                           return(
                            <>
                                    <td key={index} className="green" >{data.ok3}</td>
                            
                           </>
                           )
                       })}
                        
                    </tr>
                    <tr >
                        <td>Station + WS</td>
                        <td>Acces a la station et aux web services</td>
                        {DataTable1.map((data,index)=>{
                           return(
                            <>
                                    <td key={index} className="green" >{data.ok4}</td>
                            
                           </>
                           )
                       })}
                        

                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Table1;