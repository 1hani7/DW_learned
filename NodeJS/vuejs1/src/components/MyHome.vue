<template>
  <main id="main">
    <section id="content">
      <img src="../assets/main.jpg" alt="">
    </section>
    <section id="side">
      <a class="login_bt" href="/login">LOGIN</a>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'MyHome',
  }
</script>

<style>
#main #content img{width:100%;}
#side{display:flex; justify-content: right; align-items: start;}
#side .login_bt{
    padding:10px 10px;
    color:#fff;
    text-decoration: none;
    background:#0F63B5;
    padding:7px 0;
    width:95%;
    font-size:20px;
    display:inline-block;
    border-radius: 5px;
    text-align:center;
    font-weight:800;
}
#side .login_bt:hover{filter:contrast(1.2);}
#side .login_bt:active{box-shadow:inset 4px 4px 0 rgba(0,0,0,0.3);}
</style>