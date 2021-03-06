import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import AppProps from "./config/props";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuState from "./state/menu_state";
import send from "./dispatch/dispatch";
import receive from "./subscribe/subscribe";
import MyTable from "./ui/tableHead";
import Button from "@material-ui/core/Button";

class App extends React.Component<AppProps, MenuState> {
  state: MenuState = {
    anchorEl: null,
    open: null,
  };

  handleClick = (event: React.MouseEvent) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecords();
  }

  delEmp = (empId: any) => {
    this.props.deleteRecord({ e_id: empId });
  };

  editEmp = (record: any) => {
    console.log(record);
  };

  insertRecord = (): any => {
    this.props.addEmployee({
      e_id: 4,
      e_name: "Sam",
      e_sal: 30000,
      e_designation: "Senior Soft Eng",
      dob: "2020-10-26",
      contact: 9876543219,
      e_habits: ["reading"],
      e_department: "Software",
      gender: "male",
    });
  };

  updateRecord = (): any => {
    this.props.updateEmployee({
      e_id: 333,
      e_sal: 800,
      e_designation: "SSE",
      contact: 99999,
      e_dept: "Training",
    });
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Button onClick={this.insertRecord} variant="contained" color="primary">
          Insert
        </Button>
        <Button
          onClick={this.updateRecord}
          variant="outlined"
          color="secondary"
        >
          Update
        </Button>
        <Table>
          <MyTable />
          <TableBody>
            {this.props.data.map((element, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{element.e_id}</TableCell>
                <TableCell>{element.e_name}</TableCell>
                <TableCell>{element.e_sal}</TableCell>
                <TableCell>{element.e_designation}</TableCell>
                <TableCell>{element.dob}</TableCell>
                <TableCell>{element.contact}</TableCell>
                <TableCell>{JSON.stringify(element.e_habits)}</TableCell>
                <TableCell>{element.e_dept}</TableCell>
                <TableCell>{element.gender}</TableCell>
                <TableCell>
                  <IconButton aria-haspopup="true" onClick={this.handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="Menu"
                    anchorEl={this.state.anchorEl}
                    // keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        this.delEmp(element.e_id);
                      }}
                    >
                      Delete
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        this.editEmp(element);
                      }}
                    >
                      Edit
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default connect(receive, send)(App);
