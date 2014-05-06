class User < ActiveRecord::Base
	validates :age, numericality: { only_integer: true }
	validates :gender, :presence => true
	validates :username, :presence => true
	validates :country, :presence => true
	validates_uniqueness_of :username
end
