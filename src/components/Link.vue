<!--
  Made by: dbarenholz
-->
<template>
  <div class="link-container">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <div class="media">
        <div class="media-left">
          <!-- If using FA, show icon, else show image -->
          <fa-i
            v-if="useFA"
            size="3x"
            :icon="['fab', social]"
            :style="{ color: colorLookup[social], fontSize: 64 + 'px' }"
          />

          <figure v-else class="image is-64x64">
            <img class="is-rounded" :src="img" />
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.content figure {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0 !important;
}

div.media {
  padding-bottom: 1.5em;
}

div.media-left {
  width: 72px;
}

div.media-content {
  align-self: center;
  text-decoration: underline;
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  // properties: gets passed from parent
  props: ["name", "social", "img", "url"],
  // This component uses font awesome icons
  components: {
    "fa-i": FontAwesomeIcon,
  },
  // There is data in this component
  data() {
    return {
      colorLookup: {
        youtube: "red",
        discord: "#7289DA",
        patreon: "#F96854",
      },
    };
  },
  // Compute whether or not to use font awesome icon for this link
  computed: {
    useFA() {
      return this.social != null && !this.isLink(this.img);
    },
  },
  methods: {
    // method to see if a link is a link
    isLink(url) {
      try {
        new URL(url);
      } catch {
        return false;
      }
      return true;
    },

    getIconName() {
      // Replace 'icon' with 'faIcon' which is the name to import
      return (
        "fa" + this.social.charAt(0).toUpperCase() + this.social.substring(1)
      );
    },
  },
  // Before the link is created, if
  created() {
    // If we use font awesome icons
    if (this.useFA) {
      // Surround try catch to filter unwanted behaviour
      try {
        const icon = this.getIconName();
        const theIcon = require(`@fortawesome/free-brands-svg-icons/${icon}.js`);
        library.add(theIcon);
      } catch {
        // nothing
      }
    }
  },
};
</script>