<script>
	import { _ } from 'svelte-i18n';
</script>

<nav
	class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3"
>
	<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
		<div
			class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"
		>
			<a
				class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
				href="/home"
			>
				<img src="/Mahidol_dentis_th.png" alt="mahidol smart dental logo" class="w-60" />
			</a>
			<button
				class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
				type="button"
			>
				<span class="block relative w-6 h-px rounded-sm bg-white" />
				<span class="block relative w-6 h-px rounded-sm bg-white mt-1" />
				<span class="block relative w-6 h-px rounded-sm bg-white mt-1" />
			</button>
		</div>
		<div class="lg:flex flex-grow items-center">
			<ul class="flex flex-col lg:flex-row list-none ml-auto">
				<!--  
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Discover
            </a>
          </li>
-->
				<li class="nav-item">
					<a
						class="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
						href="#pablo"
					>
						<i class="lni lni-user" />&nbsp;
						{$_('hello')}, user
					</a>
				</li>
				<li class="nav-item">
					<a
						class="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
						href="#pablo"
					>
						<i class="lni lni-exit" />&nbsp;
						{$_('logout')}
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
