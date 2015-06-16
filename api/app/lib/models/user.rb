require 'sinatra/activerecord'

class User < ActiveRecord::Base
  EMAIL_REGEX = /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\z/i
  validates :email, :presence => true, :length => { :within => 5..100 },
  :format=>EMAIL_REGEX, :confirmation => true, :uniqueness=>true
  validates :password, :presence => true
end