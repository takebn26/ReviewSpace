class GroupsController < ApplicationController

  before_action :set_group, only: [:edit, :update]

  def index
    @groups = current_user.groups
  end

  def new
    @group = Group.new
    @users = User.where.not(id: current_user)
  end

  def create
    @group = current_user.groups.new(group_params)

    if @group.save
      redirect_to group_messages_path(@group), notice: 'グループ作成成功'
    else
      flash.now[:alert] = 'グループ作成失敗'
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループ更新成功'
    else
      flash.now[:alert] = 'グループ更新失敗'
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
