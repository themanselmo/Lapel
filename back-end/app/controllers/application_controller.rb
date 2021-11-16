class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/user/:username' do
    user = User.find_by(username: params[:username])
    user.to_json
  end

  get '/user/collections/:username' do
    User.find_by(username: params[:username]).to_json(:include => {:collections => {:include => :items}})
  
  end

  get '/collections/:id' do
    Collection.find_by(id: params[:id]).to_json(:include => :items)
  end

  post '/collections' do
    Collection.create(collection_name: params[:name], user_id: params[:user_id]).to_json(:include => :items)
  end

  delete '/collection/:id' do
    Collection.find(params[:id]).destroy
  end
end
