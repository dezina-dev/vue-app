<template>
  <div class="news-view">
    <h2>Latest News</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="article in articles" :key="article.url" class="news-article">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <a :href="article.url" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewsView',
  data() {
    return {
      loading: true,
      articles: [],
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
   
try {
let url = 'https://www.google.co.in/search?q=news&sca_esv=584255880&tbm=nws&sxsrf=AM9HkKkiVe9xvyRAiYD-Al3dB5beOljXcw:1700564619389&source=lnms&sa=X&ved=2ahUKEwiZnbnw-NSCAxW24zgGHdqfCtoQ_AUoAXoECAIQAw&biw=1366&bih=651&dpr=1'
	const response = await axios.request(url);
	console.log(response.data);
  this.articles = response.data.articles;
  this.loading = false;
} catch (error) {
	console.error(error);
  this.loading = false;
}
    },
  },
};
</script>

<style scoped>
/* Add your styles here */

.news-view {
  padding: 20px;
}

.news-article {
  margin-bottom: 20px;
}

.news-article h3 {
  margin-bottom: 10px;
}

.news-article a {
  color: #007BFF;
  text-decoration: underline;
}
</style>
