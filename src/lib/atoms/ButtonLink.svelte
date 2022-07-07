<script>
    export let link, size;
</script>

<a
    href="{link}"
    class="relative flex {size == 'lg' ? 'h-11' : 'h-10'} h-10 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#01FCE8] before:to-[#0EC8FE] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
>
    <span class="w-max mx-auto relative {size == 'lg' ? 'text-base' : 'text-sm'} font-semibold text-dark">
        <slot></slot>
    </span>
</a>