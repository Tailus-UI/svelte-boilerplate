<script>
  export let type;
</script>

<button
  {type}
  class="relative flex h-10 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#01FCE8] before:to-[#0EC8FE] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
>
  <span class="relative mx-auto w-max text-sm font-semibold text-dark">
    <slot />
  </span>
</button>
