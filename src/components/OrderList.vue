<!-- 订单列表界面 -->
<template>
    <div>
        <el-card :body-style="{ padding: '10px'}" v-for="(order,index) in orders" v-bind:key="index">
            <el-row class="oid">{{index+1}}</el-row>
            <el-row class="order" type="flex" v-for="(item,index) in order" v-bind:key="index">
                <el-col :span="8">{{item.name}}</el-col>
                <el-col :span="8">x{{item.number}}</el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orders: [
                    [{
                        name: '仙草奶绿',
                        style: '',
                        number: 3
                    }, {
                        name: '双皮奶',
                        style: '',
                        number: 3
                    }],
                    [{
                        name: '仙草奶绿',
                        style: '',
                        number: 3
                    }, {
                        name: '双皮奶',
                        style: '',
                        number: 3
                    }]
                ]
            }
        }
    }
</script>

<style scoped="scoped">
    .oid {
        font-size: 35px;
        color: #409EFF;
        border-bottom: 1px solid lightgrey;
    }

    .el-card {
        margin-bottom: 10px;
    }

    .order {
        padding: 10px 20px;
    }
</style>
