const receive = (state: any) => {
    console.log(state);
    if(state.hasOwnProperty("status")){
        if(state.status.delete === "success"){
            let idx = state.data.findIndex((element:any,index:any)=>{
              return element.e_id === state.status.my_record.e_id;
            }); 
            state.data.splice(idx,1);    
        }
    }
    return {
      data: state.data,
      status : state.status
    };
};
export default receive;