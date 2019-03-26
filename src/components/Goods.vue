<!-- 商品管理界面 -->
<template>
    <el-container>
        <el-aside width="18%">
            <el-input placeholder="请输入菜品" prefix-icon="el-icon-search" v-model="search">
            </el-input>
            <el-menu default-active="/main/goods/天天特价" class="el-menu-vertical-demo" background-color="#D3DCE6"
                text-color="#fff" active-text-color="#409EFF" router="isRouter">
                <el-menu-item index="/main/goods/天天特价">天天特价</el-menu-item>
            </el-menu>
        </el-aside>

        <el-main>
            <el-button class="add-fl" type="primary" @click="dialogLbVisible = true" icon="el-icon-plus" circle>添加分类</el-button>
            <el-button class="add-cp" type="primary" @click="dialogGoodsVisible = true" icon="el-icon-plus" circle>添加菜品</el-button>
            <el-button class="add-yh" type="primary" @click="dialogGoodsVisible = true" icon="el-icon-plus" circle>添加优惠</el-button>
            <router-view />
        </el-main>

        <el-dialog title="商品类别" :visible.sync="dialogLbVisible">
            <el-form :model="form">
                <el-form-item label="种类名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="种类详情" :label-width="formLabelWidth">
                    <el-input v-model="form.detail" type="textarea" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogLbVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogLbVisible = false">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog title="商品详情" :visible.sync="dialogGoodsVisible">
            <el-form :model="goods">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

                <el-form-item label="商品名称" prop="name" required>
                    <el-input size="small" v-model="goods.name" style="width:40%"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="price" required>
                    <el-input-number size="small" :min="0" v-model="goods.price" :precision="2" :step="0.1" :max="10"></el-input-number>
                </el-form-item>
                <el-form-item label="商品数量" prop="number" required>
                    <el-input-number size="small" :min="0" v-model="goods.number" :step="1" :max="1000"></el-input-number>
                </el-form-item>
                <el-form-item label="商品规格" prop="style">
                    <el-checkbox-group v-model="goods.style.size">
                        <el-checkbox label="大杯" name="type"></el-checkbox>
                        <el-checkbox label="中杯" name="type"></el-checkbox>
                        <el-checkbox label="小杯" name="type"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group v-model="goods.style.wendu">
                        <el-checkbox label="冷" name="type"></el-checkbox>
                        <el-checkbox label="常温" name="type"></el-checkbox>
                        <el-checkbox label="热" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即创建</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>

        </el-dialog>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                isRouter: true,
                form: {
                    name: '',
                    detail: ''
                },
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
                }],
                dialogLbVisible: false,
                dialogGoodsVisible: false,
                formLabelWidth: '120px',
                search: '',
                imageUrl: ''
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                console.log(this.imageUrl);
            },
            beforeAvatarUpload(file) {
                return true;
            }
        }
    }
</script>

<style scoped="scoped">
    .el-container {
        height: 100%;
    }

    .el-aside {
        background-color: white;
        color: #333;
        text-align: center;

    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .add-fl {
        box-shadow: 0 3px 4px grey;
        position: absolute;
        top: 40%;
        right: 2%;
    }

    .add-cp {
        box-shadow: 0 3px 4px grey;
        position: absolute;
        top: 50%;
        right: 2%;
    }

    .add-yh {
        box-shadow: 0 3px 4px grey;
        position: absolute;
        top: 60%;
        right: 2%;
    }

    .avatar-uploader,
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 100px;
        height: 100px;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }

    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
</style>
