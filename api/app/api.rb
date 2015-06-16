# lib/api.rb

require 'sinatra/activerecord'
Dir["app/lib/**/*.rb"].each{ |f| require File.absolute_path(f)}

class PasswebAPI < Sinatra::Base
  register Sinatra::ActiveRecordExtension
end
