<template>
  <div class="flex flex-col h-full items-start justify-center w-full bg-[#353448]">
    <div class="flex items-center justify-between w-full px-[10rem] bg-[#000000] py-[5rem]">
      <div class="flex flex-col text-white" style="width: 75%; padding-right: 10rem;">
        <h5 class="font-[900] text-[4.5rem] tracking-widest self-start">TUKLAS</h5>
        <p class="text-lg text-justify">Aims to discover innovation by simplifying processes and systems that ensure sustainable success for our business partners. We envision being the catalyst for development by embracing and empowering change.</p>
      </div>
      <div class="flex flex-col text-white text-lg" style="width: 50%;">
        <h5 class="font-bold mb-5">Products and Services</h5>
        <ul class="list-disc">
          <li class="text-sm">Inventory and POS</li>
          <li class="text-sm">Website Development</li>
          <li class="text-sm">Social Media Management</li>
          <li class="text-sm">Events Management</li>
          <li class="text-sm">Internet-Of-Things</li>
        </ul>
      </div>
      <div class="flex flex-col text-white text-lg" style="width: 15%;">
        <h5 class="font-bold mb-2 text-lg self-start">Contact</h5>
        <p>
          09105344829
        </p>
        <p>
          tuklas.it@gmail.com
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between w-full px-[10rem] bg-[#2B293E]">
      <div>
      <a href="/"> 
        <img src="/images/logo.png" alt="" class="w-[100px]">
      </a>
    </div>
      <div class="flex gap-11">
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/">Home</a></li>
        <!-- <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/services">Services</a></li> -->
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/product">Product</a></li>
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/about">About</a></li>
        <li class="list-none text-md cursor-pointer text-white hover:text-[#dc1102] transition-all"><a href="/contact">Contact us</a></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style  scoped>
</style>
