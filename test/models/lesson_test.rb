# == Schema Information
#
# Table name: lessons
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class LessonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
