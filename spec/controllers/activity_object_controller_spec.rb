require 'spec_helper'

describe ActivityObjectController, controllers: true, debug: true do
	#TODO
	
	context "show_avatar" do
		it 'default_avatar?' do

			@userAO = Factory(:user_vish)

			get :show_avatar, :params[id] => @userAO.activity_object.id.to_i

			assert_response :success
		end
		
		it 'non_existing?'
		it 'custom_avatar?'

	end
end
