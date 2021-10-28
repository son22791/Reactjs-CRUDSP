import React, {Component} from "react";

class Items extends Component{
    state = {
        idDel:"",
        nameAdd:"",
        idUpdate:"",
        nameUpdate:"",
    };
    render() {
        let data = [];
        if (this.props.items) {
            data = this.props.items.map((item, index) =>{
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td><button onClick = {()=>{
                            this.props.deleteItem(item._id);
                        }} >DELETE</button></td>

                        <td><button onClick = {()=>{
                            this.setState({
                                idUpdate: item._id,
                                nameUpdate: item.name
                            })
                        }}>Select To Update</button></td>
                    </tr>
                )
            })
        }
        //Data End
        let btnpagi = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            btnpagi.push(i)
        }
        console.log(btnpagi);
        let pagi = [];
        pagi = btnpagi.map((item,index) => {
            if (this.props.nameSearch) {
                if (this.props.activePage === item) {
                    return (
                        <button key={index} style={{ background:"#000", color:"#fff"}}>{item}</button>
                    )
                }else {
                    return (
                        <button key={index} onClick ={() =>{
                            this.props.searchItem({
                                name:this.props.nameSearch,
                                activePage: item,
                            })
                        }} >{item}</button>
                    )
                }
            }else{
                if (this.props.activePage === item) {
                    return (
                        <button key={index} style={{ background:"#000", color:"#fff"}}>{item}</button>
                    )
                }else {
                    return (
                        <button key={index} onClick ={() =>{
                            this.props.paginationItem(item)
                        }} >{item}</button>
                    )
                }
            }
           
        })
        return(
            <div>
                <table>
                    <tbody>
                        <tr><th>Name</th></tr>
                        {data}
                    </tbody>
                </table>
                {pagi}
                <div>
                    <input
                    value ={this.state.nameUpdate}
                    onChange={(e) =>{
                    this.setState({
                        nameUpdate: e.target.value
                    })
                }}/>
                <button onClick={() =>{
                    this.props.updateItem({
                        name: this.state.nameUpdate,
                        id: this.state.idUpdate,
                    })
                }}>UPDATE</button></div>
                <div><input onChange={(e) =>{
                    this.setState({
                        nameAdd: e.target.value,
                    })
                }}/>
                <button onClick={() =>{
                    this.props.addItem({
                        name: this.state.nameAdd
                    })
                }}>ADD</button></div>
                <div><input onChange={(e) =>{
                    this.setState({
                        nameSearch: e.target.value
                    })
                }}/>
                <button onClick={() =>{
                    this.props.searchItem({
                        name: this.state.nameSearch,
                        activePage: 1
                    })
                }}>SEARCH</button></div>
            </div>
        )
    }


}

export default Items