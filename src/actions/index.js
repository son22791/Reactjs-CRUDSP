import * as types from "../constants"


export function addTask(payload){
    return{
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addTaskSuccess(payload){
    return{
        type: types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addTaskFailure(payload){
    return{
        type: types.ADD_ITEM_FAILURE,
        payload
    }
}

export function updateTask(payload){
    return{
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateTaskSuccess(payload){
    return{
        type: types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateTaskFailure(payload){
    return{
        type: types.UPDATE_ITEM_FAILURE,
        payload
    }
}

export function deleteTask(payload){
    return{
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteTaskSuccess(payload){
    return{
        type: types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteTaskFailure(payload){
    return{
        type: types.DELETE_ITEM_FAILURE,
        payload
    }
}

export function paginationTask(payload){
    return{
        type: types.PAGINATION_ITEM_REQUEST,
        payload
    }
}
export function paginationTaskSuccess(payload){
    return{
        type: types.PAGINATION_ITEM_SUCCESS,
        payload
    }
}
export function paginationTaskFailure(payload){
    return{
        type: types.PAGINATION_ITEM_FAILURE,
        payload
    }
}

export function searchTask(payload){
    return{
        type: types.SEARCH_ITEM_REQUEST,
        payload
    }
}
export function searchTaskSuccess(payload){
    return{
        type: types.SEARCH_ITEM_SUCCESS,
        payload
    }
}
export function searchTaskFailure(payload){
    return{
        type: types.SEARCH_ITEM_FAILURE,
        payload
    }
}