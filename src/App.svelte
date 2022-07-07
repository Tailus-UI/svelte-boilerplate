<script>
  import "./lib/app.css";
  import ButtonLink from "./lib/atoms/ButtonLink.svelte";
  import Logo from "./lib/atoms/Logo.svelte";
  import MediumEmpathyButton from "./lib/atoms/MediumEmpathyButton.svelte";
  import ThemeSwitcher from "./lib/atoms/ThemeSwitcher.svelte";
</script>

<main>
  <h1>Hello world!</h1>
  <Logo />
  <ThemeSwitcher />
  <ButtonLink link='tailus.io'>
    Browse blocks hello
  </ButtonLink>
  <MediumEmpathyButton type='submit'>
      Get a custom UI
  </MediumEmpathyButton>
</main>