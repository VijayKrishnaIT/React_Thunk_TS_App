import * as actions from "../actions/actions";
const send = (dispatch: any) => {
  return {
    fetchRecords: () => {
      dispatch(actions.getEmployees());
    },
    deleteRecord: (record: any) => {
      dispatch(actions.deleteEmployee(record));
    },
    addEmployee: (record: any) => {
      dispatch(actions.addEmployee(record));
    },
    updateEmployee: (record: any) => {
      dispatch(actions.updateEmployee(record));
    },
  };
};
export default send;
