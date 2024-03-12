<template>
  <div class="flex items-center justify-between h-[70px] w-full bg-gradient-to-b from-black to-transparent px-[10rem] absolute top-0">
    <div>
      <a href="/">
        <img src="/images/logo.png" alt="" class="w-[125px]">
      </a>
    </div>
    <div class="flex gap-11">
      <li class="list-none text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/">Home</a></li>
      <!-- <li class="list-none text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/services">Services</a></li> -->
      <li class="list-none text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/product">Product</a></li>
      <li class="list-none text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/about">About</a></li>
      <li class="list-none text-lg cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/contact">Contact us</a></li>
      <button class="submit-button">Join us</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .submit-button {
    background-color: #c61407;
    color: white;
    padding: 1px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    animation: lightShow 0.5s infinite alternate;
  }
  
  @keyframes lightShow {
    0% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }
</style>

