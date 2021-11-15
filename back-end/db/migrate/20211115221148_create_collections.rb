class CreateCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :collections do |t|
      t.string :collection_name
      t.integer :user_id
    end
  end
end
