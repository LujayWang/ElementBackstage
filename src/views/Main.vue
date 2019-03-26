<!-- 主页 -->
<template>
    <el-container>
        <el-header height="9%">
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="3">
                    微店家·店长平台
                </el-col>
                <el-col :span="2">
                    阳光奶茶屋
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="17%">
                <el-menu default-active="/main" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    background-color="#545c64" text-color="#fff" active-text-color="#409EFF" router='router'>
                    <el-menu-item index="/main">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/main/order/first">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">订单</span>
                    </el-menu-item>
                    <el-menu-item index="/main/goods/天天特价">
                        <i class="el-icon-goods"></i>
                        <span slot="title">商品</span>
                    </el-menu-item>
                    <el-menu-item index="/main/evaluate/first">
                        <i class="el-icon-message"></i>
                        <span slot="title">评价</span>
                    </el-menu-item>
                    <el-menu-item>
                        <i class="el-icon-setting"></i>
                        <span slot="title">帮助</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                router: true
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped="scoped">
    .el-header {
        background-color: #409EFF;
        color: #333;
    }

    .el-aside {
        background-color: #545c64;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        padding: 0;
    }

    .el-container:nth-child(1) {
        height: 100%;
    }

    .el-col {
        font-family: "Microsoft YaHei";
        text-align: center;
        margin-top: 17px;
        font-size: 20px;
        letter-spacing: 3px;
        color: white;
    }

    .el-menu-item>span {
        letter-spacing: 10px;
    }
</style>
