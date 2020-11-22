<template>
  <div class="profile__wrapper">
    <form @submit.prevent="userUpdate(signupInput)" action=""
            v-on:load="onAppeared" v-show="appeared">
        <div class="form__item">
          <img :src="signupInput.picture || require('../assets/nopic' + Math.floor(Math.random() * 5) + '.png')" 
                class="info__img">
        </div>
        <div class="form__item">
          <label for="username">User name</label>
          <input @focus="clearErrors" v-model="signupInput.username"
                  type="text" name="username" id="username" required>
        </div>
        <div class="form__item">
          <label for="first_name">First name</label>
          <input @focus="clearErrors" v-model="signupInput.first_name"
                  type="text" name="first_name" id="first_name">
        </div>
        <div class="form__item">
          <label for="last_name">First name</label>
          <input @focus="clearErrors" v-model="signupInput.last_name"
                  type="text" name="last_name" id="last_name">
        </div>
        <div class="form__item">
          <label for="email">E-mail</label>
          <input @focus="clearErrors" v-model="signupInput.email"
                  type="email" name="email" id="email">
        </div>
        <div class="form__item">
          <label for="password">Password</label>
          <input @focus="clearErrors" v-model="signupInput.password"
                  type="password" name="password" id="password">
        </div>
        <div class="form__item">
          <label for="about">About</label>
          <ckeditor :editor="editor" v-model="signupInput.user_about" 
                    :config="{ placeholder:'pls enter content'}"
                    @focus="clearErrors" name="about" >
          </ckeditor>
<!--           <textarea @focus="clearErrors" v-model="signupInput.user_about"
                    name="about" id="about" rows="5" cols="30"></textarea> -->
        </div>
        <div class="form__btn">
          <button type="submit">Save</button>
        </div>
      </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>