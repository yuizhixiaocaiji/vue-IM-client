<template>
  <el-footer>
    <section class="el-footer-icon">
      <el-popover
          placement="top"
          :width="320"
          trigger="click"
      >
        <template #reference>
          <i class="iconfont icon-biaoqing"></i>
        </template>
        <template #default>
          <ul class="popover-face-list">
            <li v-for="face of faceList" :key="face" @click="sendMsg(4, face)">
              <img :src="face" alt="">
            </li>
          </ul>
        </template>
      </el-popover>
      <el-upload :show-file-list="false"
                 style="display: flex; align-items: center"
                 action="/api/attach/upload"
                 :on-success="uploadSuccess"
      >
        <el-icon :size="20" color="#666"><Picture /></el-icon>
      </el-upload>
      <el-icon :size="20" color="#666"><Film /></el-icon>
      <el-icon :size="24" color="#666"><Postcard /></el-icon>
      <el-icon :size="22" color="#666"><FolderOpened /></el-icon>
      <el-icon :size="20" color="#666"><Microphone /></el-icon>
    </section>
    <section class="el-footer-input">
      <el-input
          v-model="textarea"
          :rows="5"
          type="textarea"
          placeholder="发送给"
          resize="none"
      />
    </section>
    <section class="el-footer-button">
      <el-button :disabled="textarea===''" @click="sendMsg(1)">发送</el-button>
    </section>
  </el-footer>
</template>

<script setup lang="ts">
import { Film, FolderOpened, Microphone, Postcard} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import {UserMsg} from "@/type/global";
import {useStore} from "vuex";
import {ADD_USER_MESSAGE} from "@/store/modules/userMsg.ts";
import {EventBus} from "@/utils";
import face_2 from "@/assets/face/face_2.png";
import face_3 from "@/assets/face/face_3.png";
import face_4 from "@/assets/face/face_4.png";
import face_5 from "@/assets/face/face_5.png";
import face_6 from "@/assets/face/face_6.png";
import face_7 from "@/assets/face/face_7.png";
import face_8 from "@/assets/face/face_8.png";
import face_9 from "@/assets/face/face_9.png";
import face_10 from "@/assets/face/face_10.png";
import face_11 from "@/assets/face/face_11.png";
import face_12 from "@/assets/face/face_12.png";
import face_13 from "@/assets/face/face_13.png";
import face_14 from "@/assets/face/face_14.png";
import face_15 from "@/assets/face/face_15.png";
import face_16 from "@/assets/face/face_16.png";
import face_17 from "@/assets/face/face_17.png";

const bus = new EventBus()

const store = useStore()

const props = defineProps(["userToInfo"])

const textarea = ref('')

let msg = reactive({})

const faceList = ref([face_2,face_3,face_4,face_5,face_6,face_7,face_8,face_9,face_10,face_11,face_12,face_13,face_14,face_15,face_16,face_17])

const sendMsg = (media,src?) => {
  switch (media) {
    case 1:
      msg = createMsgContext(media)
      textarea.value = ''
      break
    case 4:
      msg = createMsgContext(media, src)
  }

  store.dispatch("userMsg/" + ADD_USER_MESSAGE, msg)
  bus.emit('sendMsg', msg)
}

const createMsgContext = (media, src?) => {
  const msg: UserMsg= {
    id: store.state.userMsg.userMsg.length + 1,
    userId: store.state.login.id,
    dstId: props.userToInfo.userId ,
    media: media,
    type: props.userToInfo.isGroup ? 2 : 1,
    createTime: new Date().getTime(),
    content: ''
  }
  switch (media){
    case 1:
      msg.content = textarea.value
      break
    case 4:
      msg.content = src
  }
  return msg
}

/**
 * 上传成功的回调
 */
const uploadSuccess = (response) => {
  console.log(response)
  const picUrl = (response['Data'] as string).replace("./", import.meta.env.VITE_APP_BASE_URL)
  sendMsg(4, picUrl)
}

</script>

<style lang="less" scoped>
  .el-footer{
    display: flex;
    flex-direction: column;
    height: 200px;
    padding-top: 10px;

    &-icon{
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .el-icon{
        margin-right: 10px;
        cursor: pointer;
      }

      .icon-biaoqing{
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    
    &-input{
      flex: 1;
    }

    &-button{
      padding-bottom: 8px;
      display: flex;
      justify-content: flex-end;

      .el-button{
        width: 100px;
      }
    }
  }

  .popover-face-list{
    display: flex;
    flex-wrap: wrap;

    li{
      padding: 5px;
      cursor: pointer;
      
      &:hover{
        background: #f4f4f4;
      }
    }
  }
</style>