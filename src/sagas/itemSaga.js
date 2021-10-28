import * as actions from "../actions"
import * as API from "../fetchAPIs/"
import * as types from "../constants"
import { put, select, takeEvery } from "@redux-saga/core/effects"

function* addItem(action) {
    try {
        const dataAdd = yield API.addApi(action.payload);
        yield put(actions.addTaskSuccess());
        const dataReducer = yield select((state)=>{
            return{
                nameSearch: state.items.nameSearch
            }
        })
        const dataPagi = yield API.paginationApi(1)
        const dataSearch = yield API.searchApi({
            name: dataReducer.nameSearch,
            activePage: 1
        })
        if (dataReducer.nameSearch ==="") {
            yield put(actions.paginationTask(dataPagi.totalPage))
        }else {
            if (dataAdd.name.search(dataReducer.nameSearch) === -1) {
                const nameById = yield API.searchIdApi(dataAdd.id)
                yield put(actions.searchTaskSuccess({
                    listItem:nameById.searchIdTask,
                    activePage:1,
                    totalPage:1
                }))
            }else{
                yield put (actions.searchTask({
                    activePage: dataSearch.activePage,
                    name: dataReducer.nameSearch,
                }))
            }
        }
    } catch (error) {
        yield put(actions.addTaskFailure(error.errorMessage));
    }
}
function* deleteItem(action) {
    try {
        yield API.deleteApi(action.payload)
        yield put(actions.deleteTaskSuccess())
        const dataReducer = yield select((state)=>{
            return{
                nameSearch: state.items.nameSearch,
                activePage: state.items.activePage,
            }
        })
        const dataPagi = yield API.paginationApi(dataReducer.activePage)
        const dataSearch = yield API.searchApi({
            name: dataReducer.nameSearch,
            activePage: dataReducer.activePage
        })
        if (dataReducer.nameSearch ==="") {
            if (dataPagi.dataPage.length === 0) {
                yield put(actions.paginationTask(dataPagi.totalPage === 0 ? 1 : dataPagi.totalPage))
            }else{
                yield put(actions.paginationTask(dataReducer.activePage))
            }
        }else {
            if (dataSearch.dataPage.length === 0) {
                yield put(actions.searchTask({
                    activePage:dataSearch.totalPage === 0 ? 1 : dataSearch.totalPage,
                    name:dataReducer.nameSearch
                }))
            }else{
                yield put(actions.searchTask({
                    activePage:dataReducer.activePage,
                    name:dataReducer.nameSearch
                }))
            }
        }
    } catch (error) {
        yield put(actions.deleteTaskFailure(error.errorMessage));
    }
}
function* updateItem(action) {
    try {
        const dataUpdate = yield API.updateApi(action.payload)
        yield put(actions.updateTaskSuccess())
        const dataReducer = yield select((state)=>{
            return{
                nameSearch: state.items.nameSearch,
                activePage: state.items.activePage,
            }
        })
        if (dataReducer.nameSearch ==="") {
            yield put(actions.paginationTask(dataReducer.activePage))
        }else {
            if (dataUpdate.name.search(dataReducer.nameSearch) === -1) {
                const nameById = yield API.searchIdApi(dataUpdate.id)
                yield put(actions.searchTaskSuccess({
                    listItem:nameById.searchIdTask,
                    activePage:1,
                    totalPage:1
                }))
            }else{
                yield put (actions.searchTask({
                    activePage: dataReducer.activePage,
                    name: dataReducer.nameSearch,
                }))
            }
        }
    } catch (error) {
        yield put(actions.updateTaskFailure(error.errorMessage));
    }
}
function* paginationItem(action) {
    try {
        const dataPagi = yield API.paginationApi(action.payload)
        yield put(actions.paginationTaskSuccess({
            listItem: dataPagi.dataPage,
            activePage: action.payload,
            totalPage: dataPagi.totalPage === 0 ? 1 : dataPagi.totalPage,
        }))
    } catch (error) {
        yield put(actions.paginationTaskFailure(error.errorMessage));
    }
}
function* searchItem(action) {
    try {
        const dataSearch = yield API.searchApi(action.payload)
        yield put(actions.searchTaskSuccess({
            listItem: dataSearch.dataPage ,
            totalPage: dataSearch.totalPage === 0 ? 1 : dataSearch.totalPage,
            activePage: action.payload.activePage,
            nameSearch: action.payload.name
        }))
    } catch (error) {
        yield put(actions.searchTaskFailure(error.errorMessage));
    }
}

export const ItemSaga =[
    takeEvery(types.ADD_ITEM_REQUEST,addItem),
    takeEvery(types.DELETE_ITEM_REQUEST,deleteItem),
    takeEvery(types.UPDATE_ITEM_REQUEST,updateItem),
    takeEvery(types.PAGINATION_ITEM_REQUEST,paginationItem),
    takeEvery(types.SEARCH_ITEM_REQUEST,searchItem),
]