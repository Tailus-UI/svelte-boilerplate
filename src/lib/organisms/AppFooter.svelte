<script>
  import Logo from "../atoms/Logo.svelte";
  import WideContainer from "../layout/WideContainer.svelte";
</script>

<footer
  class="relative overflow-hidden bg-gradient-to-b from-transparent to-gray-50 pb-6 dark:border-gray-800 dark:border-opacity-100 dark:to-[#091316] lg:px-0"
>
  <WideContainer>
    <div class="relative mt-32 flex flex-col items-start justify-center">
      <div class="mt-12 grid w-full grid-cols-2 gap-4 pb-32 sm:grid-cols-4">
        <div>
          <div class="mb-12">
            <Logo />
          </div>
          <div class="flex flex-col space-y-4">
            <a class="text-gray-500 transition hover:text-gray-300" href="/"
              >Blocks</a
            >
            <a
              class="text-gray-500 transition hover:text-gray-300"
              href="https://tailus.io/contact">Custom UI</a
            >
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/meschacirung">Twitter</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/meschacirung">GitHub</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/m%C3%A9schac-irung-b8b831194/"
            >LinkedIn</a
          >
        </div>
        <div class="flex flex-col space-y-4">
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailus.io/">Blocks</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@irung.ux">Articles</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/Tailus-ui/">Screencasts</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcomponents.com/u/tailus-ui">UI Components</a
          >
        </div>
        <div class="flex flex-col space-y-4">
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/irung">Patreon</a
          >
          <a
            class="text-gray-500 transition hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/irung">Buy Me a Coffee</a
          >
        </div>
      </div>

      <div
        class="flex w-full flex-wrap justify-center gap-4 border-t border-gray-100 pt-6 text-sm dark:border-gray-700 sm:justify-between"
      >
        <span class="text-gray-500 dark:text-gray-600">
          Ⓒ Tailus 2021 - Present | All right reserved</span
        >
        <span class="text-gray-500 dark:text-gray-600"
          >Proudly made in DR Congo</span
        >
      </div>
    </div>
  </WideContainer>
</footer>
