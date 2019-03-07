class Body extends React.Component {
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
    return(
      <div>
        <AllAccounts accounts={this.state.accounts} />
      </div>
    )
  }
}