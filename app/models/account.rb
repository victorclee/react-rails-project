class Account < ApplicationRecord

  validates :routing_number, presence: true
  validates :account_number, presence: true
  validates :bank_address, presence: true
  validates :bank_nickname, presence: true

  # class VerifyValidator < ActiveModel::Validator
  #   def verify(routing_number)
  #     d = []
  #     routing_number.each_char { |char| d << char.to_i }

  #     d[8] == (3 * (d[0] + d[3] + d[6]) +
  #              7 * (d[1] + d[4] + d[7]) +
  #              1 * (d[2] + d[5])
  #             ) % 10    
  #   end
  # end

end