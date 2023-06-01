<template>
  {{ fapi }}
  <form-create v-model="fapi" :rule="rule" :option="option" @submit="onSubmit"></form-create>
</template>

<script>
import formCreate from "@form-create/element-ui";

export default {
  data() {
    return {
      fapi: { "ID": "11", "F7ha1nr0ublbmz": "a", "F7901nr0ubx742": "2023-06-01", "F2wu1nr0ud1ifh": "23:19:10" },
      rule: formCreate.parseJson('[{"type":"FcRow","children":[{"type":"col","props":{"span":12},"children":[{"type":"input","field":"ID","title":"工號","info":"","_fc_drag_tag":"input","hidden":false,"display":true,"$required":"必須輸入工號"}],"_fc_drag_tag":"col","hidden":false,"display":true}],"_fc_drag_tag":"row","hidden":false,"display":true},{"type":"FcRow","children":[{"type":"col","props":{"span":12},"children":[{"type":"input","field":"F7ha1nr0ublbmz","title":"输入框","info":"","_fc_drag_tag":"input","hidden":false,"display":true}],"_fc_drag_tag":"col","hidden":false,"display":true}],"_fc_drag_tag":"row","hidden":false,"display":true},{"type":"FcRow","children":[{"type":"col","props":{"span":12},"children":[{"type":"datePicker","field":"F7901nr0ubx742","title":"日期选择器","info":"","_fc_drag_tag":"datePicker","hidden":false,"display":true}],"_fc_drag_tag":"col","hidden":false,"display":true}],"_fc_drag_tag":"row","hidden":false,"display":true},{"type":"FcRow","children":[{"type":"col","props":{"span":12},"children":[{"type":"timePicker","field":"F2wu1nr0ud1ifh","title":"时间选择器","info":"","_fc_drag_tag":"timePicker","hidden":false,"display":true}],"_fc_drag_tag":"col","hidden":false,"display":true}],"_fc_drag_tag":"row","hidden":false,"display":true},{"type":"el-button","props":{"plain":false,"circle":false,"disabled":false,"loading":false},"children":["按钮"],"_fc_drag_tag":"el-button","hidden":false,"display":true}]'),
      option: formCreate.parseJson('{"form":{"labelPosition":"right","size":"small","labelWidth":"125px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false},"submitBtn":true,"resetBtn":false}')
    }
  },
  methods: {
    onSubmit(formData) {
      //todo 提交表单
    }
  }
}
</script>