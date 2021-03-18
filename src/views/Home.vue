<!--
  Made by: dbarenholz
-->
<template>
  <div>
    <div class="container is-max-desktop main">
      <div class="card">
        <div id="figure_container">
          <figure id="figure" class="image is-1by1">
            <img
              id="OC"
              class="is-rounded"
              src="../assets/img.png"
              alt="This is Vay!"
            />
          </figure>
          <h1 class="title is-1">{{ title }}</h1>
        </div>
        <div class="content text-center">
          <p id="intro">{{ introText }}</p>
        </div>
        <div class="wrapper content">
          <div class="column">
            <h2 class="title is-2">{{ linksTitle }}</h2>
            <Link
              v-for="link in links"
              :key="link.url"
              :name="link.name"
              :social="link.social"
              :img="link.img"
              :url="link.url"
            />
          </div>
          <div class="column">
            <iframe
              src="https://discord.com/widget?id=810522820811423774&theme=dark"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
        <div class="content">
          <h2 class="title is-2">{{ youtubeRecommendedTitle }}</h2>
          <div class="single-video-container">
            <Video :videoID="youtubeRecommendedID" />
          </div>
        </div>
        <div class="content">
          <Playlist
            v-for="playlist in playlists"
            :key="playlist.id"
            :playlistID="playlist.id"
            :title="playlist.name"
            :numberOfVideosToDisplay="playlist.vids"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script >
import Footer from "../components/Footer.vue";
import Link from "../components/Link.vue";
import Playlist from "../components/Playlist.vue";
import Video from "../components/Video.vue";
import Text from "../text.js";

export default {
  components: {
    Footer,
    Link,
    Playlist,
    Video,
  },
  computed: {
    title() {
      return Text.title;
    },
    linksTitle() {
      return Text.linksTitle;
    },
    links() {
      return Text.links;
    },
    playlists() {
      return Text.playlists;
    },
    introText() {
      return Text.introText;
    },
    youtubeRecommendedTitle() {
      return Text.youtubeRecommendedTitle;
    },
    youtubeRecommendedID() {
      return Text.youtubeRecommendedID;
    },
  },
};
</script>


<style lang="scss" scoped>
html,
body {
  background-color: $black;
}

.single-video-container {
  margin-right: 10%;
}

.wrapper {
  display: flex;

  @include mobile {
    flex-direction: column;
  }
}

.column {
  width: 50%;

  @include mobile {
    width: 90%;
  }
}

// Discord embed styles
iframe {
  width: 350px;
  height: 500px;
  @include mobile {
    max-width: 95%;
    height: 300px !important;
  }
}

#intro {
  font-size: 1.6em;
}

.main {
  padding-top: 3em;
}

.text-center {
  text-align: center;
  margin-right: 10%;
  padding-bottom: 2em;
}

#figure_container {
  // the auto centers the thing
  margin: 0 auto;
  // the 5em specifies how much whitespace above (AND BELOW) the image+title
  padding: 1em 0;
  // This sets the size of the image, play with the value until happy
  width: 50%;
  text-align: center;

  // Set mobile style to 55% so title shows on 1 line
  @include mobile {
    width: 55%;
  }

  .title {
    // Specifies how much whitespace between title and image
    padding-top: 1em;
  }
}

div.content {
  // The whitespace to the left of all content!
  margin-left: 10%;
}

div.card {
  // The whitespace below all content, above the footer!
  padding-bottom: 2em;
}
</style>