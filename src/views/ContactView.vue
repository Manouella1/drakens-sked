<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
    }
  }
};
</script>

<template>
<div>
  <h1>KONTAKTA OSS</h1>
<div class="contact-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Namn:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Meddelande:</label>
        <textarea id="message" v-model="message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
.contact-form {
  width: 400px;
  margin: 0 auto;
  display: flex;
    flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
