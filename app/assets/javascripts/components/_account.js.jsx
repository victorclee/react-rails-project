class Account extends React.Component{

constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }


  handleEdit(){
    this.setState({
      editable: !this.state.editable
    })
  }

  
  render(){

    let bank_nickname = this.state.editable ? <input type='text' ref={input => this.bank_nickname = input} defaultValue={this.props.fruit.bank_nickname}/>:<h3>{this.props.fruit.bank_nickname}</h3>
    let bank_address = this.state.editable ? <input type='text' ref={input => this.bank_address = input} defaultValue={this.props.fruit.bank_address}/>:<p>{this.props.fruit.bank_address}</p>
    let routing_number = this.state.editable ? <input type='text' ref={input => this.routing_number = input} defaultValue={this.props.fruit.routing_number}/>:<p>{this.props.fruit.routing_number}</p>
    let account_number = this.state.editable ? <input type='text' ref={input => this.account_number = input} defaultValue={this.props.fruit.account_number}/>:<p>{this.props.fruit.account_number}</p>







    return(
      <div>
        {bank_nickname}
        {bank_address}
        {routing_number}
        {account_number}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.account.id)}>Delete</button>
      </div>
    )      
  }
}















