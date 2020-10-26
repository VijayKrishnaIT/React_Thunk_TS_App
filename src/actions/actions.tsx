import axios from "axios";
import errorHandling from "../config/_errHandling";
import BASE_URL from "../urls/urls";

/*****************************************************************************/
export const getEmployees = () => {
  return (dispatch: any) => {
    return axios.get(BASE_URL + "/fetch").then((posRes) => {
      dispatch(fun_one(posRes.data));
    }, errorHandling);
  };
};

export const fun_one = (records: any) => {
  return { type: "FETCH", value: records };
};
/****************************************************************************/

/***************************************************************************** */
export const AddEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.post(BASE_URL + "/insert", record).then((posRes) => {
      dispatch(fun_two(posRes.data));
    }, errorHandling);
  };
};

export const fun_two = (result: any) => {
  return { type: "INSERT", value: result };
};
/***************************************************************************** */

/****************************************************************************** */
export const updateEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.put(BASE_URL + "/update", record).then((posRes) => {
      dispatch(fun_three(posRes.data));
    }, errorHandling);
  };
};
export const fun_three = (result: any) => {
  return { type: "UPDATE", value: result };
};
/****************************************************************************** */

/****************************************************************************** */
export const deleteEmployee = (record: any) => {
  
  return (dispatch: any) => {
    return axios.delete(BASE_URL + "/delete", record).then((posRes) => {
      posRes.data.my_record = record;
      dispatch(fun_four(posRes.data));
    }, errorHandling);
  };
};
export const fun_four = (result: any) => {
  return { type: "DELETE", value: result };
};
/****************************************************************************** */
