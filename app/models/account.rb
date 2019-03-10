class Account < ApplicationRecord
  include ActiveModel::Validations

  # validate :routing_number
  validate do |account|
    account.routing_number
  end

  def routing_number(number)
    d = []
    number.each_char { |char| d << char.to_i }

    d[8] == (3 * (d[0] + d[3] + d[6]) +
             7 * (d[1] + d[4] + d[7]) +
             1 * (d[2] + d[5])
            ) % 10    
  end


end
