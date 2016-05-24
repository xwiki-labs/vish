class DaliDocument < ActiveRecord::Base
  # attr_accessible :title, :body
  include SocialStream::Models::Object
  define_index do
    activity_object_index
  end

end
