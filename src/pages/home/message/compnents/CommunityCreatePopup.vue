<template>
  <el-dialog v-model="dialogFormVisible" title="创建群聊" class="my-community-popup">
    <el-form :model="form">
      <el-form-item label="群名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="群头像" :label-width="formLabelWidth">
        <img :src="my_group" alt="" style="background-color: #53D39C; width: 32px; border-radius: 4px; margin-right: 10px">
        <el-upload :show-file-list="false">
          <div>点击上传</div>
        </el-upload>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {reactive, ref, watchEffect} from "vue";
import {watch} from "vue-demi";
import my_group from "@/assets/images/my_group.png";
import {createCommunity} from "@/services";
import {CreateCommunity} from "@/type/api";
import {useStore} from "vuex";
import {ElMessage} from "element-plus";

const props = defineProps(['isOpenPopup'])

const emit = defineEmits(['closePopup'])

const store = useStore()

const dialogFormVisible = ref(false)
const form = reactive({
  name: '',
})
const formLabelWidth = '60px'

watchEffect(() => {
  dialogFormVisible.value = props.isOpenPopup
})

watch(dialogFormVisible, () => {
  dialogFormVisible.value === false && emit("closePopup", dialogFormVisible.value)
})

const submitForm = async () => {
  try {
    const apiParams: CreateCommunity = {
      ownerId: store.state.login.id,
      name: form.name
    }

    const data = await createCommunity(apiParams)
    console.log(data)
    ElMessage({
      message: "恭喜你，建群成功",
      type: "success",
    });
    dialogFormVisible.value = false
    form.name = ''
  }catch (e:any) {
    ElMessage.error(e)
  }
}
</script>

<style lang="less">
  .my-community-popup{
    border-radius: 10px;
  }
</style>