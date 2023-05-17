<script>
	import '../app.scss';
	import '@fontsource/inter';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
