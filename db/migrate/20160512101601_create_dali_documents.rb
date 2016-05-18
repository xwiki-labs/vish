class CreateDaliDocuments < ActiveRecord::Migration
  def change
    create_table :dali_documents do |t|
    	t.datetime "created_at",				:null => false
    	t.datetime "updated_at",				:null => false
    	t.integer  "activity_object_id"
		  t.text     "json"
    	t.timestamps
    end
  end
end
