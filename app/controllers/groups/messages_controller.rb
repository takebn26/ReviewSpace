class Groups::MessagesController < ApplicationController

  before_action :set_group, :set_messages, only: [:index, :create]

  def index
    @message = Message.new
  end

  def create
    @message = current_user.messages.new(message_params)

    if @message.save
      redirect_to group_messages_path(@group), notice: 'メッセージ送信成功'
    else
      flash.now[:alert] = 'メッセージ送信失敗'
      render :index
    end
  end

  def message_params
    params.require(:message).permit(:body).merge(group_id: params[:group_id])
  end

  def set_group
    @group  = current_user.groups.find(params[:group_id])
    @groups = current_user.groups
  end

  def set_messages
    @messages = @group.messages.includes(:user)
  end
end
