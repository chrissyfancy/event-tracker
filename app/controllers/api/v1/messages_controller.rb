class Api::V1::MessagesController < Api::ApiController
  def create
    if params[:message].present?
      ActionCable.server.broadcast "chat_channel", message: params[:message], user: current_user.email
      render json: { message: params[:message], user: current_user.email }, status: :accepted
    else
      render json: { errors: "bad request" }, status: :bad_request
    end
  end
end
