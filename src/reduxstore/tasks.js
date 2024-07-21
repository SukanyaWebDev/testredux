import { createAction, createReducer } from "@reduxjs/toolkit"

export const addTask = createAction("ADD_TASK")
export const removeTask = createAction("REMOVE_TASK")
export const complteTask = createAction("COMPLETE_TASK")

let len = 0


// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       state.push({
//         id: ++len,
//         task: action.payload.task,
//         completed: false,
//       });
//     })
//     .addCase(removeTask, (state, action) => {
//       const findIndex = state.findIndex((task) => task.id === action.payload.id);
//       if (findIndex !== -1) {
//         state.splice(findIndex, 1);
//       }
//     })
//     .addCase(complteTask, (state, action) => {
//       const findIndex = state.findIndex((task) => task.id === action.payload.id);
//       if (findIndex !== -1) {
//         state[findIndex].completed = true;
//       }
//     });
// });

// export default reducer;


export default createReducer([], {
    [addTask.type]: (state, action) => {
        state.push({
            id: ++len,
            task: action.payload.task,
            complteTask: false
        })
    },
    [removeTask.type]: (state, action) => {
        const findIndex = state.findIndex((task) => task.id === action.payload.id)
        state.splice(findIndex, 1)
    },
    [complteTask.type]: (state, action) => {
        const findIndex = state.findIndex((task) => task.id === action.payload.id)
        state[findIndex].completed = true

    }
})


// export default reducer
// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case addTask.type:
//             return [...state, {
//                 id: ++len,
//                 task: action.payload.task,
//                 completed: false

//             }]
//         case removeTask.type:
//             return state.filter((task) => task.id !== action.payload.id);
//         case complteTask.type:
//             return state.map((each) => {
//                 if (action.payload.id === each.id) {
//                     return { ...each, completed: true }
//                 } else { return { ...each } }
//             })

//         default:
//             return state
//     }
// }