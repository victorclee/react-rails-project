class Body extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewAccount = this.addNewAccount.bind(this)
  }






handleFormSubmit(routing_number, account_number, bank_address, bank_nickname){
  let body = JSON.stringify({account: {routing_number: routing_number, account_number: account_number, bank_address: bank_address, bank_nickname: bank_nickname} })
fetch('http://localhost:3000/api/v1/accounts', {
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
        <AllAccounts accounts={this.state.accounts} />
      </div>
    )
  }
}