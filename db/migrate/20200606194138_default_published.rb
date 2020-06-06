class DefaultPublished < ActiveRecord::Migration[5.2]
  def change
    change_column :lessons, :published, :string, :default => true

  end
end
