class Step < ApplicationRecord
    belongs_to :lesson,
    primary_key: :id,
    foreign_key: :lesson_id,
    class_name: :Lesson

end
