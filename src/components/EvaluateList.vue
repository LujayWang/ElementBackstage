<!-- 评价列表界面 -->
<template>
    <el-card shadow="always">
        <div v-for="(evaluate,index) in evaluates" :key="index">
            <el-row type="flex" justify="space-between" style="border-bottom: 2px solid #EEEEEE;">
                <el-col :span="15">
                    <el-row type="flex">
                        <el-col :span="2"><img src="../assets/1.png" class="image" /></el-col>
                        <el-col :span="22">
                            <el-row>{{evaluate.name}}</el-row>
                            <el-row>
                                <el-rate v-model="evaluate.rate" disabled text-color="#ff9900" score-template="{value}">
                                </el-rate>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="3" style="text-align: center;">
                    {{evaluate.date}}
                </el-col>
            </el-row>
            <el-row style="padding:20px 0">{{evaluate.message}}</el-row>
            <el-row>
                <el-input placeholder="请输入内容" v-model="reMessage">
                    <el-button slot="append" type="primary">回复</el-button>
                </el-input>
            </el-row>
        </div>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                evaluates: [{
                    imgUrl: '',
                    name: '啊鸿沟哈',
                    rate: 3,
                    message: 'ahgoahgoahgoahgoahgoahgohahag',
                    date: '2019-3-5'
                }],
                reMessage: ''
            }
        }
    }
</script>

<style scoped="scoped">
    .image {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border: 1px solid lightgrey;
    }
</style>
