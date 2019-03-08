class Body extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewAccount = this.addNewAccount.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateAccount = this.updateAccount.bind(this) 
  }



  handleUpdate(account){
    fetch(`/api/v1/accounts/${account.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({account: account}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateAccount(account)
      })
  }
  updateAccount(account){
    let newAccounts = this.state.accounts.filter((f) => f.id !== account.id)
    newAccounts.push(account)
    this.setState({
      accounts: newAccounts
    })
  }  

  handleDelete(id){
    fetch(`/api/v1/accounts/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteAccount(id)
      })
  }  


deleteAccount(id){
    newAccounts = this.state.accounts.filter((account) => account.id !== id)
    this.setState({
      accounts: newAccounts
    })
  }




handleFormSubmit(routing_number, account_number, bank_address, bank_nickname){
  let body = JSON.stringify({account: {routing_number: routing_number, account_number: account_number, bank_address: bank_address, bank_nickname: bank_nickname} })
fetch('/api/v1/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()})
  .then((account)=>{
    this.addNewAccount(account)
  })
  
}


addNewAccount(account){
  this.setState({
    accounts: this.state.accounts.concat(account)
  })
}




componentDidMount(){
    fetch('/api/v1/accounts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ accounts: data }) });
  }
render(){
    return(
      <div>
        <NewAccount handleFormSubmit={this.handleFormSubmit}/>
        <AllAccounts accounts={this.state.accounts} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
      </div>
    )
  }
}




