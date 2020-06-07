class BetterNamePublish2 < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :lesson_id, null: false
      t.integer :category_id, null: false
      t.string :keywords, null: false
      t.timestamps
    end
    add_index :products, :lesson_id
    add_index :products, :category_id
    drop_table :lives

  end
end
