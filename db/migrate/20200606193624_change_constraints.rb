class ChangeConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column :lessons, :body, :string, :null => true
    change_column :lessons, :published, :string, :null => true

  end
end
