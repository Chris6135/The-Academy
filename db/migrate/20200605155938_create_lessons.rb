class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false
      t.boolean :published, null: false 

      t.timestamps
    end

    create_table :catagories do |t|
      t.string :title, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :lessons, :category_id
    add_index :lessons, :author_id
  end
end
