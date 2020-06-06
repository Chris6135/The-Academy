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
class Lesson < ApplicationRecord
    belongs_to :author,
    class_name: :User
    
    belongs_to :category
end
