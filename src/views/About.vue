<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toggleHighlightedPostVisibility">{{ showHighlighted ? 'Hide' : 'Show'}} highlighted posts</button>
    <BlogPost v-for="blogPost in visibleBlogPosts" :post="blogPost" :key="blogPost.title"/>
  </div>
</template>
<script lang="ts">
  // import Vue from "vue";vu
  import {Component, Vue} from "vue-property-decorator";
  import BlogPost, {Post} from "../components/BlogPost.vue";
  import { AxiosResponse } from "axios";

  @Component({
    components: {
      BlogPost,
    },

  })
  export default class About extends Vue {
    //"private" means, that the variable or method is not available for other components
    private blogPosts: Post[] = [
      // {
      //   title: 'My first blogpost ever!',
      //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti dolorem labore, nihil possimus similique?',
      //   author: 'Alexander',
      //   datePosted: new Date(2019,1,18),
      //   highlighted: false
      // },
      // {
      //   title: 'Look, I am blogging!',
      //   body: ' Animi aut consequatur illum incidunt mollitia, non rerum vitae. Aliquam aut commodi possimus ratione!',
      //   author: 'Alexander',
      //   datePosted: new Date(2019,1,20),
      //   highlighted: true
      // },
      // {
      //   title: 'Another one??',
      //   body: 'oops, there is no lorem ipsum',
      //   author: 'Annonimus',
      //   datePosted: new Date(2019,1,22),
      //   highlighted: false
      // }
    ]
    public showHighlighted: boolean = true;
    get visibleBlogPosts() {// getter here is an equivalent of computed property in vue.js
      return this.blogPosts.filter((post: Post) => post.highlighted === false || post.highlighted === this.showHighlighted)
    }
    public toggleHighlightedPostVisibility() {
      this.showHighlighted = !this.showHighlighted;
    }
    private created(){//we should use http calls in the created method, because of two reasons:
      //1.we can limit the amount of time the user has to wait for appearance of data on the screen
      //2.mounted hook is not used, while serverside rendering
      console.log('the app is created');
      this.$http.get('http://localhost:3000/blogPosts').then((response: AxiosResponse) => {
        this.blogPosts = response.data.map((val: any) => ({
          title: val.title,
          body: val.body,
          author: val.author,
          datePosted: new Date(val.datePosted),
          highlighted: JSON.parse(val.highlighted),
        }));
      });
    }
    private mounted() {
      console.log('the app is mounted');
    }
  }
</script>