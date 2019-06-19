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
                            <input v-validate="'required'" type="text" name="name" v-model="user.name" class="form-control">
                            <!-- <input v-validate="'required|email'" name="email" type="text"> -->
                            <!-- <span class="text-danger" v-if="errorss.name">{{ errorss.name[0] }}</span> -->
                            <span class="text-danger">{{ errors.first('name') }}</span>
                            <!-- {{errors}} -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Email</label>
                            <input v-validate="'required|email'" type="text" name="email" v-model="user.email" class="form-control">
                            <span class="text-danger" v-if="errorss.email">{{ errorss.email[0] }}</span>
                            <span class="text-danger">{{ errors.first('email') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Password</label>
                            <input type="password" v-model="user.password" class="form-control">
                            <span class="text-danger" v-if="errorss.password">{{ errorss.password[0] }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Gender</label>
                            <br>
                            <input type="radio" value="male" v-model="user.gender" id="male"> <span for="male">Male &nbsp;&nbsp;&nbsp;</span> 
                            <input type="radio" value="female" v-model="user.gender" id="female"> <span for="female">Female </span><br>
                            <span class="text-danger" v-if="errorss.gander">{{ errorss.gander[0] }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Religion:</label>
                            <select class="form-control" v-model="user.religion">
                            	<option v-for="religion in religions">{{religion}}</option>
                            </select>
                            <span class="text-danger" v-if="errorss.religion">{{ errorss.religion[0] }}</span>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Education:</label><br>
                            <input type="checkbox" value="ssc" v-model="user.education" id="ssc"> <label for="ssc">S.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="hsc" v-model="user.education" id="hsc"> <label for="hsc">H.S.C&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="grd" v-model="user.education" id="grd"> <label for="grd">Graduate&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" value="pgrd" v-model="user.education" id="pgrd"> <label for="pgrd">Post Graduate</label><br>
                            <span class="text-danger" v-if="errorss.education">{{ errorss.education[0] }}</span>
                        </div>
                        <!-- {{user.bio}} -->
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">User Bio :</label><br>
                            <textarea class="form-control" v-model="user.bio"></textarea>
                            <span class="text-danger" v-if="errorss.bio">{{ errorss.bio[0] }}</span>
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
		data : function(){
			return{
                auth: window.auth,
				user: {
					name: '',
					email: '',
					password: '',
					gender: '',
					religion: 'Islam',
                    bio: '',
                    education: [],
				},
                errorss : {
                    name : [''],
                    email : [''],
                    password : [''],
                    gander : [''],
                    bio : [''],
                    education : [''],
                },
                // errors: {},
				religions : [
					'Islam',
					'Hindu',
					'Cristian',
					'Buddiest'
				]
			}
		},
        created() {
            console.log(this.auth);
        },
		methods: {
			saveForm() {
				var app = this;
                var newUser = app.user;
                // if(app.user.name == ''){
                //     app.errorss.name = ["Name is Required"];
                // }else{
                //     app.errorss.name = [""];
                // }

                // if(this.user.email == ''){
                //     app.errorss.email = ["Email is Required"];
                // }else{
                //     app.errorss.email = [""];
                // }
                
                // if(this.user.password == ''){
                //     app.errorss.password = ["Password is Required"];
                // }else{
                //     if(this.user.password.length < 8){
                //         app.errorss.password = ["Password must be 8 charecter"];
                //     }else{
                //         app.errorss.password = [""];
                //     }
                // }
                
                
                
                // if(this.user.gander == ''){
                //     app.errorss.gander = ["Gender is Required"];
                // }else{
                //     app.errorss.gander = [""];
                // }
                
                // if(this.user.bio){
                //     app.errorss.bio = ["Bio is Required"];
                // }else{
                //     app.errorss.bio = [""];
                // }
                
                // if(this.user.education.length < 1){
                //     app.errorss.education = ["Educatoin is Required"];
                // }else{
                //     app.errorss.education = [""];
                // }
                

                if(this.errors.items.length == 0){
                    axios.post('api/v1/user',newUser)
                    .then(function(result){
                        if (result.data.success === false) {
                            console.log(result.data.errorss.password[0]);
                            app.errorss = result.data.errorss;
                        }else{
                            app.$router.push({path: '/admin/user/'});
                        }
                    }).catch(function(resps){
                        // alert(resps.data);
                            console.log(resps);
                            // alert(resps.errorss.password[0]);
                        // app.user.errorss = resps.errorss;
                    });
                }
			}
		}
	}
</script>