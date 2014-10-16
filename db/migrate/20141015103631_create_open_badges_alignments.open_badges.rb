# This migration comes from open_badges (originally 20130226081253)
class CreateOpenBadgesAlignments < ActiveRecord::Migration
  def change
    create_table :open_badges_alignments do |t|
      t.string :url
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
