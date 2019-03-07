const AllAccounts = (props) => {
var accounts = props.accounts.map((account) => {
    return(
   <div key={account.id}>
    <Account account={account}/>
   </div>
    )
  })
return(
      <div>
        {accounts}
      </div>
    )
}