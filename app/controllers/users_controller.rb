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
		if @user.valid?
			#need new redirect
			#redirect_to(:action => "login")	
		else
			flash[:notice] = @user.errors.full_messages
			redirect_to(:action => "new")
		end

	end

end