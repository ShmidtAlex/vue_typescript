<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BlogPost v-for="blogPost in blogPosts" :post="blogPost" :key="blogPost.title"/>
  </div>
</template>
<script lang="ts">
  // import Vue from "vue";vu
  import {Component, Vue} from "vue-property-decorator";
  import BlogPost, {Post} from "../components/BlogPost.vue";
  @Component({
    components: {
      BlogPost,
    },

  })
  export default class About extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'My first blogpost ever!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti dolorem labore, nihil possimus similique?',
        author: 'Alexander',
        datePosted: new Date(2019,1,18),
        highlighted: false
      },
      {
        title: 'Look, I am blogging!',
        body: ' Animi aut consequatur illum incidunt mollitia, non rerum vitae. Aliquam aut commodi possimus ratione!',
        author: 'Alexander',
        datePosted: new Date(2019,1,20),
        highlighted: true
      },
      {
        title: 'Another one??',
        body: 'oops, there is no lorem ipsum',
        author: 'Annonimus',
        datePosted: new Date(2019,1,22)
      }
    ]
  }
</script>