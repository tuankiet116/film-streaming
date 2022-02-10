<template>
  <div id="list">
    <header-navbar></header-navbar>
    <div
      class="list-container"
      v-for="listItem in listItems"
      :key="listItem.listItemId"
    >
      <div v-if="name == listItem.listItemName">
        <h1>{{ listItem.listItemTitle }}</h1>
        <b-container>
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              xs="12"
              v-for="listChild in listItem.listItemChild"
              :key="listChild.listChildId"
            >
              <div class="list-items">
                <router-link to="#">
                  <div class="list-items-img">
                    <img :src="listChild.listChildImg" alt="film image" />
                  </div>
                  <div class="list-items-info">
                    <p class="list-items-title">{{ listChild.listChildTitle }}</p>
                    <p class="list-items-eng">{{ listChild.listChildEng }}</p>
                  </div>
                </router-link>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div v-else></div>
    </div>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderNavbar from "../components/Header.vue";
import FooterMenu from "../components/Footer.vue";

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      components: { HeaderNavbar, FooterMenu },
      listItems: [
        {
          listItemId: 1,
          listItemName: "phim-moi",
          listItemTitle: "Phim mới",
          listItemChild: [
            {
              listChildId: 1,
              listChildTitle: "Người Nhện: Không Còn Nhà",
              listChildEng: "Spider-man: No Way Home",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 2,
              listChildTitle: "Venom 2: Đối Mặt Tử Thù",
              listChildEng: "Venom: Let There Be Carnage",
              listChildImg: require("../assets/images/venom-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 3,
              listChildTitle: "Biệt Đội Cảm Tử 2",
              listChildEng: "Suicide Squad 2",
              listChildImg: require("../assets/images/suicide-squad-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 4,
              listChildTitle: "Chủng Tộc Bất Tử",
              listChildEng: "Eternals",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 5,
              listChildTitle: "Người Nhện: Không Còn Nhà",
              listChildEng: "Spider-man: No Way Home",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 6,
              listChildTitle: "Venom 2: Đối Mặt Tử Thù",
              listChildEng: "Venom: Let There Be Carnage",
              listChildImg: require("../assets/images/venom-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 7,
              listChildTitle: "Biệt Đội Cảm Tử 2",
              listChildEng: "Suicide Squad 2",
              listChildImg: require("../assets/images/suicide-squad-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 8,
              listChildTitle: "Chủng Tộc Bất Tử",
              listChildEng: "Eternals",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            }
          ]
        },
        {
          listItemId: 2,
          listItemName: "phim-le",
          listItemTitle: "Phim lẻ",
          listItemChild: [
            {
              listChildId: 1,
              listChildTitle: "Người Nhện: Không Còn Nhà",
              listChildEng: "Spider-man: No Way Home",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 2,
              listChildTitle: "Venom 2: Đối Mặt Tử Thù",
              listChildEng: "Venom: Let There Be Carnage",
              listChildImg: require("../assets/images/venom-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 3,
              listChildTitle: "Biệt Đội Cảm Tử 2",
              listChildEng: "Suicide Squad 2",
              listChildImg: require("../assets/images/suicide-squad-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 4,
              listChildTitle: "Chủng Tộc Bất Tử",
              listChildEng: "Eternals",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            }
          ]
        },
        {
          listItemId: 3,
          listItemName: "phim-bo",
          listItemTitle: "Phim bộ",
          listItemChild: [
            {
              listChildId: 1,
              listChildTitle: "Người Nhện: Không Còn Nhà",
              listChildEng: "Spider-man: No Way Home",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 2,
              listChildTitle: "Venom 2: Đối Mặt Tử Thù",
              listChildEng: "Venom: Let There Be Carnage",
              listChildImg: require("../assets/images/venom-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 3,
              listChildTitle: "Biệt Đội Cảm Tử 2",
              listChildEng: "Suicide Squad 2",
              listChildImg: require("../assets/images/suicide-squad-2.jpg"),
              listChildLink: "#"
            },
            {
              listChildId: 4,
              listChildTitle: "Chủng Tộc Bất Tử",
              listChildEng: "Eternals",
              listChildImg: require("../assets/images/spider-man-nwh-2.jpg"),
              listChildLink: "#"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
#list {
  background-color: rgb(60, 60, 60);
  width: 100%;
  height: auto;
}

#list .list-container h1 {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  color: rgb(252, 226, 69);
  margin-left: 8.5vw;
  margin-bottom: 40px;
  padding-top: 150px;
}

#list .list-container .list-items {
  margin-bottom: 50px;
}

#list .list-container .list-items a {
  text-decoration: none;
}

#list .list-container .list-items .list-items-img {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 3px rgb(30, 30, 30);
}

#list .list-container .list-items .list-items-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#list .list-container .list-items .list-items-info {
  margin-top: 15px;
}

#list .list-container .list-items .list-items-info .list-items-title {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 18px;
  color: rgb(252, 226, 69);
  text-shadow: 5px 5px 4px rgb(30, 30, 30);
  margin-bottom: 5px;
  overflow-y: hidden;
  height: 30px;
}

#list .list-container .list-items .list-items-info .list-items-eng {
  font-family: "Roboto", Arial;
  font-weight: bold;
  font-size: 14px;
  color: white;
  text-shadow: 5px 5px 4px rgb(30, 30, 30);
  overflow-y: hidden;
  height: 30px;
}
</style>
