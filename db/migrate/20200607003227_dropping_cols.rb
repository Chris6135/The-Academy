class DroppingCols < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :name
    remove_column :products, :keywords
  end
end
