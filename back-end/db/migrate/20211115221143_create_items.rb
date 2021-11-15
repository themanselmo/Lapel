class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :item_class
      t.float :item_value
      t.integer :collection_id
    end
  end
end
