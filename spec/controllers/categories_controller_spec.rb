require 'spec_helper'

describe CategoriesController, controllers: true do
	render_views

    before do
      @user = Factory(:user_vish)
      sign_in @user
    end

	describe "renders" do
		it "user categories" do
			get :index
			# Make URL user_path(@user) + "?tab=categories"
			expect(response).to redirect_to(user_path(@user) + "?tab=categories")
		end

		it "show_favorites" do 
			get :show_favorites
			# Make URL favourites categories/favorites
			# binding.pry
			expect(response).to have_http_status(200)
		end

		it "list_categories" do
			get :list_categories
			expect(response).to assert_false
		end

		it "create" do

		end

		it "update" do

		end
		
		it "categorize" do

		end

		it "settings" do

		end

	end



end
