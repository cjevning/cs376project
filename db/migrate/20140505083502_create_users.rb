class CreateUsers < ActiveRecord::Migration

  def change
    create_table :users do |t|
    	t.string	:username
    	t.integer 	:age
    	t.string	:gender
    	t.string	:country
    end
  end
end
