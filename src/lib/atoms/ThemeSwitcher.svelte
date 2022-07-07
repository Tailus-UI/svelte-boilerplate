<script>
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
    }

    const switcher = function(){
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
            } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    }
</script>

<div
    class="group flex flex-col rounded-full border border-gray-100 bg-gray-50 transition duration-300 hover:h-[7.6rem] dark:border-gray-700 dark:bg-gray-800"
    >
    <button
        on:click={switcher}
        class="switcher tansition group order-2 -mt-10 flex h-10 w-10 rounded-full opacity-0 duration-300 hover:bg-gray-100 group-hover:mt-0 group-hover:opacity-100 dark:order-1 dark:mt-0 dark:opacity-100 dark:hover:bg-gray-700"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="transistion m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 dark:fill-gray-300 dark:group-hover:fill-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        >
        <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
        />
        </svg>
    </button>
    <button
        on:click={switcher}
        class="switcher darka:opacity-0 tansition group order-1 flex h-10 w-10 rounded-full opacity-100 duration-300 hover:bg-gray-100 dark:order-2 dark:-mt-10 dark:opacity-0 dark:hover:bg-gray-700 dark:group-hover:mt-0 dark:group-hover:opacity-100"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="transistion m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-cyan-900 dark:fill-gray-300 dark:group-hover:fill-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
        <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
        </svg>
    </button>
    <button
        id="system"
        class="tansition group order-last -mt-10 flex h-10 w-10 rounded-full opacity-0 duration-300 hover:bg-gray-100 group-hover:mt-0 group-hover:opacity-100 dark:hover:bg-gray-700"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="transistion m-auto h-5 w-5 fill-gray-500 duration-300 dark:fill-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
        >
        <path
            fill-rule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clip-rule="evenodd"
        />
        </svg>
    </button>
</div>