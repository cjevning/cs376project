class Questions < ActiveRecord::Migration
  def change
  	create_table :questions do |t|
	  t.integer	:q_num
	  t.string	:q_category
	  t.string	:q_text
	  t.string	:img_filename
	  t.string	:q_subcategory
	  t.integer	:target_value
	  t.integer	:upper_bound
	  t.string	:choices
	end
  end
end
