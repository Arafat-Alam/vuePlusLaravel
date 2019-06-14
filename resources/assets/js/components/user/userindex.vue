<template>
	<div>
		<div class="form-group">
			<router-link to="/" class="btn btn-default">back</router-link>
			<router-link :to="{name: 'createUser'}" class="btn btn-success">Create User</router-link>
		</div>

		<div class="panel panel-default">
			<div class="panel-heading">User List</div>
			<div class="panel-body">
				<table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Religion</th>
                        <th>education</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
	                    <tr v-for="user, index in users">
	                        <td>{{ user.name}}</td>
	                        <td>{{ user.email}}</td>
	                        <td>{{ user.gender}}</td>
	                        <td>{{ user.religion}}</td>
	                        <td>{{ user.education}}</td>
	                        <td>
	                            <router-link :to="{name: 'editUser', params: {id: user.id}}" class="btn btn-xs btn-default">
	                                Edit
	                            </router-link>
	                            <a href="#"
	                               class="btn btn-xs btn-danger"
	                               v-on:click="deleteEntry(user.id, index)">
	                                Delete
	                            </a>
	                        </td>
	                    </tr>
                    </tbody>
                </table>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/user')
                .then(function (resp) {
                    app.users = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load companies");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/user/' + id)
                        .then(function (resp) {
                            app.users.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>