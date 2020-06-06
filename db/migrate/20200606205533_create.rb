class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :publishes do |t|
      t.integer :lesson_id, null: false
      t.integer :category_id, null: false
      t.string :keywords, null: false
      t.timestamps
    end
    add_index :publishes, :lesson_id
    add_index :publishes, :category_id

  end
end
