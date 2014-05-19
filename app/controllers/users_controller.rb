class UsersController < ApplicationController  

	def index
	end

	def login		
	end

	def post_login
	end

	def new
		@user = User.new
	end

	def create
		params.permit!
		@user = User.new(params[:user])
		session["user"] = @user.username
		session["age"] = @user.age
		session["gender"] = @user.gender
		session["country"] = @user.country
		if @user.valid?
			@user.save
			redirect_to(:controller => "Questions", :action => "index", :id => 1)	
		else
			flash[:notice] = @user.errors.full_messages
			redirect_to(:action => "new")
		end

	end

end