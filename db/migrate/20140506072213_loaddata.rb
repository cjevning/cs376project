class Loaddata < ActiveRecord::Migration
  def change
  	q1 = Question.new(:q_num => 1, :q_category => "range", :q_text => "On a scale from 1 to 100, how was this person feeling?", 
  		:img_filename => "p1.jpg", :q_subcategory => "encourage", :target_value => 75, :upper_bound => 100, :choices => "")
  	q1.save(:validate => false)
  	q2 = Question.new(:q_num => 2, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate this painting?",
  		:img_filename => "p2.jpg", :q_subcategory => "encourage", :target_value => 50, :upper_bound => 100, :choices => "")
  	q2.save(:validate => false)
  	q3 = Question.new(:q_num => 3, :q_category => "choice", :q_text => "Which of these words do you think is real?",
  		:img_filename => "p3.jpg", :q_subcategory => "null", :target_value => 2, :upper_bound => 4, :choices => "exultion,flunge,prevoid,choulder")
  	q3.save(:validate => false)
  	q4 = Question.new(:q_num => 4, :q_category => "choice", :q_text => "Which of these characters do you like most?",
  		:img_filename => "p4.jpg", :q_subcategory => "choice", :target_value => 3, :upper_bound => 4, :choices => "A,B,C,D")
  	q4.save(:validate => false)
  end
end