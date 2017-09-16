<template xmlns:v-on="http://www.w3.org/1999/xhtml">

<div id="Login" class="Login">


 <div class="title_span">商家后台管理系统</div>

  <form class="the_form bs-example bs-example-form" role="form">
    <div class="one input-group">
      <div class="user input-group-addon"></div>
      <input type="text" class="input1 form-control" placeholder="用户名">
    </div>
    <br>

    <div class="two input-group">
      <div class="pass input-group-addon"></div>
      <input type="text" class="input2 form-control" placeholder="密码">
    </div>
    <br>
    <button   class="button" type="submit" v-on:click="submit">  <span class="button_span">登陆</span> </button>
  </form>


</div>


</template>


<style>
  .button_span{
    font-size: 1.3em;
    color:#ffffff;
  }
  .button{
    width:20em;
    height:3em;
    background-color:#E50038 ;
    border-radius:0.5em;

  }
  .button:hover{
    background-color: #CD0030;
  }
  .title_span{
    margin-top: 2em;
    font-size:1.4em;
  }
.the_form{
  margin-top: 1em;
}
.one{
  margin: 0 auto;
  width:20em;
  height:2em;
}
.user{
  width:2.6em;
  height:2.6em;
  background: url("../assets/user.png") no-repeat;
  background-size: cover;
}

.input1{
  width:17.4em;
  height:2.6em;

}
.two{
  margin: 0 auto;
  width:20em;
  height:2.6em;

}
.pass{
  width:2.6em;
  height:2.6em;
  background: url("../assets/mima.png") no-repeat;
  background-size: cover;
}

.input2{
  width:17.4em;
  height:2.6em;

}


.Login{
   text-align: center;
   width:25em;
   height:26em;
   background-color: #ffffff;
   margin-right: 18em;
  overflow: hidden;
  white-space: nowrap;
  *min-width: auto;
  *width: expression(this.offsetWidth < 400 ? 'auto' : '400px');
}






</style>


<script>
  $(document).ready(function(){
    $('button').click(function(){
      this.changeIndex();

});
  });





</script>
