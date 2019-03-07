class AllAccounts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/accounts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ accounts: data }) });
  }


render(){

 var accounts = this.state.accounts.map((account) => {
  return(
   <div key={account.id}>
    <h1>{account.bank_nickname}</h1>
    <p>{account.bank_address}</p>
    <p>{account.routing_number}</p>
    <p>{account.account_number}</p>
   </div>
  )
 })
  return(
    <div>
      {accounts}
    </div>
    )
  }

}