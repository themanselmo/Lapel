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

  get '/user/id/:id' do
    User.find(params[:id])[:username].to_json
  end

  get '/user/collections/:username' do
    User.find_by(username: params[:username]).to_json(:include => {:collections => {:include => :items}})
  end

  get '/collections/:id' do
    Collection.find_by(id: params[:id]).to_json(:include => :items)
  end

  get '/feed/:username' do 
    # binding.pry
    current_user = User.find_by(username: params[:username])
    Collection.where.not(user_id: current_user.id).to_json(:include => :items)
  end

  post '/collections' do
    Collection.create(collection_name: params[:name], user_id: params[:user_id]).to_json(:include => :items)
  end

  delete '/collection/:id' do
    Collection.find(params[:id]).destroy
  end

  post '/items' do
    Item.create(item_name: params[:name], item_class: params[:item_class], item_value: params[:item_value], collection_id: params[:collection_id]).to_json
  end

  delete '/items/:id' do
    item = Item.find(params[:id])
    item.destroy
    item.to_json
  end

  patch '/items/:id' do
    item = Item.find(params[:id])
    item.update(
      item_name: params[:item_name],
      item_value: params[:item_value]
    )
    item.to_json
  end
  
  post '/user/new' do
    User.find_by(username: params[:username]) == nil ? 
      User.create(username: params[:username], password: params[:password]).to_json(:include => {:collections => {:include => :items}})
       : "User Exists".to_json
  end

end
