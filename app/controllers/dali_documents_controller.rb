class DaliDocumentsController < ApplicationController
	  include SocialStream::Controllers::Objects

    before_filter :merge_json_params
    before_filter :cors_preflight_check, :only => [:create]
    after_filter :cors_set_access_control_headers, :only => [:create, :merge_json_params]
    skip_load_and_authorize_resource :only => [:create_document, :update_document]
    skip_before_filter  :verify_authenticity_token

    def new
      new! do |format|
        format.full
      end
    end

    def create_document

      dd = DaliDocument.new
      dd.json = params[:dali_document].to_json
      dd.owner_id = params[:user_data]
      dd.author_id = params[:user_data]
      dd.save!

      render json: { dali_id: dd.id}
    end

    def update_document
      dd = DaliDocument.find(params[:id])
      dd.json = params[:dali_document].to_json
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
    
 
private
  
  #If you dear programmer are asking ¡what is this method doing', just to mention, rails makes a terrible conversion from json to Ruby arrays
  #and basically changes all empty arrays for nils (this is for security purposes, but seems like killing flies by cannonballs)
  #So we need to fix this somehow because our json app does things like that for some reason. I Hope it helped

  def merge_json_params
    if request.format.json?
      body = request.body.read
      request.body.rewind
      params.merge!(ActiveSupport::JSON.decode(body)) unless body == ""
    end
  end

end
