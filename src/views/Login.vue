<template>
  <section>
    <div class="container" :class="{ active: state.isActive }">
      <div class="user singinBx">
        <div class="imgBx">
          <img src="../assets/p1.jpg" />
        </div>
        <div class="formBx">
          <form>
            <h2>Sign In</h2>
            <!-- 账号 -->
            <input v-model="loginInline.loginName" type="text" placeholder="Username" />
            <!-- 密码 -->
            <input v-model="loginInline.password" type="password" placeholder="Password" />
            <!-- 验证码 -->
            <a-row>
              <a-col :span="15">
                <input v-model="loginInline.code" type="text" placeholder="Captcha" />
              </a-col>
              <a-col :span="5">
                <img :src="state.Captcha" alt="无法显示" style="margin: 9px" />
              </a-col>
            </a-row>
            <input @click="setLogin($event)" type="submit" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a @click="goRegister">Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
      <div class="user singupBx">
        <div class="formBx">
          <form>
            <h2>Create an Account</h2>
            <input v-model="registInline.loginName" type="text" placeholder="Username" />
            <input v-model="registInline.password" type="password" placeholder="Create Password" />
            <!-- <input type="password" placeholder="Confirm Password" /> -->
            <!-- <input type="password" placeholder="name" /> -->
            <input @click="setRegist($event)" type="submit" value="Sign up" />
            <p class="signup">
              Already have an account ?
              <a @click="goLogin">Sign In.</a>
            </p>
          </form>
        </div>
        <div class="imgBx">
          <img src="../assets/p2.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useLogin, useRegist, useGetCaptcha } from "../controllers/login";
import { Menu, Row, Col, Pagination } from "ant-design-vue";

export default defineComponent({
  components: {
    "a-row": Row,
    "a-col": Col,
  },
  setup() {
    const state = reactive({
      isActive: false,
      Captcha: "",
    });

    const loginInline = reactive({
      loginName: "admin",
      password: "123",
      code: "",
    });

    function goRegister() {
      state.isActive = true;
    }

    function goLogin() {
      state.isActive = false;
    }

    onMounted(async () => {
      const res = await useGetCaptcha();
      const base64 = btoa(
        new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
      console.log("data:image/jpeg;base64," + base64);
      state.Captcha = "data:image/jpeg;base64," + base64;
    });

    // 登录逻辑
    const setLogin = async (e: any) => {
      e.preventDefault();
      await useLogin(loginInline);
    };

    // 注册逻辑
    const registInline = reactive({
      loginName: "",
      password: "",
    });
    const setRegist = async (e: any) => {
      e.preventDefault();
      await useRegist(registInline);
    };

    return {
      state,
      loginInline,
      registInline,
      goRegister,
      goLogin,
      setLogin,
      setRegist,
    };
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-image: url(../assets/csdn.jpg);
}

section {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: url(../assets/csdn.jpg);
}

section .container {
  position: relative;
  border-radius: 5%;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}

section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-left: cover;
}

section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

section .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

section .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-size: 300;
}

section .container .user .formBx form input[type="submit"] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx form .signup a {
  font-weight: 600;
  text-decoration: none;
}

section .container .singupBx {
  pointer-events: none;
}

section .container.active .singupBx {
  pointer-events: initial;
}

section .container .singupBx .formBx {
  left: 100%;
}

section .container.active .singupBx .formBx {
  left: 0;
}

section .container .singupBx .imgBx {
  left: -100%;
}

section .container.active .singupBx .imgBx {
  left: 0;
}

section .container .singinBx .formBx {
  left: 0;
}

section .container.active .singinBx .formBx {
  left: 100%;
}

section .container .singinBx .imgBx {
  left: 0;
}

section .container.active .singinBx .imgBx {
  left: 100%;
}

@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }
  section .container .imgBx {
    display: none;
  }
  section .container .user .formBx {
    width: none;
  }
}
</style>
