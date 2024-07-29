<template>
    <header>
      Title
    </header>

      Content
      <div>
        <button @click="fn_Login">로그인</button>
        <button @click="fn_Join">회원가입</button>
      </div>

    <footer>
      Footer
    </footer>
</template>

<script>
  import router from '@/router';
import { defineComponent } from 'vue'

  export default defineComponent ({
    name: '',

    methods: {
      fn_Login() {
        alert('로그인 불가 입니다.')
      },
      fn_Join() {
        router.push({name: 'HM002M', params: {}})
      }
    } // End Methods
  })
</script>