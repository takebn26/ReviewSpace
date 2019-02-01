class Groups::MessagesController < ApplicationController

  before_action :set_group, :set_messages, only: [:index, :create]

  def index
    @message = Message.new

    respond_to do |format|
      format.html
      format.json do
        @messages = @group.messages.where('id > ?', params[:last_id]).includes(:user)
      end
    end
  end

  def create
    @message = current_user.messages.new(message_params)

    if @message.save
      respond_to do |format|
        format.json { render status: :created }
      end
    else
      respond_to do |format|
        format.json { render status: :internal_server_error }
      end
    end
  end

  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id])
  end

  def set_group
    @groups = current_user.groups
    @group  = @groups.find(params[:group_id])
  end

  def set_messages
    @messages = @group.messages.includes(:user)
  end
end
