const AllAccounts = (props) => {
var accounts = props.accounts.map((account) => {
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