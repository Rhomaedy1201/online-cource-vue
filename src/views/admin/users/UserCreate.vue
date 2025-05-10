<template>
  <LayoutApp title="Tambah User" subtitle="Untuk Menambah User">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <form @submit.prevent="postRole">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6>Nama</h6>
                    <fieldset class="form-group">
                      <input
                        type="text"
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
                      <select
                        class="form-select"
                        v-model="data.role_id"
                        id="basicSelect"
                      >
                        <option value="" disabled>-- Pilih Role --</option>
                        <option
                          v-for="dataRole in data.roles"
                          :key="dataRole.id"
                          :value="dataRole.id"
                        >
                          {{ dataRole.name }}
                        </option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn icon icon-left btn-primary mt-2"
                  :disabled="data.loadingBtn"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <LoadingModal :visible="data.loading" message="Loaded Data" />
  </LayoutApp>
</template>


<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import LayoutApp from "../../layouts/LayoutApp.vue";
import { showSuccessAlert, showErrorAlert } from "@/utils/alert";
import LoadingModal from "@/components/LoadingModal.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const data = ref({
  loading: false,
  loadingBtn: false,
  name: "",
  email: "",
  role_id: "",
  roles: [],
});

onMounted(() => {
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

const postRole = async () => {
  data.value.loadingBtn = true;
  try {
    const response = await axios.post("/users", {
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