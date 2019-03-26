<!-- 评价界面 -->
<template>
    <div id="evaluate">
        <el-tabs v-model="activeName">
            <el-tab-pane label="全部评价" name="first">
                <router-view />
            </el-tab-pane>
            <el-tab-pane label="未回复评价" name="second">
                <router-view />
            </el-tab-pane>
            <el-tab-pane label="未回复差评" name="third">
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
                if (this.activeName === "first") {
                    this.$router.push('/main/evaluate/first')
                } else if (this.activeName === "second") {
                    this.$router.push('/main/evaluate/second')
                } else {
                    this.$router.push('/main/evaluate/third')
                }
            }
        },
    }
</script>

<style scoped="scoped">
    #evaluate {
        padding: 10px 20px;
    }
</style>
