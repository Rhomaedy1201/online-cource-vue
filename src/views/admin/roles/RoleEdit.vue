<template>
  <LayoutApp title="Edit Role" subtitle="Untuk Merubah Role">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="updateRole">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <h6>Nama</h6>
                    <fieldset class="form-group">
                      <select
                        v-model="name"
                        class="form-select"
                        name="name"
                        id="basicSelect"
                      >
                        <option value="Administrator">Administrator</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Student">Student</option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </LayoutApp>
</template>


<script setup>
import { onMounted, ref } from "vue";
import LayoutApp from "../../layouts/LayoutApp.vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { showSuccessAlert, showErrorAlert } from "@/utils/alert";

const router = useRouter();
const route = useRoute();

const name = ref("");
const roleId = route.params.id;

onMounted(() => {
  getRole();
});

const getRole = async () => {
  try {
    const response = await axios.get(`/role-edit/${roleId}`);
    name.value = response.data.data.name;
  } catch (error) {
    console.error("Gagal mengambil data role:", error);
  }
};

const updateRole = async () => {
  try {
    const response = await axios.put(`/role-update/${roleId}`, {
      name: name.value,
    });

    if (response.status === 200) {
      showSuccessAlert(response.data.data, router, "role");
    } else {
      showErrorAlert(response.data.data);
    }
  } catch (error) {
    console.error("Gagal update role:", error);
  }
};
</script>
