<template>
  <nav>
    <div class="nav-button">
      <svg-icon icon-file-name="arrow-left"></svg-icon>
      <svg-icon icon-file-name="arrow-right"></svg-icon>

    </div>
    <div class="nav-link">
      <router-link to="/" :class="{active:$route.name=='home'}">{{ $t("nav.home") }}</router-link>
      <router-link to="/about" :class="{active:$route.name=='about'}">{{ $t("nav.explore") }}</router-link>
      <router-link to="/library" :class="{active:$route.name=='library'}">{{ $t("nav.library") }}</router-link>
      <router-view />
    </div>
    <div class="nav-search-msg">
      <svg-icon icon-file-name="search" :class="{focus:inputFocus}"></svg-icon>
    <input 
    type="search"
    :placeholder="inputFocus ? '' : $t('nav.search')"
    @focus="inputFocus=true"
    @blur="inputFocus=false"
    />

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      inputFocus:false
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  background-color:var(--color-navbar-bg);
  height: 64px;
  line-height: 64px;
  justify-content: space-between;
  position: fixed;
  width: 80vw;
  padding: {
    left: 10vw;
    right: 10vw;
  }
  .nav-link {
    // display: flex;
    a {
      //行内元素会导致缩放失效
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding: {
        right: 20px;
        left: 20px;
        top: 5px;
        bottom: 5px;
      }
      margin: {
        left: 5px;
        right: 5px;
      }
      transition: 0.2s;
      font-size: 18px;
      font-weight: 700;
      &:hover {
        background-color: var(--color-secondary-bg-for-transparent);
        border-radius: 5px;
      }
      &:active {
        transform: scale(0.92);
        transition: 0.2s;
      }
    }
    a.active{
      color: var(--color-primary);
    }
  }
  .nav-button{
    font-size: 25px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-icon-arrow-left,svg{
      display: inline-block;
      width: 25px;
      height: 25px;
      // font-weight:900; 
      text-align: center;
      line-height: 30px;
      margin-right: 5px;
      &:hover{
        background-color: var(--color-secondary-bg-for-transparent);
        border-radius: 5px;
      }
      &:active {
        transform: scale(0.92);
        transition: 0.2s;
      }
    }
    
  }
  .nav-search-msg{
    position: relative;
    input{
      outline: none;
      border: none;
      width: 200px;
      height: 32px;
      background-color:var(--color-secondary-bg-for-transparent) ;
      border-radius: 5px;
      text-indent: 30px;
      &:focus{
        background: var(--color-primary-bg-for-transparent);
      }
    }
    .svg-icon{
      position: absolute;
      left: 10px;
      top: 50%; 
      width: 16px;
      height: 16px;
      margin-top: -6px;
      color: var(--color-text);
      opacity: 0.5;
    }
    .focus{
      color:var(--color-primary);
      opacity: 1;
    }
    

  }
}
</style>