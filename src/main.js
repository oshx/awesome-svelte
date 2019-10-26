import App from './App.svelte';
import Store from './store';

const app = new App({
	target: document.body,
	props: Store,
});

export default app;