
<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'userIndex'}" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
			<div class="panel-heading">Edit User</div>
			<div class="panel-body">
				<form  v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User name</label>
                            <input v-validate="'required'" type="text" v-model="user.name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Email</label>
                            <input type="text" v-model="user.email" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Gender</label>
                            <br>
                            <input type="radio" value="male" v-model="user.gender" id="male"> <label for="male">Male</label>  &nbsp;&nbsp;&nbsp;
                            <input type="radio" value="female" v-model="user.gender" id="female"> <label for="female">Female</label> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Religion:</label>
                            <select class="form-control" v-model="user.religion">
                            	<option v-for="religion in religions">{{religion}}</option>
                            </select>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Education:</label><br>
                            <input type="checkbox" value="ssc" v-model="user.education" id="ssc"> <label for="ssc">S.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="hsc" v-model="user.education" id="hsc"> <label for="hsc">H.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="grd" v-model="user.education" id="grd"> <label for="grd">Graduate&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="pgrd" v-model="user.education" id="pgrd"> <label for="pgrd">Post Graduate</label>
                        </div>
                        <!-- {{user.bio}} -->
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Bio :</label><br>
                            <textarea class="form-control" v-model="user.bio"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success" >Create</button>
                        </div>
                    </div>
                </form>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.userId = id;
            axios.get('/api/v1/user/' + id)
                .then(function (resp) {
                    app.user = resp.data;
                })
                .catch(function () {
                    alert("Could not load user")
                });
        },
        data: function () {
            return {
                userId: null,
                user: {
					// name: '',
					// email: '',
					// gender: 'Male',
					// religion: 'Islam',
                    // bio: '',
                    // education: [],
				},
				religions : [
					'Islam',
					'Hindu',
					'Cristian',
					'Buddiest'
				]
            }
        },
        methods: {
            saveForm() {
                var app = this;
                var newUser = app.user;
                axios.patch('/api/v1/user/' + app.userId, newUser)
                    .then(function (resp) {
                        app.$router.replace('/admin/user/');
                    })
                    .catch(function (resps) {
                        console.log(resps);
                        alert("Could not edit");
                    });
            }
        }
    }
</script>
