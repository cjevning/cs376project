class Responses < ActiveRecord::Migration
  def change
  	create_table :responses do |t|
	  t.string	:username
	  t.integer :age
	  t.string	:country
	  t.string	:gender
	  t.integer	:q_id
	  t.string	:stimulus_type
	  t.integer	:response_time
	  t.integer	:target_value
	  t.integer	:response_value
	  t.integer	:value_changes
	end
  end
end
