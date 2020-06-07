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
class Step < ApplicationRecord
    belongs_to :lesson,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name: :Lesson

end
