<template>
  <div class="search-bar">
    <el-icon><Search /></el-icon>搜索
  </div>
  <el-popover
      placement="bottom"
      :width="100"
      trigger="hover"
      popper-style="padding: 0"
  >
    <template #reference>
      <el-icon color="#ffffff" size="20px" style="margin-left: 20px; cursor: pointer"
      ><Plus
      /></el-icon>
    </template>
    <template #default>
      <ul class="popover-menu-list">
        <li @click="openMenuDetail('add-friend')">
          <i class="iconfont icon-tianjiahaoyou"></i>
          <span>添加好友</span>
        </li>
      </ul>
    </template>
  </el-popover>

  <el-dialog
      v-model="dialogVisible"
      title="添加好友"
      width="30%"
  >
    <el-input v-model="input" placeholder="请输入想要添加的用户id" clearable  />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="searchFriend()">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {Plus, Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import {findFriendById} from "@/services";
import {userFriendInfo} from "@/type/api";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";
import {EventBus} from "@/utils";

const dialogVisible = ref(false)

const input = ref('')

const store = useStore()

const bus = new EventBus()

const openMenuDetail = (type: string) => {
  switch (type){
    case  'add-friend':
      dialogVisible.value = true
      break
  }
}

/**
 * 查找好友
 */
const searchFriend = async () => {
  const userFriendInfo: userFriendInfo = {
    userId: store.state.login.id,
    targetId: Number(input.value)
  }
 const data = await findFriendById(userFriendInfo)
  if(data.Code === 0){
    ElMessage({
      message: data.Msg,
      type: "success",
    });
    dialogVisible.value = false
    input.value = ''
    bus.emit("addFriend", true)
  }else{
    ElMessage({
      message: data.Msg,
      type: "error",
    });
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  width: 30vw;
  padding: 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #5eacf1;
  color: #d2e3f8;
  cursor: pointer;
}

.popover-menu-list{
  display: flex;
  flex-direction: column;

  li{
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
    padding-left: 20px;

    i{
      margin-right: 10px;
    }
    
    &:hover{
      background: #f4f4f4;
    }
  }
}
</style>
