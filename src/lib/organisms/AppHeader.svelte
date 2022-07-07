<script>
    import ButtonLink from "../atoms/ButtonLink.svelte";
    import Logo from "../atoms/Logo.svelte";
    import ThemeSwitcher from "../atoms/ThemeSwitcher.svelte";
    import WideContainer from "../layout/WideContainer.svelte";
</script>

<header class="fixed inset-x-0 top-0 z-10">
    <nav
      class="h-16 border-b border-gray-100 border-opacity-60 bg-white bg-opacity-75 py-3 backdrop-blur dark:border-gray-800 dark:bg-dark dark:bg-opacity-75"
    >
        <WideContainer>
            <div class="flex justify-between">
                <Logo />
                <div class="flex gap-4">
                    <ButtonLink  size="md" link='https://tailus.io/blocks'>
                        Browse blocks
                    </ButtonLink>
                    <ThemeSwitcher />
                </div>
            </div>
        </WideContainer>
    </nav>
</header>