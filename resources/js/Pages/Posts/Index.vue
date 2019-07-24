<template>
    <Layout>
        <div class="container">
            <h2 class="text-center">All Posts</h2>
            <template v-if="posts.length">
                <div v-for="post in posts" :key="post.id">
                    <div class="card mb-3">
                        <div class="card-header">
                            {{ post.title }} - <a :href="post.url" target="_blank">{{ post.url }}</a>
                        </div>
                        <div class="card-body">
                            {{ post.description }}
                        </div>
                        <div class="card-footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <span>Upvote(s): {{ post.up_votes > 0 ? post.up_votes : 0 }}</span>
                                        <form method="POST" @submit.prevent="upvote(post)" class="d-inline-block">
                                            <!-- <label for="upvote"></label> -->
                                            <input type="checkbox" id="" aria-label="Upvote Post">
                                        </form>
                                    </div>
                                    <div class="col-sm-6">
                                        <span>Down vote(s): {{ post.down_votes > 0 ? post.down_votes : 0 }}</span>
                                        <form method="POST" class="d-inline-block">
                                            <input type="checkbox" id="" aria-label="Downvote Post" class="">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <h3 class="text-center">No Posts Currently</h3>
            </template>
        </div>
    </Layout>
</template>

<script>
import { computed } from 'vue-function-api';
import Layout from '@/Shared/Layout'
export default {
    setup(props) {
        const posts = computed(function () {
            return this.$page.posts;
        });
        const upvote = function (post) {
            this.$inertia.patch(route("post.upvote").url(), post.id)
                .then((res) => this.$inertia.reload())
        }
        const downvote = function (post) {
            this.$inertia.patch(route("post.downvote").url(), post.id)
                .then((res) => this.$inertia.reload())
        }
        return {
            posts,
            upvote
        }
    },
    components: {
        Layout
    }
}
</script>
