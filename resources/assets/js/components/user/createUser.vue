<template>
	<div>
		<div class="form-group">
			<router-link to="/admin/user" class="btn btn-default">Back</router-link>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">Create User</div>
			<div class="panel-body">
				<form  v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User name</label>
                            <input type="text" v-model="user.name" class="form-control">
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Email</label>
                            <input type="text" v-model="user.email" class="form-control">
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Password</label>
                            <input type="password" v-model="user.password" class="form-control">
                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Gender</label>
                            <br>
                            <input type="radio" value="male" v-model="user.gender" id="male"> <span for="male">Male &nbsp;&nbsp;&nbsp;</span> 
                            <input type="radio" value="female" v-model="user.gender" id="female"> <span for="female">Female </span><br>
                            <!-- <span class="text-danger" v-if="errors.gander">{{ errors.gander[0] }}</span> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Religion:</label>
                            <select class="form-control" v-model="user.religion">
                            	<option v-for="religion in religions">{{religion}}</option>
                            </select>
                            <!-- <span class="text-danger" v-if="errors.religion">{{ errors.religion[0] }}</span> -->
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Education:</label><br>
                            <input type="checkbox" value="ssc" v-model="user.education" id="ssc"> <label for="ssc">S.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="hsc" v-model="user.education" id="hsc"> <label for="hsc">H.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="grd" v-model="user.education" id="grd"> <label for="grd">Graduate&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="pgrd" v-model="user.education" id="pgrd"> <label for="pgrd">Post Graduate</label><br>
                            <!-- <span class="text-danger" v-if="errors.education">{{ errors.education[0] }}</span> -->
                        </div>
                        <!-- {{user.bio}} -->
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Bio :</label><br>
                            <textarea class="form-control" v-model="user.bio"></textarea>
                            <!-- <span class="text-danger" v-if="errors.bio">{{ errors.bio[0] }}</span> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success" >Create</button>
                        </div>
                    </div>
                    <!-- {{ errors }} -->
                </form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data : function(){
			return{
				user: {
					name: '',
					email: '',
					password: '',
					gender: 'Male',
					religion: 'Islam',
                    bio: '',
                    education: [],
				},
                errors : [],
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
                axios.post('api/v1/user',newUser)
                .then(function(result){
                    if (result.data.success === false) {
                        console.log(result.data.errors.password[0]);
                        app.errors = result.data.errors;
                    }else{
                        app.$router.push({path: '/admin/user/'});
                    }
                }).catch(function(resps){
                    // alert(resps.data);
                        console.log(resps);
                        // alert(resps.errors.password[0]);
                    // app.user.errors = resps.errors;
                });
			}
		}
	}
</script>