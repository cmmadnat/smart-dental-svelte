<div class="p-4 py-3">
	<h1 class="text-3xl">Hello world I'm the announcement</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit quis erat vulputate
		elementum. Nunc accumsan erat eleifend velit convallis tincidunt. Donec a feugiat ex. Phasellus
		sit amet vulputate velit, et lacinia magna. Fusce ultricies mauris nibh, et placerat lacus
		lacinia eu. Etiam non condimentum lectus, sed condimentum ex. Sed et pharetra ipsum.
		Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
		Pellentesque rhoncus felis lectus, eget sodales velit accumsan vitae. In luctus rhoncus nisl,
		quis lobortis libero. Ut consectetur, ligula et luctus dictum, erat dolor porttitor eros, vitae
		ultrices elit nulla sit amet urna. Nulla tincidunt est lorem, a commodo tellus posuere eu.
		Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque rhoncus turpis id
		luctus lacinia. Suspendisse id lectus commodo, lobortis neque eget, pulvinar magna. In
		venenatis, tortor et molestie scelerisque, est risus ornare eros, eu volutpat ante eros id
		ipsum. Quisque erat eros, pharetra et neque ac, pretium fermentum leo. Quisque imperdiet auctor
		diam et scelerisque. Curabitur eget laoreet ipsum. Ut iaculis laoreet enim. Maecenas in dictum
		elit, venenatis fringilla quam. Mauris auctor sagittis feugiat. Mauris imperdiet posuere neque
		vel cursus. Proin commodo magna sit amet lorem feugiat commodo. Morbi interdum mauris sed elit
		congue, ac hendrerit lacus dignissim. Vivamus at nisl viverra, ultrices augue eget, rutrum
		lorem.
	</p>
	<div />
</div>

<!-- comment form -->
<div class="flex flex-wrap mb-6">
	<h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
	<div class="w-full md:w-full px-3 mb-2 mt-2">
		<textarea
			class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
			name="body"
			placeholder="Type Your Comment"
			required
		/>
	</div>
	<div class="w-full  flex items-start md:w-full px-3">
		<div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
			<svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
		</div>
		<div class="-mr-1">
			<input
				type="submit"
				class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
				value="Post Comment"
			/>
		</div>
	</div>
</div>
<!-- component -->
<div class="bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-4 antialiased flex max-w-lg">
	<img
		class="rounded-full h-8 w-8 mr-2 mt-1 "
		alt="sample-img"
		src="https://picsum.photos/id/1027/200/200"
	/>
	<div>
		<div class="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
			<div class="font-semibold text-sm leading-relaxed">Jon Doe</div>
			<div class="text-normal leading-snug md:leading-normal">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			</div>
		</div>
		<div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">14 w</div>
		<div
			class="bg-white dark:bg-gray-700 border border-white dark:border-gray-700 rounded-full float-right -mt-8 mr-0.5 flex shadow items-center "
		>
			<svg
				class="p-0.5 h-5 w-5 rounded-full z-20 bg-white dark:bg-gray-700"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 16 16"
				><defs
					><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"
						><stop offset="0%" stop-color="#18AFFF" /><stop
							offset="100%"
							stop-color="#0062DF"
						/></linearGradient
					><filter
						id="c1"
						width="118.8%"
						height="118.8%"
						x="-9.4%"
						y="-9.4%"
						filterUnits="objectBoundingBox"
						><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1" /><feOffset
							dy="-1"
							in="shadowBlurInner1"
							result="shadowOffsetInner1"
						/><feComposite
							in="shadowOffsetInner1"
							in2="SourceAlpha"
							k2="-1"
							k3="1"
							operator="arithmetic"
							result="shadowInnerInner1"
						/><feColorMatrix
							in="shadowInnerInner1"
							values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"
						/></filter
					><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs
				><g fill="none"
					><use fill="url(#a1)" xlink:href="#b1" /><use
						fill="black"
						filter="url(#c1)"
						xlink:href="#b1"
					/><path
						fill="white"
						d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
					/></g
				></svg
			>
			<svg
				class="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white dark:bg-gray-700"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 16 16"
				><defs
					><linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%"
						><stop offset="0%" stop-color="#FF6680" /><stop
							offset="100%"
							stop-color="#E61739"
						/></linearGradient
					><filter
						id="c2"
						width="118.8%"
						height="118.8%"
						x="-9.4%"
						y="-9.4%"
						filterUnits="objectBoundingBox"
						><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1" /><feOffset
							dy="-1"
							in="shadowBlurInner1"
							result="shadowOffsetInner1"
						/><feComposite
							in="shadowOffsetInner1"
							in2="SourceAlpha"
							k2="-1"
							k3="1"
							operator="arithmetic"
							result="shadowInnerInner1"
						/><feColorMatrix
							in="shadowInnerInner1"
							values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"
						/></filter
					><path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z" /></defs
				><g fill="none"
					><use fill="url(#a2)" xlink:href="#b2" /><use
						fill="black"
						filter="url(#c2)"
						xlink:href="#b2"
					/><path
						fill="white"
						d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
					/></g
				></svg
			>
			<span class="text-sm ml-1 pr-1.5 text-gray-500 dark:text-gray-300">3</span>
		</div>
	</div>
</div>
<!-- component -->
