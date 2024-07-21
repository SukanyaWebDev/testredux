//actionTypes
const ADD_TASK="ADD_TASK"
const REMOVE_TASK="REMOVE_TASK"

//Actions
export const addTask=(task)=>({type:ADD_TASK,payload:{task:task}})
export const removeTask=(id)=>({type:REMOVE_TASK,payload:{id:id}})


//reducer

let len=0


export default function reducer(state=[],action){
    switch(action.type){
        case ADD_TASK:
            return [...state,{
                id:++len,
                task:action.payload.task,
                completed:false

            }]
        case REMOVE_TASK:
            return state.filter((task)=>task.id!==action.payload.id);

        default:
            return state
    }
}