<template>
  <div>
    <el-row :gutter="16">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="24">
          <el-row type="flex" justify="start" align="top">
            <el-col :span="24">
              <el-form-item label="单行文本" prop="field108">
                <el-input v-model="formData.field108" placeholder="请输入单行文本" clearable
                  :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="23">
          <el-row type="flex" justify="start" align="top">
            <el-col :span="15">
              <el-row>
                <el-col :span="20">
                  <el-form-item label="单行文本" prop="field106">
                    <el-input v-model="formData.field106" placeholder="请输入单行文本" clearable
                      :style="{width: '100%'}"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field108: undefined,
        field106: undefined,
      },
      rules: {
        field108: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field106: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
