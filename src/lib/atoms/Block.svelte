<script>
  export let link, title, cover;
</script>

<a
  href="https://tailus.io/blocks/{link}/"
  class="snap-center rounded-xl border border-gray-100 bg-white pb-2 text-center dark:border-gray-700 dark:border-opacity-70 dark:bg-dark"
>
  <img
    src="./images/skeletons/{cover}.svg"
    class="w-36"
    alt={title}
    loading="lazy"
    width="144"
    height=""
  />
  <span
    class="-mt-2 block text-center text-lg font-medium text-gray-600 dark:text-gray-500"
    >{title}</span
  >
</a>
