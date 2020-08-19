# Feline-Strong
It's a fitness planner app for Felines and Humans where user can create, show ,edit and remove fitnessplans.

## Technologies Used
- React Hooks
- React bootstrap
- Axios
- JSX
- CSS
- HTML
- cURL Scripts

## Links to Repositories and Deployed sites
- [Deployed Application](https://neuroplastic1.github.io/feline-strong-client/)
- [Backend API Repository](https://github.com/Neuroplastic1/feline-strong-server)
- [Backend API URL](https://git.heroku.com/feline-strong-server.git)

## Links to Entity Relation Diagram

https://imgur.com/gallery/KKIucKN

## Planning and process
To build this app first I scetched the wireframes and ERD to make a layout of the data flow through the Django server to react axios in the components.

## User Stories
- As a user, I can sign up
- As a user, I can sign in
- As a user, I can change my password
- As a user, I can sign out
- As a user, I can view all of my created Fitness Plans
- As a user, I can view a single Fitness Plan
- As a user, I can create a Fitness Plan
- As a user, I can edit a Fitness Plan
- As a user, I can delete a Plan

 ## API Information
### Plans
| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/plans/`     | `plans#index`  |
| GET    | `/plans/:id` | `plans#show`   |
| POST   | `/plans`     | `plans#create` |
| PATCH  | `/plans/:id` | `plans#update` |
| DELETE | `/plans/:id` | `plans#destroy` |
