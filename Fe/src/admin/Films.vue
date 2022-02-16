<template>
  <div id="films">
    <header-admin></header-admin>
    <side-bar></side-bar>

    <div class="panel">
      <div class="panel-content">
        <b-container fluid>
          <!-- User Interface controls -->
          <b-row>
            <b-col lg="6">
              <p class="panel-title">Quản lý phim</p>
              <button class="panel-show panel-add" @click="show = true">
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
            <template #cell(image)="row">
              {{ row.value.image }}
              <div class="table-img">
                <img src="../assets/images/spider-man-nwh-2.jpg" />
                <!-- <img :src="row.value.image"> -->
              </div>
            </template>

            <template #cell(actions)="row">
              <button
                class="panel-show"
                @click="info(row.item, row.index, $event.target)"
              >
                <b-icon icon="pencil-fill" class="panel-show-icon"></b-icon>
              </button>
              <button class="panel-show panel-trash">
                <b-icon icon="trash-fill" class="panel-show-icon"></b-icon>
              </button>
              <!-- <b-button size="sm" @click="row.toggleDetails">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button> -->
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
            :id="infoModal.id"
            :title="infoModal.title"
            ok-only
            @hide="resetInfoModal"
          >
            <b-form-group class="mb-2" label="Tên phim" label-for="film-name">
              <b-form-input
                id="film-name"
                class="mt-1"
                placeholder="Nhập tên phim"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Thể loại" label-for="film-type">
              <b-form-input
                id="film-type"
                class="mt-1"
                placeholder="Nhập thể loại"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="mb-2"
              label="Nguồn phim"
              label-for="film-source"
            >
              <b-form-file v-model="file2" class="mt-1" plain></b-form-file>
            </b-form-group>

            <b-form-group class="mb-2" label="Diễn viên" label-for="film-actor">
              <b-form-input
                id="film-source"
                class="mt-1"
                placeholder="Nhập tên diễn viên"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Trailer" label-for="film-actor">
              <b-form-input
                id="film-trailer"
                class="mt-1"
                placeholder="Nhúng trailer"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Ảnh" label-for="film-actor">
              <b-form-file v-model="file2" class="mt-1" plain></b-form-file>
            </b-form-group>

            <b-form-group class="mb-2" label="Mô tả" label-for="film-actor">
              <b-form-textarea
                id="textarea-default"
                class="mt-1"
                placeholder="Default textarea"
              ></b-form-textarea>
            </b-form-group>
          </b-modal>

          <!-- Add modal -->
          <b-modal v-model="show" id="add-modal" title="Thêm mới phim" ok-only>
            <b-form-group class="mb-2" label="Tên phim" label-for="film-name">
              <b-form-input
                id="film-name"
                class="mt-1"
                placeholder="Nhập tên phim"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Thể loại" label-for="film-type">
              <b-form-input
                id="film-type"
                class="mt-1"
                placeholder="Nhập thể loại"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="mb-2"
              label="Nguồn phim"
              label-for="film-source"
            >
              <b-form-file v-model="file2" class="mt-1" plain></b-form-file>
            </b-form-group>

            <b-form-group class="mb-2" label="Diễn viên" label-for="film-actor">
              <b-form-input
                id="film-source"
                class="mt-1"
                placeholder="Nhập tên diễn viên"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Trailer" label-for="film-actor">
              <b-form-input
                id="film-trailer"
                class="mt-1"
                placeholder="Nhúng trailer"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2" label="Ảnh" label-for="film-actor">
              <b-form-file v-model="file2" class="mt-1" plain></b-form-file>
            </b-form-group>

            <b-form-group class="mb-2" label="Mô tả" label-for="film-actor">
              <b-form-textarea
                id="textarea-default"
                class="mt-1"
                placeholder="Default textarea"
              ></b-form-textarea>
            </b-form-group>

            <template #modal-footer>
              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="show = false"
              >
                Thêm mới
              </b-button>

              <b-button
                variant="danger"
                size="sm"
                class="float-right"
                @click="show = false"
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
  components: {
    HeaderAdmin,
    SideBar
  },
  data() {
    return {
      API_URL,
      show: false,
      items: [
        {
          active: true,
          title: "Người Nhện: Không Còn Nhà",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        },
        {
          active: true,
          title: "Venom 2: Đối Mặt Tử Thù",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        },
        {
          active: true,
          title: "Biệt Đội Cảm Tử 2",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        },
        {
          active: true,
          title: "Chủng Tộc Bất Tử",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        },
        {
          active: true,
          title: "Ma Trận: Hồi Sinh",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        },
        {
          active: true,
          title: "Đấu Trường Âm Nhạc 2",
          type: "Phim mới",
          source: "abc",
          actor: "Tom Holland...",
          trailer: "abc",
          image: "",
          description: "Mô tả phim người nhện"
        }
      ],
      fields: [
        {
          key: "title",
          label: "Tên phim",
          sortDirection: "desc"
        },
        {
          key: "type",
          label: "Thể loại",
          class: "text-center"
        },
        {
          key: "source",
          label: "Nguồn phim",
          class: "text-center"
        },
        {
          key: "actor",
          label: "Diễn viên",
          class: "text-center"
        },
        {
          key: "trailer",
          label: "Trailer",
          class: "text-center"
        },
        {
          key: "image",
          label: "Ảnh",
          class: "text-center"
        },
        {
          key: "description",
          label: "Mô tả",
          class: "text-center"
        },
        {
          key: "active",
          label: "Trạng thái",
          formatter: (value, key, item) => {
            return value ? "Kích hoạt" : "Vô hiệu";
          }
        },
        {
          key: "actions",
          label: "Hành động"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [
        5,
        10,
        15,
        {
          value: 100,
          text: "Hiển thị nhiều"
        }
      ],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      paddingLeft: "20.4%",
      count: true,
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return {
            text: f.label,
            value: f.key
          };
        });
    },

    list() {
      return this.$store.state.list;
    },

    computedPanel() {
      return this.paddingLeft;
    },

    adminFilmList() {
        return this.$store.state.adminFilmList;
    }
  },
  mounted() {
    axios
      .get(this.API_URL + "admin/film/list")
      .then(res => {
        console.log(res)
        store.dispatch('setAdminFilmList')
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
      this.infoModal.title = `Thông tin phim: ${index}`;
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
  }
};
</script>

<style scoped>
#films {
  height: auto;
}

#films .panel {
  position: relative;
  width: 80%;
  height: 91.5vh;
  padding: 30px;
  float: left;
  background-color: rgb(210, 210, 210);
}

#films .panel .panel-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgba(30, 30, 30, 0.25);
}

#films .panel .panel-content .panel-title {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 0;
  padding-top: 20px;
  margin-right: 10px;
  color: rgb(13, 202, 240);
  display: inline-block;
}

#films .panel .panel-content .search-align {
  padding-top: 18px;
}

#films .panel .panel-content .per-page-align {
  float: right;
}

#films .panel .panel-content .panel-show {
  border: none;
  width: 28px;
  height: 28px;
  background-color: #0d6efd;
  border-radius: 5px;
}

#films .panel .panel-content .panel-trash {
  background-color: #dc3545;
}

#films .panel .panel-content .panel-add {
  background-color: #198754;
  width: auto;
  height: auto;
  padding: 5px 8px;
  display: inline-block;
}

#films .panel .panel-content .panel-add p {
  color: white;
  font-family: "Roboto", Arial;
  font-size: 13px;
  margin-bottom: 0;
  display: inline-block;
}

#films .panel .panel-content .panel-show .panel-show-icon,
#films .panel .panel-content .panel-show .panel-add-icon {
  color: white;
}

#films .panel .panel-content .panel-show .panel-add-icon {
  font-size: 13px;
}
</style>
