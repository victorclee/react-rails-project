const NewAccount = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.routing_number.value, formFields.account_number.value, formFields.bank_address.value, formFields.bank_nickname.value); e.target.reset(); e.preventDefault(); }
}>
     <input ref={input => formFields.bank_nickname = input} placeholder='Bank nickname' />
     <input ref={input => formFields.bank_address = input} placeholder='Bank address' />
     <input ref={input => formFields.routing_number = input} placeholder='Routing number'/>
     <input ref={input => formFields.account_number = input} placeholder='Account number' />
     <button>Submit</button>
    </form>
  )
}