import * as actions from "../actions"
import React from "react"
import Items from "../components"
import { connect } from "react-redux"

class ItemContainer extends React.Component {
    componentDidMount() {
        return this.props.paginationItem(1)
    }
    render() {
        // console.log(this.props,"This props");
        return <Items {...this.props}/>
    }
}
const mapStateToProps = (state)=>{
    console.log(state.items);
    return {
        items: state.items.listItem,
        nameSearch: state.items.nameSearch,
        activePage: state.items.activePage,
        totalPage: state.items.totalPage,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        paginationItem: (data)=>{
            dispatch(actions.paginationTask(data))
        },
        addItem: (data)=>{
            dispatch(actions.addTask(data))
        },
        deleteItem: (data)=>{
            dispatch(actions.deleteTask(data))
        },
        updateItem: (data)=>{
            dispatch(actions.updateTask(data))
        },
        searchItem: (data)=>{
            dispatch(actions.searchTask(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( ItemContainer)