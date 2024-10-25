import { ref } from 'vue';
import axios from 'axios';

// Get your API key at: https://thecatapi.com/
// Paste the API key in .env

const apiKey = import.meta.env.API_KEY;
const apiUrl = `https://api.thecatapi.com/v1/images/search?&api_key=${apiKey}`;

const cats = ref([]);

const useCats = () => {
  const isFetching = ref(false);

  const getCat = async () => {
    try {
      isFetching.value = true;
      const catResponse = await axios.get(apiUrl);

      return catResponse?.data[0];
    } catch (err) {
      console.error(err);
    } finally {
      isFetching.value = false;
    }
  };

  const setCat = (cat) => {};

  const clearCats = () => {};

  return {};
};

export { useCats };
