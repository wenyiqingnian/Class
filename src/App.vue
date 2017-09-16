<template>
  <div id="app">
    <div class="header">
      <img class="header_img" src="./assets/gm_logo .png"/>
    </div>

   <div class="login">
   <Login>     </Login>
   </div>

    <div class="bottom">
      <Bottom></Bottom>
    </div>


  </div>
</template>

<style>
  body{
    background-color: #F9F9F9;
  }

.login {
 display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 34em;
  background: url("./assets/banner.jpg") no-repeat;
  background-size: cover;
  min-width: 89em;



}
  .bottom{

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 60em;
    height:4em;
  }

  .header{
    display: inline-flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width:24em;
    height:9em;
  }
  .header_img{
    width:11em;
    height:4em;

  }
</style>
<script>

  import login from './components/login.vue'
  import bottom from './components/bottom.vue'
  export default{
    components: {
      'Login':login,
      'Bottom':bottom
    }
  }
</script>
