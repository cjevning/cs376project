class Tests < ActiveRecord::Migration
  def change
  	create_table :tests do |t|
	  t.string	:stimulus_type
	  t.string	:stimulus
	end
  end
end
