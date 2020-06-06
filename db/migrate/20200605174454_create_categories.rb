class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
        t.string "title", null: false
        t.string "name", null: false
        t.timestamps
      end

      drop_table :catagories
  end
end
