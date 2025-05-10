<template>
  <LayoutApp title="Tambah Role" subtitle="Untuk Menambah Role">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <form @submit.prevent="storeRole">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <h6>Nama</h6>
                    <fieldset class="form-group">
                      <select
                        class="form-select"
                        v-model="name"
                        required
                        id="basicSelect"
                      >
                        <option disabled value="">Pilih Role</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Student">Student</option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <button type="submit" class="btn icon icon-left btn-primary">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </LayoutApp>
</template>

<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { showSuccessAlert, showErrorAlert } from "@/utils/alert";
import { ref } from "vue";

export default {
  components: {
    LayoutApp,
  },
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const name = ref("");

    const storeRole = async () => {
      loading.value = true;

      try {
        const response = await axios.post("/role-store", {
          name: name.value,
        });
        if (response.status === 200) {
          showSuccessAlert(response.data.data, router, "role");
        } else {
          showErrorAlert(response.data.data);
        }
      } catch (error) {
        console.error("Gagal membuat role:", error);
      } finally {
        loading.value = false;
      }
    };
    return { name, loading, storeRole };
  },
};
</script>