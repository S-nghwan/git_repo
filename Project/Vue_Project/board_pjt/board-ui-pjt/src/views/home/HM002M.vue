<template>
    <header>
      Title
    </header>
    <div>
      <span>이름 : <input type="text" v-model="lv_name"></span>
    </div>
    <div>
      <span>이메일 : <input type="text" v-model="lv_email"></span>
    </div>
    <div>
      <span>취미 : <input type="text" v-model="lv_hobby"></span>
    </div>
    <button @click="fn_Submit">전송</button>
    <button @click="fn_Clear">초기화</button>
    <footer>
      Footer
    </footer>
</template>

<script>
export default ({
  name: '',
  data() {
    return {
      lv_name: '',
      lv_email: '',
      lv_hobby: ''
    }
  },
  methods: {
    fn_Clear() {
      this.lv_name = ''
      this.lv_email = ''
      this.lv_hobby = ''
    },
    fn_Submit() {
      alert('데이터 전송!')
    }
  }
})
</script>