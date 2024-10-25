<template>
  <article
    class="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border"
  >
    <header
      class="relative mx-4 mt-4 pb-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border"
    >
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">
            <!-- TITLE -->
             <slot name="title" />
          </h2>
        </div>

        <div class="flex flex-col gap-2 shrink-0 sm:flex-row">
          <!-- ACTIONS -->
          <slot name="actions" />
        </div>
      </div>
    </header>

    <section class="p-0 overflow-scroll">
      <!-- DEFAULT -->
      <slot name="default" />
    </section>

    <footer class="flex items-center justify-between p-3">
      <p class="block text-sm text-slate-500">
        <!-- FOOTER -->
        <slot name="footer" />
      </p>
    </footer>
  </article>
</template>
