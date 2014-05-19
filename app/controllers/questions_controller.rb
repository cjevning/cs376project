class QuestionsController < ApplicationController  
	def index
		@id = params[:id]
		@test = rand(4)
		@partial = rand(3)
		@questions = Question.where('id = ?', @id).find(:all)
	end

	def answer
		user = session["user"]
		id = params[:old_id].to_i
		type = params[:stimulus_type]
		time = params[:response_time]
		target = params[:target_value]
		changes = params[:value_changes]
		qtype = params[:qtype]
		age = session["age"]
		country = session["country"]
		gender = session["gender"]
		value = 0
		if (qtype == "range") 
			value = params[:value]
		else 
			value = params[id.to_s]
		end
		newID = id + 1
		response = Response.new(:username => user, :age => age, :country => country, :gender => gender, :q_id => id, :stimulus_type => type, :response_time => time, :target_value => target, :response_value => value, :value_changes => changes)
	  	if response.save
	    	redirect_to(:action => "index", :id => newID)
	    else
	    	flash[:notice] = "Something went wrong! Please answer this question again."
	    	redirect_to(:action => "index", :id => id)
	    end



		
		
	end

	def viewData
		@responses = Response.find(:all)
	end
end