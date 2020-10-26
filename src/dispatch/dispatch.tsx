import * as actions from "../actions/actions";
const send = (dispatch: any) => {
    return {
      fetchRecords: () => {
        dispatch(actions.getEmployees());
      },
      deleteRecord : (record:any)=>{
        dispatch(actions.deleteEmployee(record))
      }
    };
};
export default send;