require "sinatra/base"
class Thermometer < Sinatra::Base
enable :sessions

get '/' do
    erb(:index)
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temperature }.to_json
  end

  post "/temperature" do
    thermostat = Thermostat.instance
    thermostat.update(params[:temperature])
    { status: 200 }.to_json
  end

  run! if app_file == $0

end
