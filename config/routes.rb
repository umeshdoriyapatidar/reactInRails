Rails.application.routes.draw do
  devise_for :users ,path: '', path_names: {
  sign_in: 'users/sign_in',
  sign_out: 'users/sign_out',
  registration: 'users/sign_up'
  },
  controllers: {
        sessions: 'users/sessions',
        registeration: 'users/registrations'
      }
  root 'user#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/create_post', to: "posts#create"
  get "/:user_id/posts", to: "posts#index"
  get '/Addpost', to: "user#index"
  get '/users/sign_in', to: "user#index"
  get '/signup', to: "user#index"
  get '/logout', to: "user#index"
end
