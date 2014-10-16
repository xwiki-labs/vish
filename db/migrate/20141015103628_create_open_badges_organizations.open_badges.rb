# This migration comes from open_badges (originally 20130225132909)
class CreateOpenBadgesOrganizations < ActiveRecord::Migration
  def change
    create_table :open_badges_organizations do |t|
      t.string :url
      t.string :name
      # t.string :image
      t.string :email
      t.string :description

      t.attachment :image

      t.timestamps
    end
  end
end
