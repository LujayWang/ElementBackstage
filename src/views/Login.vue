<!-- 登录界面 -->
<template>
    <el-container>
        <el-header height="20%">Header</el-header>
        <el-main height="60%">
            <div></div>
        </el-main>
        <el-footer height="20%">Footer</el-footer>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped="scoped">
    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .el-container {
        height: 100%;
    }
</style>
