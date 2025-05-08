<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<template>
  <LayoutApp title="Tambah User" subtitle="Untuk Menambah User">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <!-- <h4 class="card-title">Input Styles</h4> -->
            </div>
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
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <h6>Role</h6>
                  <fieldset class="form-group">
                    <select class="form-select" name="name" id="basicSelect">
                      <option value="Administrator">Administrator</option>
                      <option value="Instructor">Instructor</option>
                      <option value="Student">Student</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <button
                @click="$router.back()"
                class="btn icon icon-left btn-primary mt-2"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutApp>
</template>