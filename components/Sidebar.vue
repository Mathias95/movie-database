<template>
  <aside class="sidebar">
    <div class="sidebar__container trans-sidebar">
      <nav class="sidebar__menu">
        <div class="sidebar__menu-wrapper">
          <div class="sidebar__menu--scroll">
            <div class="sidebar__menu--scrollable">
              <div class="sidebar__menu-inner">
                <ul class="sidebar__list">
                  <li
                    class="sidebar__item"
                    v-for="item in items"
                    :key="item.title"
                  >
                    <nuxt-link :to="item.to" class="sidebar__link trans-fast">
                      <i class="material-icons sidebar__item-icon">{{
                        item.icon
                      }}</i>
                      <span class="sidebar__link-text">
                        {{ item.title }}
                      </span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
import DropdownProfile from "~/components/DropdownProfile.vue";
import Search from "~/components/Search.vue";

export default {
  data() {
    return {
      isOpen: false,
      slideMenu: false,
      items: [
        {
          icon: "star",
          title: "Trending",
          to: "/home"
        },
        {
          icon: "assessment",
          title: "Top Rated",
          to: "/"
        },
        {
          icon: "event",
          title: "Upcoming",
          to: "/"
        },
        {
          icon: "favorite_border",
          title: "Favourites",
          to: "/"
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    toggleSlide() {
      this.slideMenu = !this.slideMenu;
    }
  },
  components: {
    DropdownProfile,
    Search
  }
};
</script>
