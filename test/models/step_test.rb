# == Schema Information
#
# Table name: steps
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text
#  lesson_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class StepTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
