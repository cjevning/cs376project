class Loaddata < ActiveRecord::Migration
  def change
  	q1 = Question.new(:q_num => 1, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
  		:img_filename => "p1.jpg", :q_subcategory => "encourage", :target_value => 50, :upper_bound => 100, :choices => "")
  	q1.save(:validate => false)
  	q2 = Question.new(:q_num => 2, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
  		:img_filename => "p2.jpg", :q_subcategory => "encourage", :target_value => 60, :upper_bound => 100, :choices => "")
  	q2.save(:validate => false)
  	q3 = Question.new(:q_num => 3, :q_category => "choice", :q_text => "Which of these words do you think is real?",
  		:img_filename => "p3.jpg", :q_subcategory => "null", :target_value => 2, :upper_bound => 4, :choices => "exultion,flunge,prevoid,choulder")
  	q3.save(:validate => false)
  	q4 = Question.new(:q_num => 4, :q_category => "choice", :q_text => "Which of these characters do you like most?",
  		:img_filename => "p4.jpg", :q_subcategory => "choice", :target_value => 3, :upper_bound => 4, :choices => "A,B,C,D")
  	q4.save(:validate => false)
    q5 = Question.new(:q_num => 5, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
      :img_filename => "p5.jpg", :q_subcategory => "encourage", :target_value => 40, :upper_bound => 100, :choices => "")
    q5.save(:validate => false)
    q6 = Question.new(:q_num => 6, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
      :img_filename => "p6.jpg", :q_subcategory => "encourage", :target_value => 30, :upper_bound => 100, :choices => "")
    q6.save(:validate => false)
    q7 = Question.new(:q_num => 7, :q_category => "range", :q_text => "On a scale from 1 to 100, how much do you like this chinese character?", 
      :img_filename => "p7.jpg", :q_subcategory => "encourage", :target_value => 25, :upper_bound => 100, :choices => "")
    q7.save(:validate => false)
    q8 = Question.new(:q_num => 8, :q_category => "choice", :q_text => "Which of these words do you think is real?",
      :img_filename => "p8.jpg", :q_subcategory => "null", :target_value => 4, :upper_bound => 4, :choices => "evacso,detetron,benephile,corolan")
    q8.save(:validate => false)
    q9 = Question.new(:q_num => 9, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
      :img_filename => "p9.jpg", :q_subcategory => "encourage", :target_value => 65, :upper_bound => 100, :choices => "")
    q9.save(:validate => false)
    q10 = Question.new(:q_num => 10, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
      :img_filename => "p10.jpg", :q_subcategory => "encourage", :target_value => 35, :upper_bound => 100, :choices => "")
    q10.save(:validate => false)
    q11 = Question.new(:q_num => 11, :q_category => "range", :q_text => "On a scale from 1 to 100, how much do you like this chinese character?", 
      :img_filename => "p11.jpg", :q_subcategory => "encourage", :target_value => 75, :upper_bound => 100, :choices => "")
    q11.save(:validate => false)
    q12 = Question.new(:q_num => 12, :q_category => "choice", :q_text => "Which of these characters do you like most?",
      :img_filename => "p12.jpg", :q_subcategory => "choice", :target_value => 1, :upper_bound => 4, :choices => "A,B,C,D")
    q12.save(:validate => false)
    q13 = Question.new(:q_num => 13, :q_category => "range", :q_text => "On a scale from 1 to 100, how happy is this person?", 
      :img_filename => "p13.jpg", :q_subcategory => "encourage", :target_value => 70, :upper_bound => 100, :choices => "")
    q13.save(:validate => false)
    q14 = Question.new(:q_num => 14, :q_category => "range", :q_text => "On a scale from 1 to 100, how much do you like this chinese character?", 
      :img_filename => "p14.jpg", :q_subcategory => "encourage", :target_value => 60, :upper_bound => 100, :choices => "")
    q14.save(:validate => false)
    q15 = Question.new(:q_num => 15, :q_category => "range", :q_text => "On a scale from 1 to 100, how would you rate the quality (good/bad) of this painting?",
      :img_filename => "p15.jpg", :q_subcategory => "encourage", :target_value => 50, :upper_bound => 100, :choices => "")
    q15.save(:validate => false)
    q16 = Question.new(:q_num => 16, :q_category => "choice", :q_text => "Which of these words do you think is real?",
      :img_filename => "p16.jpg", :q_subcategory => "null", :target_value => 1, :upper_bound => 4, :choices => "slithy,toves,frumious,uffish")
    q16.save(:validate => false)
    q17 = Question.new(:q_num => 17, :q_category => "choice", :q_text => "Which of these characters do you like most?",
      :img_filename => "p17.jpg", :q_subcategory => "choice", :target_value => 2, :upper_bound => 4, :choices => "A,B,C,D")
    q17.save(:validate => false)
  end
end