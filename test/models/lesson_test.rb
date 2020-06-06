# == Schema Information
#
# Table name: lessons
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  author_id   :integer          not null
#  category_id :integer          not null
#  published   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class LessonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
