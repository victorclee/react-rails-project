class Api::V1::AccountsController < Api::V1::BaseController
  def index
    respond_with Account.all
  end

  def create
    respond_with :api, :v1, Account.create(account_params)
  end

  def destroy
    respond_with Account.destroy(params[:id])
  end

  def update
    account = Account.find(params["id"])
    account.update_attributes(account_params)
    respond_with account, json: account
  end

  private

  def account_params
    params.require(:account).permit(:account_number, :routing_number, :bank_address, :bank_nickname)
  end
end