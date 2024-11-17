<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>



<script setup>
  let {data} = await useFetch("http://localhost:1337/api/posts");
  console.log(data)
</script>