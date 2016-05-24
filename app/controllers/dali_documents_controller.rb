class DaliDocumentsController < ApplicationController
	  include SocialStream::Controllers::Objects

    before_filter :cors_preflight_check, :only => [:create]
    after_filter :cors_set_access_control_headers, :only => [:create]
    skip_load_and_authorize_resource :only => [ :create_document]
    skip_before_filter  :verify_authenticity_token

    def new
      new! do |format|
        format.full
      end
    end

    def create_document

      dd = DaliDocument.new
      dd.json = params[:dali_document][:json].to_json
      dd.owner_id = params[:user_data]
      dd.author_id = params[:user_data]
      dd.save!

      render json: { dali_id: dd.id}
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
