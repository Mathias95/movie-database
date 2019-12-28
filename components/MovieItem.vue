<template>
  <li class="movie-item">
    <nuxt-link to="/moviepage" class="movie-item__link">
      <figure class="movie-item__img-wrapper">
        <img
          src="~assets/images/wonderwomanposterimg.jpg"
          alt="movie poster"
          class="movie-item__img"
        />
        <!-- <img src="" alt="movie poster" class="movie-item__img load"> -->
      </figure>
    </nuxt-link>
    <div class="movie-item__info">
      <ul class="movie-item__genre-list">
        <li class="movie-item__genre-item">
          <span class="movie-item__genre-text">
            Action
          </span>
        </li>
        <li class="movie-item__genre-item">
          <span class="movie-item__genre-text">
            Thriller
          </span>
        </li>
      </ul>
      <h3 class="movie-item__title">Dunkirk</h3>
    </div>
  </li>
</template>

<script>
export default {};
</script>
