<!-- 商品列表界面 -->
<template>
    <div id="goodsList">
        <el-row class="top">{{$route.params.goods}}<el-button size="mini" type="info" icon="el-icon-edit">编辑</el-button>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8" v-for="(sp,index) in sps" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <el-row type="flex" justify="space-around">
                        <el-col :span="12" class="infor">
                            <el-row class="gname">{{sp.name}}</el-row>
                            <el-row class="gprice">￥{{sp.price}}</el-row>
                            <el-row class="gnum">{{sp.number}}/1000</el-row>
                        </el-col>
                        <el-col :span="8" class="infor">
                            <img src="../assets/1.png" width="100%" height="auto" />
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="space-around">
                        <el-col :span="12">
                            <el-button-group>
                                <el-button size="small" type="primary">置满</el-button>
                                <el-button size="small" type="info" plain>沽清</el-button>
                            </el-button-group>
                        </el-col>
                        <el-col :span="8" style="text-align: center;">
                            <el-button size="small" type="info" plain>编辑</el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods: {
                    name: '',
                    price: 0,
                    number: 0,
                    style: {
                        size: [],
                        wendu: []
                    }
                },
                sps: [{
                    name: '抹茶奶绿',
                    price: 10,
                    number: 999
                }, {
                    name: '双皮奶',
                    price: 10,
                    number: 100
                }, {
                    name: '拿铁咖啡',
                    price: 9,
                    number: 809
                }, {
                    name: '抹茶奶盖',
                    price: 13,
                    number: 999
                }]
            }
        }
    }
</script>

<style scoped="scoped">
    #goodsList {
        width: 87%
    }

    .el-card {
        height: 240px;
    }

    .top {
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 20px;
    }

    .infor,
    .image {
        margin: 13px 0;
    }

    .gname {
        margin-bottom: 20px;
        font-size: 18px;
    }

    .gprice {
        color: red;
        margin-bottom: 45px;
    }

    .gnum {
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>
