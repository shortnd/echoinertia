<template>
    <Layout>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Welcome
                </div>

                <div class="card-body">
                    Welcome {{ $page.auth.user.name }}
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/Shared/Layout';
export default {
    components: {
        Layout
    }
}
</script>

<style>

</style>
