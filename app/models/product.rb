# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  lesson_id   :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord

    belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category

    belongs_to :lesson,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name: :Lesson
end
