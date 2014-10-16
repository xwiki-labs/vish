# This migration comes from open_badges (originally 20130226073206)
class CreateOpenBadgesTags < ActiveRecord::Migration
  def change
    create_table :open_badges_tags do |t|
      t.string :name

      t.timestamps
    end
  end
end
