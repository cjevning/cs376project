class Loaddata < ActiveRecord::Migration
  def change
  	q1 = Question.new(:q_num => 1, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
  		:img_filename => "p1.jpg", :q_subcategory => "encourage", :target_value => 50, :upper_bound => 100, :choices => "")
  	q1.save(:validate => false)
  	q2 = Question.new(:q_num => 2, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
  		:img_filename => "p2.jpg", :q_subcategory => "encourage", :target_value => 60, :upper_bound => 100, :choices => "")
  	q2.save(:validate => false)
    q5 = Question.new(:q_num => 3, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
      :img_filename => "p5.jpg", :q_subcategory => "encourage", :target_value => 40, :upper_bound => 100, :choices => "")
    q5.save(:validate => false)
    q10 = Question.new(:q_num => 4, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
      :img_filename => "p10.jpg", :q_subcategory => "encourage", :target_value => 35, :upper_bound => 100, :choices => "")
    q10.save(:validate => false)
    q13 = Question.new(:q_num => 5, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
      :img_filename => "p13.jpg", :q_subcategory => "encourage", :target_value => 70, :upper_bound => 100, :choices => "")
    q13.save(:validate => false)
    q15 = Question.new(:q_num => 6, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
      :img_filename => "p15.jpg", :q_subcategory => "encourage", :target_value => 50, :upper_bound => 100, :choices => "")
    q15.save(:validate => false)
  end
end