class GroupsController < ApplicationController

  before_action :set_group, only: [:edit, :update]

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      redirect_to root_path, notice: 'グループ作成成功'
    else
      flash.now[:alert] = 'グループ作成失敗'
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: 'グループ更新成功'
    else
      flash.now[:alert] = 'グループ更新失敗'
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
