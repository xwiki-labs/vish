require 'spec_helper'

describe ActivityObjectController, controllers: true, debug: true do
	
	context "show_avatar" do
		it 'default_avatar?' do

			@userAO = Factory(:user_vish)
			
			get :show_avatar, :params => { id: @userAO.activity_object.id }

			assert_response :success
		end

		it 'custom_avatar?' do
			@picture = Factory(:user_vish)
			@userAO = Factory(:user_vish, avatar: "http://lorempixel.com/400/200/sports/" )
			get :show_avatar, :params => { id: @userAO.activity_object.id }
			assert_response :success
		end
	end
end
