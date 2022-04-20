class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?
    
  
  
  
    def configure_permitted_parameters  #受け取るカラムの追加#
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
    
end
