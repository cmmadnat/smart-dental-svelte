/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_APP_TITLE: string;
	// more env variables...
	readonly VITE_DB_HOST: string;
	readonly VITE_DB_USER: string;
	readonly VITE_DB_PASS: string;
	readonly VITE_DB_PORT: string;
	readonly VITE_DB_DATABASE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
