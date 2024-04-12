Rails.application.routes.draw do
  devise_for :users
  # , path: '', path_names: {
  # sign_in: 'login',
  # sign_out: 'logout',
  # registration: 'signup'
  # },
  # controllers: {
  #       sessions: 'users/sessions',
  #       registeration: 'users/registrations'
  #     }
  root 'user#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/create_post', to: "posts#create"
  get "/:user_id/posts", to: "posts#index"
  get 'sign_in', to: "user#signin"
  get '/Addpost', to: "user#index"
end
