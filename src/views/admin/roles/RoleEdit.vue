<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<template>
  <LayoutApp title="Edit Role" subtitle="Untuk Merubah Role">
    <section id="input-style">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <!-- <h4 class="card-title">Input Styles</h4> -->
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <h6>Nama</h6>
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
                class="btn icon icon-left btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutApp>
</template>