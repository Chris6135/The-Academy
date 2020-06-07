class ChangeLessonsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :lessons, :category_id
    remove_column :lessons, :published
    remove_column :lessons, :body


  end
end
