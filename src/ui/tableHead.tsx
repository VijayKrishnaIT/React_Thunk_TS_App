import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
export default function MyTable(){
    return(
            <TableHead>
                <TableRow>
                <TableCell>
                    {" "}
                    <Checkbox />{" "}
                </TableCell>
                <TableCell>SNO</TableCell>
                <TableCell>E_ID</TableCell>
                <TableCell>E_NAME</TableCell>
                <TableCell>E_SAL</TableCell>
                <TableCell>E_DESIGNATION</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>MOBILE</TableCell>
                <TableCell>HABBITS</TableCell>
                <TableCell>DEPARTMENT</TableCell>
                <TableCell>GENDER</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
        
    )
};