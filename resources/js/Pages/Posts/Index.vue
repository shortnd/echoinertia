<template>
    <Layout>
        <div class="container">
            <h2 class="text-center">All Posts</h2>
            <template v-if="posts.length">
                <div v-for="post in posts" :key="post.id">

                </div>
            </template>
            <template v-else>
                <h3 class="text-center">No Posts Currently</h3>
            </template>
        </div>
    </Layout>
</template>

<script>
import { value, onMounted, computed } from 'vue-function-api';
import Layout from '@/Shared/Layout'
export default {
    setup(props) {
        const posts = computed(function () {
            return this.$page.posts;
        });
        return {
            posts
        }
    },
    components: {
        Layout
    }
}
</script>
