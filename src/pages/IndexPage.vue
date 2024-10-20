<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input type="text" id="nickname" v-model="nickname" />
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <input type="text" id="studentCode" v-model="studentCode" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      title: 'วิวัฒนาการของโลกสมัยใหม่.',
      nickname: 'โดนัท',
      firstName: 'ภาคิน',
      secondName: 'อินแถลง',
      studentCode : '6604101365',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>
