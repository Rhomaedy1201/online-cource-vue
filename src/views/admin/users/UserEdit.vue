<template>
  <LayoutApp title="Edit User" subtitle="Untuk Merubah User">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <form @submit.prevent="postUser">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6>Nama</h6>
                    <fieldset class="form-group">
                      <input
                        type="text"
                        id="roundText"
                        class="form-control round"
                        placeholder="Masukkan Nama"
                        v-model="data.name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <h6>Email</h6>
                    <fieldset class="form-group">
                      <input
                        type="email"
                        id="roundText"
                        class="form-control round"
                        placeholder="Masukkan Email"
                        v-model="data.email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-6">
                    <h6>Role</h6>
                    <fieldset class="form-group">
                      <select class="form-select" name="name" id="basicSelect">
                        <option value="" disabled>-- Pilih Role --</option>
                        <option
                          v-for="role in data.roles"
                          :key="role.id"
                          :value="role.id"
                          :selected="role.id === data.role_id"
                        >
                          {{ role.name }}
                        </option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn icon icon-left btn-primary mt-2"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <LoadingModal :visible="data.loading" message="Mengambil data user..." />
  </LayoutApp>
</template>

<script setup>
import LayoutApp from "../../layouts/LayoutApp.vue";
import { useRouter, useRoute } from "vue-router";
import { showErrorAlert, showSuccessAlert } from "@/utils/alert";
import { onMounted, ref } from "vue";
import axios from "axios";
import LoadingModal from "@/components/LoadingModal.vue";

const router = useRouter();
const route = useRoute();

const id = route.params.id;

let data = ref({
  loading: false,
  loadingBtn: false,
  name: "",
  email: "",
  role_id: "",
  roles: [],
});

onMounted(() => {
  getUser();
  getRole();
});

const getRole = async () => {
  data.value.loading = true;
  try {
    const response = await axios.get(`/get-roles`);
    data.value.roles = response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data role:", error);
  } finally {
    data.value.loading = false;
  }
};

const getUser = async () => {
  data.value.loading = true;
  try {
    const response = await axios.get(`/users/find/${id}`);
    data.value.name = response.data.data.name;
    data.value.email = response.data.data.email;
    data.value.role_id = response.data.data.role_id;
  } catch (error) {
    console.error("Gagal mengambil data role:", error);
  } finally {
    data.value.loading = false;
  }
};

const postUser = async () => {
  data.value.loadingBtn = true;
  try {
    console.log(data.value);

    const response = await axios.put(`/users/${id}`, {
      name: data.value.name,
      email: data.value.email,
      role_id: data.value.role_id,
    });

    showSuccessAlert(response.data.message, router, "user");
  } catch (error) {
    if (error.response) {
      showErrorAlert(error.response.data.message);
    } else {
      showErrorAlert("Terjadi kesalahan pada server " + error.message);
    }
  } finally {
    data.value.loadingBtn = false;
  }
};
</script>