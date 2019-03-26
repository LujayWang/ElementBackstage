<!-- 订单界面 -->
<template>
    <div class="order">
        <el-tabs v-model="activeName">
            <el-tab-pane label="待处理订单" name="first">
                <router-view />
            </el-tab-pane>
            <el-tab-pane label="已完成订单" name="second">
                <router-view />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        watch: {
            activeName(val) {
                if (val === "first") {
                    this.$router.push('/main/order/first')
                } else {
                    this.$router.push('/main/order/second')
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped="scoped">
    .order{
        padding: 10px 20px;
    }
</style>
