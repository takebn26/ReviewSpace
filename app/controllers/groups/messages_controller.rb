class Groups::MessagesController < ApplicationController
  def index
    @group = current_user.groups.find(params[:group_id])
    @groups = current_user.groups
  end
end
