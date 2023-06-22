<template>
  <el-dialog v-model="openMyMessage" :modal="false" width="25%" :show-close="false" class="my-info-dialog">
    <template #header>
      <div class="el-dialog-header" >
        <MyAvatar src="ic_avatar_02" :size="52" class="dialog-header-photo"></MyAvatar>
        <div class="dialog-header-name">{{store.state.login.name}}</div>
      </div>
    </template>
      <div class="el-dialog-body">
        <div class="dialog-body-id">用户id：{{store.state.login.id}}</div>
        <div class="dialog-body-detail">
          <div class="body-detail-title">个人信息</div>
          <ul class="body-detail-list">
            <li><span class="detail-list-first">昵称</span><span class="detail-list-content">{{store.state.login.name}}</span></li>
            <li><span class="detail-list-first">性别</span><span class="detail-list-content">-</span></li>
            <li><span class="detail-list-first">年龄</span><span class="detail-list-content">-</span></li>
            <li><span class="detail-list-first">生日</span><span class="detail-list-content">-</span></li>
            <li><span class="detail-list-first">电话号码</span><span class="detail-list-content">-</span></li>
            <li><span class="detail-list-first">邮箱</span><span class="detail-list-content">-</span></li>
          </ul>
        </div>
      </div>
    <template #footer>
      <div class="el-dialog-footer">
        <el-button type="primary" style="width: 300px">编辑资料</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {ref, watchEffect} from "vue";
import MyAvatar from "@/components/MyAvatar.vue";
import {useStore} from "vuex";

const store = useStore()

const props = defineProps(["openMyMessage"])

const openMyMessage = ref(false)

watchEffect(() => {
  openMyMessage.value = props.openMyMessage
})

</script>

<style lang="less">
.my-info-dialog{
  border-radius: 10px;
}

.my-info-dialog .el-dialog__header {
  padding: 0;
  margin-right: 0;
}

.my-info-dialog .el-dialog__body{
  padding: 0;
}

.el-dialog-header{
  height: 150px;
  background-image: url("@/assets/images/fox.jpeg");
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: relative;

  .dialog-header-photo{
    position: absolute;
    left: 20px;
    bottom: -26px;
  }

  .dialog-header-name{
    position: absolute;
    bottom: 0;
    left: 78px;
    color: #fff;
    font-size: 20px;
  }
}

.el-dialog-body{
  min-height: 100px;
  position: relative;
  .dialog-body-id{
    position: absolute;
    top: 5px;
    left: 78px;
    font-size: 12px;
    color: #666;
  }

  .dialog-body-detail{
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;

    .body-detail-title{
      font-size: 16px;
    }

    .body-detail-list{
      margin-top: 10px;
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 20px;

      li{
        margin-bottom: 10px;

        .detail-list-first{
          display: inline-block;
          width: 100px;
          font-size: 12px;
          color: #666;
        }

        .detail-list-content{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}

.el-dialog-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>