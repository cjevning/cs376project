class Response < ActiveRecord::Base
	validates :response_value, :presence => true
end