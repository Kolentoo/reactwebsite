const initState = {
    count:0,//demoa与demob测试react-redux用
    showSideBar:false
}

exports.reducer=(state=initState,action)=>{
    console.log('reducer',action);
    switch(action.type){
        case "add_action":
            return {
                count:state.count + 1
            }
        case "showSideBar":
            return {
                showSideBar:!(state.showSideBar)
            }
        default:
            return state;
    }
} 