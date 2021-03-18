<!--
  Made by: dbarenholz
-->
<template>
  <youtube :video-id="videoID" ref="youtube" :fitParent="true"></youtube>
</template>

<script>
export default {
  props: {
    videoID: {
      type: String,
      required: true,
    },
  },
};
</script>