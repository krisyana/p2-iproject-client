<template lang="">
  <div class="min-h-screen flex justify-center bg-green-100">
    <!-- Container -->
    <!-- Row -->
    <div class="w-full flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-white hidden lg:flex lg:w-11/12 bg-cover rounded-l-lg"
        style="background-image: url('https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80')"
      ></div>
      <!-- Col -->
      <div
        class="w-full flex justify-center items-center lg:w-10/12 bg-white p-5 rounded-lg lg:rounded-l-none"
      >
        <form
          @submit.prevent="handleRegister"
          class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
        >
          <img
            class="h-24 mx-auto w-auto my-4"
            src="@/assets/LogoMain.png"
            alt="Logo"
          />
          <h3 class="pt-4 my-4 text-2xl text-center">Create an Account</h3>
          <div class="mb-4">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="username"
              >
                Username
              </label>
              <input
                required
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border focus:ring-green-500 focus:border-green-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                v-model="registerData.username"
              />
            </div>
          </div>
          <div class="mb-4 md:mr-2 md:mb-0">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              required
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:ring-green-500 focus:border-green-500 appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              v-model="registerData.email"
            />
          </div>
          <div class="mb-4 md:mr-2 md:mb-0">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              required
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border focus:ring-green-500 focus:border-green-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              v-model="registerData.password"
            />
          </div>
          <div class="mb-6 mt-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Account
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <router-link
              class="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
              to="/login"
            >
              Already have an account? Login!
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',

  data() {
    return {
      registerData: {
        email: '',
        password: '',
        username: '',
      },
    };
  },
  methods: {
    ...mapActions(['actionRegister']),
    async handleRegister() {
      await this.actionRegister(this.registerData);
      this.$router.push('/login');
    },
  },
};
</script>
<style lang=""></style>
