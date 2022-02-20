<template>
  <div id="type">
    <header-admin :token="tokenAdmin"></header-admin>
    <side-bar></side-bar>

    <div class="panel">
      <div class="panel-content">
        <b-container fluid>
          <!-- User Interface controls -->
          <b-row>
            <b-col lg="6">
              <p class="panel-title">Quản lý thể loại</p>
              <button class="panel-show panel-add" @click="show=true">
                <b-icon icon="plus-square-fill" class="panel-add-icon"></b-icon>
                <p>Thêm mới</p>
              </button>
            </b-col>

            <b-col lg="6" class="my-1">
              <b-input-group size="sm" class="search-align">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="Nhập để tìm kiếm"
                ></b-form-input>

                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>

          <!-- Main table element -->
          <b-table
            class="table-types"
            responsive
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            stacked="md"
            show-empty
            small
            @filtered="onFiltered"
          >
            <template #cell(actions)="row">
              <button
                class="panel-show"
                @click="showEdit=true; showTypeInfo(row.item.id)"
              >
                <b-icon icon="pencil-fill" class="panel-show-icon"></b-icon>
              </button>
              <button class="panel-show panel-trash" @click="deleteRow(row.item.id)">
                <b-icon icon="trash-fill" class="panel-show-icon"></b-icon>
              </button>
            </template>

            <template #row-details="row">
              <b-card>
                <ul>
                  <li v-for="(value, key) in row.item" :key="key">
                    {{ key }}: {{ value }}
                  </li>
                </ul>
              </b-card>
            </template>
          </b-table>

          <b-row>
            <b-col lg="4" md="6" sm="12">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
                class="my-0"
              >
              </b-pagination>
            </b-col>

            <b-col lg="8" sm="8" md="8" class="my-1">
              <div class="per-page-align">
                <span> Hiển thị </span>

                <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="sm"
                ></b-form-select>
              </div>
            </b-col>
          </b-row>

          <!-- Info modal -->
          <b-modal
            v-model="showEdit" 
            title="Cập nhật thể loại"
          >
            <b-form-group
              class="mb-2"
              label="Tên thể loại"
              label-for="film-name"
            >
              <b-form-input
                id="film-name"
                v-model="updateTypeName"
                class="mt-1"
                placeholder="Nhập tên thể loại phim"
                trim
              ></b-form-input>
            </b-form-group>

            <!-- <b-form-checkbox name="enable" v-model="updateCheck" @click="enableUpdate">
              <span style="margin-left: 8px"> Kích hoạt/Vô hiệu </span>
            </b-form-checkbox> -->

            <b-form-checkbox name="enable" v-model="updateCheck" @click="enableUpdate">
              <span style="margin-left: 8px"> Kích hoạt/Vô hiệu </span>
            </b-form-checkbox>
            
            <template #modal-footer>
              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="updateType(itemType.id)"
              >
                Cập nhật
              </b-button>

              <b-button
                variant="danger"
                size="sm"
                class="float-right"
                @click="showEdit=false"
              >
                Hủy
              </b-button>
            </template>
          </b-modal>

          <!-- Add modal -->
          <b-modal v-model="show" title="Thêm mới thể loại" ok-only>
            <b-form-group
              class="mb-2"
              label="Tên thể loại"
              label-for="film-name"
            >
              <b-form-input
                id="film-name"
                v-model="addTypeName"
                class="mt-1"
                placeholder="Nhập tên thể loại phim"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox name="enable" @click="enableType">
              <span style="margin-left: 8px"> Kích hoạt/Vô hiệu </span>
            </b-form-checkbox>

            <template #modal-footer>
              <span v-if="loading">
                <b-spinner style="position: absolute; margin-left: -40px; margin-top: -4.5px"></b-spinner>
                <p style="margin-bottom: 0"> Xin vui lòng đợi </p>
              </span>

              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="addTypes"
              >
                Thêm mới
              </b-button>

              <b-button
                variant="danger"
                size="sm"
                class="float-right"
                @click="show=false"
              >
                Hủy
              </b-button>
            </template>
          </b-modal>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "./components/Header.vue";
import SideBar from "./components/Sidebar.vue";
import axios from "axios";
import { API_URL } from "../constant/api";

export default {
  components: { HeaderAdmin, SideBar },
  data() {
    return {
      loading: false,
      API_URL,
      msg: '',
      addTypeName: '',
      enableCheck: '',
      updateTypeName: '',
      updateCheck: '',
      show: false,
      showEdit: false,
      items: [],
      itemType: [],
      fields: [
        {
          key: "name",
          label: "Tên phim",
          sortDirection: "desc"
        },
        {
          key: "active",
          label: "Trạng thái",
          formatter: (value, key, item) => {
            return value ? "Kích hoạt" : "Vô hiệu";
          }
        },
        { key: "actions", label: "Hành động", class: "text-right" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Hiển thị nhiều" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "Sủa thể loại",
        name: "",
        source: ""
      },
      paddingLeft: "20.4%",
      count: true,
      tokenAdmin: localStorage.getItem('tokenAdmin')
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    },

    list() {
      return this.$store.state.list;
    },

    computedPanel() {
      return this.paddingLeft;
    }
  },
  created() {
    if (this.tokenAdmin) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.tokenAdmin;
    }
    axios
      .get(this.API_URL + "admin/type/list")
      .then(res => {
        if (res.data.data.count > 0) {
          this.items = res.data.data.rows;
        }
      })
      .catch(err => {
        if (err.response.status == 401) {
          alert("Bạn không có quyền truy cập!");
          this.$router.push({
            name: "AdminLogin"
          });
        }
        location.reload();
      });
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Thông tin thể loại: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    changePanel() {
      if (this.count) {
        (this.paddingLeft = "0"), (this.count = !this.count);
      } else {
        (this.paddingLeft = "20.4%"), (this.count = !this.count);
      }
    },
    deleteRow(id) {
      this.$swal({
        icon: "question",
        text: "Bạn có muốn xóa dữ liệu này?",
        confirmButtonText: "Đồng ý",
        showDenyButton: true,
        denyButtonText: `Hủy`
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete(this.API_URL + "admin/type/delete/" + id)
            .then(response => {
              this.$swal({
                icon: "success",
                text: "Xóa thành công",
                confirmButtonText: "Đồng ý"
              }).then(result => {
                if (result.isConfirmed) {
                  location.reload();
                }
              });
            });
        } else if (result.isDenied) {
        }
      });
    },
    enableType(checkbox) {
      if (checkbox.checked) {
        return this.enableCheck = 1
      }
      else {
        return this.enableCheck = 0
      }
    },
    enableUpdate(checkbox) {
      if (checkbox.checked) {
        return this.updateCheck = 1
      }
      else {
        return this.updateCheck = 0
      }
    },
    addTypes() {
      if (this.addTypeName == "") {
        return this.msg = "Tên thể loại không được để trống";
      } else {    
        this.loading = true;
        const types = {
          name: this.addTypeName,
          active: this.enableCheck
        };

        axios
          .post(this.API_URL + "admin/type/create", types)
          .then(response => {
            this.loading = false;
            this.checkAddTypes(response.data, response.status);
          })
          .catch(err => {
            this.loading = false;
            if (err.response.status == 500) {
              this.$swal({
                icon: "error",
                text: "Thêm mới thất bại!",
                confirmButtonText: "Đóng"
              });
              return (this.msg = "");
            }
          });
      }
    },

    checkAddTypes(data, status) {
      if (status == 200 && data.code == 200) {
        this.$swal({
          icon: "success",
          text: "Thêm mới thành công!",
          confirmButtonText: "Đóng"
        }).then(result => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
        return;
      }
    },

    showTypeInfo(id) {
      axios
        .get(this.API_URL + "admin/type/show/" + id)
        .then(res => {
          this.itemType = res.data.data;   
          console.log(res);
          if (res.data.data.name != '') {
            this.updateTypeName = res.data.data.name;
          }
          else {
            this.updateTypeName = '';
          }

          if (res.data.data.active) {
            this.updateCheck = res.data.data.active;
          }
          else {
            this.updateCheck = '';
          }
        })
        .catch(err => {
      });   
    },

    updateType(id) {
      if (this.updateTypeName == "") {
        return this.msg = "Tên thể loại không được để trống";
      } else {    
        this.loading = true;
        const updateTypes = {
          name: this.updateTypeName,
          active: this.updateCheck
        };

        axios
          .put(this.API_URL + "admin/type/update/" + id, updateTypes)
          .then(response => {
            this.loading = false;
            this.checkUpdateType(response.data, response.status);
          })
          .catch(err => {
            this.loading = false;
            if (err.response.status == 500) {
              this.$swal({
                icon: "error",
                text: "Cập nhật thất bại!",
                confirmButtonText: "Đóng"
              });
              return (this.msg = "");
            }
          });
      }
    },

    checkUpdateType(data, status) {
      if (status == 200 && data.code == 200) {
        this.$swal({
          icon: "success",
          text: "Cập nhật thành công!",
          confirmButtonText: "Đóng"
        }).then(result => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
        return;
      }
    },
  }
};
</script>

<style scoped>
#type {
  height: auto;
}

#type .panel {
  position: relative;
  width: 80%;
  height: 91.5vh;
  padding: 30px;
  float: left;
  background-color: rgb(210, 210, 210);
}

#type .panel .panel-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgba(30, 30, 30, 0.25);
}

#type .panel .panel-content .panel-title {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 0;
  padding-top: 20px;
  margin-right: 10px;
  color: rgb(13, 202, 240);
  display: inline-block;
}

#type .panel .panel-content .search-align {
  padding-top: 18px;
}

#type .panel .panel-content .per-page-align {
  float: right;
}

#type .panel .panel-content .panel-show {
  border: none;
  width: 28px;
  height: 28px;
  background-color: #0d6efd;
  border-radius: 5px;
}

#type .panel .panel-content .panel-trash {
  background-color: #dc3545;
}

#type .panel .panel-content .panel-add {
  background-color: #198754;
  width: auto;
  height: auto;
  padding: 5px 8px;
  display: inline-block;
}

#type .panel .panel-content .panel-add p {
  color: white;
  font-family: "Roboto", Arial;
  font-size: 13px;
  margin-bottom: 0;
  display: inline-block;
}

#type .panel .panel-content .panel-show .panel-show-icon,
#type .panel .panel-content .panel-show .panel-add-icon {
  color: white;
}

#type .panel .panel-content .panel-show .panel-add-icon {
  font-size: 13px;
}
</style>
