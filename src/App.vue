<script setup>
import { computed } from "vue";
import { Card, Header, Button, Loader, Error, Cat } from "./components";
import { useCats } from "./composables/useCats";

const { isFetching, cats, getCat, setCat, clearCats } = useCats();

const handlePrimaryButtonClick = async () => {
  const cat = await getCat();
  if (!cat) return;
  setCat(cat);
};

const isPrimaryButtonDisabled = computed(() => {
  return isFetching.value || cats.value.length > 5;
});

const catCountLabel = computed(() => `${cats.value.length} Cat(s) found`);
</script>

<template>
  <main class="max-w-[640px] mx-auto"></main>
  <Header title="HEYRISE CATS" />
  <Card>
    <template #title> Cat List </template>

    <template #actions>
      <Loader v-if="isFetching" />
      <Button
        v-else
        primary
        content="Get Cat"
        :disabled="isPrimaryButtonDisabled"
        @click="handlePrimaryButtonClick"
      />
      <Button
        secondary
        content="Clear All"
        :disabled="cats.length === 0"
        @click="clearCats"
      />
    </template>

    <template #default>
        <Error v-if="cats.length === 0" />
        <ul v-else>
            <Cat v-for="{id, url}, index in cats" 
              :key="id"
              :imageUrl="url"
              :id="id"
              :isGray="(index + 1) % 2 === 1"
            />
        </ul>
    </template>

    <template #footer>
      {{ catCountLabel }}
    </template>
  </Card>
</template>
