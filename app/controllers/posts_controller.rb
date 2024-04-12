class PostsController < ApplicationController
  before_action :find_user, only: [:index]
  def index
    @posts = @user.posts
    render json: @posts
  end

  def create
    @user = User.find(params[:post][:user_id])
    @post = @user.posts.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
  private
  def post_params
    params.require(:post).permit(:title, :description, :image)
  end

  def find_user
    @user = User.find(params[:user_id])
  end
end
