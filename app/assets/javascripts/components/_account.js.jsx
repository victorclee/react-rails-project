class Account extends React.Component{
  
  render(){
    return(
      <div>
        <h1>{this.props.account.bank_nickname}</h1>
        <p>{this.props.account.bank_address}</p>
        <p>{this.props.account.routing_number}</p>
        <p>{this.props.account.account_number}</p>
        <button  onClick={() => this.props.handleDelete(this.props.account.id)}>Delete</button>
      </div>
    )      
  }
}