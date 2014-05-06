# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140506072213) do

  create_table "questions", force: true do |t|
    t.integer "q_num"
    t.string  "q_category"
    t.string  "q_text"
    t.string  "img_filename"
    t.string  "q_subcategory"
    t.integer "target_value"
    t.integer "upper_bound"
    t.string  "choices"
  end

  create_table "responses", force: true do |t|
    t.integer "user_id"
    t.integer "q_id"
    t.string  "stimulus_type"
    t.integer "response_time"
    t.integer "target_value"
    t.integer "response_value"
    t.integer "value_changes"
  end

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at"

  create_table "tests", force: true do |t|
    t.string "stimulus_type"
    t.string "stimulus"
  end

  create_table "users", force: true do |t|
    t.string  "username"
    t.integer "age"
    t.string  "gender"
    t.string  "country"
  end

end
