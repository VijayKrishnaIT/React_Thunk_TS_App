const receive = (state: any) => {
  console.log(state);
  if (state.hasOwnProperty("status")) {
    if (state.status.delete === "success") {
      let idx = state.data.findIndex((element: any, index: any) => {
        return element.e_id === state.status.my_record.e_id;
      });
      state.data.splice(idx, 1);
    }
    if (state.status.insert === "success") {
      console.log(state);
      state.data.push(state.status.record);
    }
    if (state.status.update === "success") {
      let m_index = state.data.findIndex((element: any, index: any) => {
        return element.e_id === state.status.record.e_id;
      });
      state.data[m_index].e_sal = state.status.record.e_sal;
      state.data[m_index].e_designation = state.status.record.e_designation;
      state.data[m_index].e_contact = state.status.record.e_contact;
      state.data[m_index].e_dept = state.status.record.e_dept;
    }
  }
  return {
    data: state.data,
    status: state.status,
  };
};
export default receive;
