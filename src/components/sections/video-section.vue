<template>
  <section class="flex items-center justify-center w-full">
    <div class="container bg-34363C text-white py-10">
      <div class="flex flex-col items-center justify-center px-10 gap-8 w-full">
        <div class="flex justify-between items-center w-full">
          <div class="w-1/2">
            <iframe width="100%" height="415" src="https://www.youtube.com/embed/b0B1PMwjlmo" title="TUKLAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="w-1/2 pl-10">
            <h1 class="text-5xl font-bold mb-4">WHY DO YOU NEED TO INVEST IN INFORMATION TECHNOLOGY FOR  YOUR BUSINESS?</h1>
            <h2 class="text-3xl mb-10 py-[2rem]">Watch the video and find out</h2>
            <a href="/contact-us" class="bg-buttonColor text-white py-2 px-4 rounded hover:bg-darkerButtonColor transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
.bg-34363C {
  background-color: #34363C;
}
.bg-buttonColor {
  background-color: #C61407;
}
.hover\:bg-darkerButtonColor:hover {
  background-color: #960E05;
}
</style>
