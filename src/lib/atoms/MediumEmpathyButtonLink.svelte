<script>
    export let link;
</script>

<a
    href="{link}"
    class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
>
    <span class="w-max mx-auto relative text-base font-semibold text-primary dark:text-white">
        <slot></slot>
    </span>
</a>