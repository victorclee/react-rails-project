# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times { Account.create!(account_number: "111111111", routing_number: "021000021", bank_address: "201 E Randolph St, Chicago, IL 60602", bank_nickname: "Cloud Gate") }