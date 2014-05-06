class QuestionsController < ApplicationController  
	def index
		@id = params[:id]
		@questions = Question.where('id = ?', @id).find(:all)
	end

	def answer
		user = session["user"]
		#finish response stuff
		newID = params[:old_id].to_i + 1
		redirect_to(:action => "index", :id => newID)
	end
end