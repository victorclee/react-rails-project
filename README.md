## Deployed to Heroku
https://makingdatbank.herokuapp.com/

## Ruby version
ruby 2.4.1p111

Rails 5.2.2

## System dependencies
`gem 'responders'`

https://github.com/plataformatec/responders

`gem 'react-rails'`

https://github.com/reactjs/react-rails

## Deployment instructions
Download code at https://github.com/victorclee/avail-project

run `bundle`

### Database creation
`rake db:create`

### Database initialization
`rake db:migrate`

run `rails s` locally

## Current state of the app (completed features)
The user is able to Create, Read, Update, and Delete a bank account to the Rails API through a React frontend. All four fields of the bank account (routing number, account number, bank address, and bank nickname) have `presence: true` validations. 

## Things I learned 

React is all about components! 

## Important concepts learned and still processing
Components and props

State and lifecycle

Stateful vs Stateless

## Items still to complete on this project
Routing number validation. All the fields have validations for `presence: true`. I have attempted to build a custom validator for the routing number (as you can see in my commented out code in `accounts.rb`) but have yet to complete it. 

HTML and CSS. I have focused my efforts in learning and using React, so the layout is really bare-boned.

# Takeaway
Although I wasn't able to bring this project to full completion in given time, I am very happy that I got to learn React, and built a simple but functioning CRUD interface. Excited to learn more!

## Super useful resources throughout this project:

https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419

https://medium.com/teamsubchannel/react-component-patterns-e7fb75be7bb0

https://www.youtube.com/watch?v=YaZg8wg39QQ
