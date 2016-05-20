class DaliDocumentsController < ApplicationController
	  include SocialStream::Controllers::Objects

    def new
      new! do |format|
        format.full
      end
    end

    def edit
      edit! do |format|
        format.full
      end
    end

    def show
      show! do |format|
        format.full
      end
    end

    def delete
      destroy! do |format|
        format.all { redirect_to user_path(current_subject) }
      end
    end

end
