<!-- 首页界面 -->
<template>
    <div id="home">
        <el-row :gutter="10" style="width:90%">
            <el-col :span="14">
                <el-card shadow="always">
                    <el-row class="title">待处理订单</el-row>
                    <el-row type="flex" class="data">
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">新订单</el-row>
                        </el-col>
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">已完成订单</el-row>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="always">
                    <el-row class="title">待处理反馈</el-row>
                    <el-row type="flex" class="data">
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">未回复差评</el-row>
                        </el-col>
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">未回复评价</el-row>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" style="width:90%">
            <el-col :span="14">
                <el-card shadow="always">
                    <el-row class="title">今日总览</el-row>
                    <el-row type="flex" class="data">
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">今日订单</el-row>
                        </el-col>
                        <el-col :span="12">
                            <el-row class="da">0</el-row>
                            <el-row class="tit">今日营业额</el-row>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="always">
                    总是显示
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
</script>

<style>
    #home {
        padding: 20px 20px;
    }
    
    .title{
        border-bottom: 2px solid #eeeeee;
        font-size: 20px;
        padding-bottom: 10px;
    }

    .el-card {
        padding: 0 10px 20px 10px;
        margin-bottom: 10px;
    }
 
    .data > .el-col{
        text-align: center;
        padding: 40px 0;
    }
    .da{
        font-size: 60px;
    }
    
    .tit{
        
    }
    
</style>
