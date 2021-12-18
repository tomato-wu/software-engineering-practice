<template>
  <div class="error__msg">
    <img
      src="https://pic1.ntimg.cn/pic/20190629/9355665_155539113087_4.jpg"
      alt="1.alt"
    />
    无法匹配关键字信息~
  </div>
</template>

<style scoped>
.error__msg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3vw;
  color: rgb(96, 92, 92);
  animation: move 0.5s ease-in;
}
.error__msg img {
  width: 30%;
}
@keyframes move {
  0% {
    left: 0;
  }
  25% {
    left: 100px;
  }
  50% {
    left: 250px;
  }
  75% {
    left: 400px;
    transform: scale(1.1);
  }
  100% {
    left: 550px;
    transform: scale(1.15);
  }
}
</style>
