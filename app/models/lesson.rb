# == Schema Information
#
# Table name: lessons
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Lesson < ApplicationRecord

    has_one :product,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name:  :Product,
    dependent: :delete

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User


    has_many :steps,
    :dependent => :delete_all



end
