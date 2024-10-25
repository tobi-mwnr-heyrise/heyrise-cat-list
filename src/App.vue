<script setup>
import { ref, computed } from "vue";
import { Header, Card, Button, Error, Loader, Cat, Search } from "./components";
import { useCats } from "./composables";

const { cats, isFetching, getCat, setCat, clearCats } = useCats();

const searchTerm = ref("");

const handleGetCatButtonClick = async () => {
  searchTerm.value = "";

  const cat = await getCat();

  if (!cat) return;

  setCat(cat);
};

const handleClearAllButtonClick = () => {
  searchTerm.value = "";

  clearCats();
};

const filteredCats = computed(() => {
  if (!searchTerm.value) return cats.value;

  return cats.value.filter((cat) => {
    return cat.id.includes(searchTerm.value);
  });
});

const catCountLabel = computed(
  () => `${filteredCats.value.length} Cat(s) Found`
);

const errorSubtitle = 'Try the "Get Cat" button or a different search term.';
</script>

<template>
  <main class="max-w-[640px] mx-auto">
    <Header title="HEYRISE Cats" />

    <Search
      v-model="searchTerm"
      placeholder="Search Cats"
      :disabled="cats.length === 0"
    />

    <Card>
      <template #title> Cat List </template>

      <template #actions>
        <Loader v-if="isFetching" />
        <Button
          v-else
          primary
          content="Get Cat"
          :disabled="cats.length > 5"
          @click="handleGetCatButtonClick"
        />

        <Button
          secondary
          content="Clear All"
          :disabled="cats.length === 0"
          @click="handleClearAllButtonClick"
        />
      </template>

      <template #default>
        <Error v-if="filteredCats.length === 0" :subtitle="errorSubtitle" />

        <ul v-else>
          <Cat
            v-for="({ id, url }, index) in filteredCats"
            :key="id"
            :imageUrl="url"
            :id="id"
            :isGray="index % 2 === 1"
          />
        </ul>
      </template>

      <template #footer>
        {{ catCountLabel }}
      </template>
    </Card>
  </main>
</template>
