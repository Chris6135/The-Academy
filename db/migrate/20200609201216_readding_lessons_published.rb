class ReaddingLessonsPublished < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :published, :boolean, :default => false
  end
end
