import * as types from "../constants"


const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    nameSearch: "",
    activePage: 1,
    totalPage: 1,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
        case types.PAGINATION_ITEM_REQUEST:
        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case types.PAGINATION_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                nameSearch: action.payload.nameSearch,
            }
        case types.ADD_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
        case types.PAGINATION_ITEM_FAILURE:
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            }

        default:
            return { ...state }
    }
}