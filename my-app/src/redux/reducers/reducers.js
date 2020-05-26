const initState = {
    count:0,//demoa与demob测试react-redux用
    showLayout:false,
    currentBread:'首页'
}
let current = localStorage.getItem('currentBread');

exports.reducer=(state=initState,action)=>{
    console.log('reducer',action);
    switch(action.type){
        case "add_action":
            return {
                count:state.count + 1
            }
        case "reduce_action":
            return {
                count:state.count - 1
            }
        case "showLayout":
            return {
                showLayout:true
            }
        case "hideLayout":
            return {
                showLayout:false
            }
        case "currentBread":
            return {
                currentBread:current
            }
        default:
            return state;
    }
} 