class DaliDocument < ActiveRecord::Base
  # attr_accessible :title, :body
  include SocialStream::Models::Object
  

end
