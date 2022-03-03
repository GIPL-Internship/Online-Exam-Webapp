<template>
  <div class="courses-main">
    <div class="courses-search-div">
      <auto-complete-input
        :dataList="['BSc', 'BCom', 'BA', 'MSc', 'MCom', 'MA']"
      />
    </div>
    <div class="courses-add-div">
      <button>
        <router-link :to="{ name: 'addCourse' }">Add Course</router-link>
      </button>
    </div>
    <div class="courses-list-div">
      <vue-confirm-dialog></vue-confirm-dialog>
      <div class="table">
        <div class="row header blue">
          <div class="cell">#</div>
          <div class="cell">Title of Course</div>
          <div class="cell">Details</div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>

        <div class="row">
          <div class="cell" data-title="id">1</div>
          <div class="cell" data-title="title"><a href="#">BSc</a></div>
          <div class="cell" data-title="details">
            Bachelor of Science degree
          </div>
          <div class="cell">
            <router-link :to="{ name: 'addCourse', params: { id: 1342 } }">
              <span>
                <box-icon name="edit-alt"></box-icon>
              </span>
            </router-link>
          </div>
          <div class="cell">
            <button @click="handleClick">
              <span>
                <box-icon name="trash"></box-icon>
              </span>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="cell" data-title="id">2</div>
          <div class="cell" data-title="title"><a href="#">BCom</a></div>
          <div class="cell" data-title="details">
            Bachelor of Commerce degree
          </div>
          <div class="cell">
            <span>
              <box-icon name="edit-alt"></box-icon>
            </span>
          </div>
          <div class="cell">
            <span>
              <box-icon name="trash"></box-icon>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="cell" data-title="id">3</div>
          <div class="cell" data-title="title"><a href="#">MA</a></div>
          <div class="cell" data-title="details">Master of Arts degree</div>
          <div class="cell">
            <span>
              <box-icon name="edit-alt"></box-icon>
            </span>
          </div>
          <div class="cell">
            <span>
              <box-icon name="trash"></box-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AutoCompleteInput from "../AutoCompleteInput/AutoCompleteInput.vue";
export default {
  name: "CourseList",
  data: () => {
    return {
      // opened: false,
    };
  },
  components: {
    AutoCompleteInput,
  },
  methods: {
    handleClick() {
      this.$confirm({
        message: `Are you sure want to delete?`,
        button: {
          no: "No",
          yes: "Yes",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            // ... do something
            console.log("Delete API called");
          }
        },
      });
    },
  },
  created() {
    this.$emit("pageTitle", "Courses");
  },
};
</script>

<style lang="scss" scoped>
$bg-primary: #2980b9;
$bg-primary-faded: #dfe7f3;
$bg-primary-hover: #02409ee3;
$bg-primary-header: #297fb9d3;

.courses-main {
  min-height: inherit;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
  /* align-items: center; */
}
.courses-main h1 {
  text-align: start;
  font-size: 1.5rem;
  font-weight: bolder;
}
.courses-search-div {
  margin: 1rem 0;
  width: 100%;
}
.courses-add-div {
  button {
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    border-radius: 4px;
    background-color: $bg-primary;
    color: whitesmoke;
    // font-size: 1.2rem;
    font-weight: bold;
    float: right;
  }
  button:hover {
    background-color: $bg-primary-hover;
    color: #dfe7f3;
  }
}
.courses-list-div {
  margin: 1rem 0;
  // padding: 8px;
  border-radius: 4px;
  // background-color: purple  ;
  // min-height: 400px;
  max-height: 600px;
  font-size: 1.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .card {
    background-color: rgba(221, 217, 217, 0.219);
    min-height: 80px;
    max-height: 50px;
    border-radius: 8px;
  }
  .card + .card {
    margin-top: 8px;
  }
}

.header-div {
  display: flex;
  justify-content: space-between;
}
.header-div .fa {
  font-size: 1.2rem;
}
.input-div {
  margin: 16px 0 16px 0;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.input-container input,
textarea {
  position: relative;
  width: 100%;
  height: 50px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  outline: none;
  background: #f1f1f1;
  box-shadow: none;
  border: 1px solid rgba(66, 65, 65, 0.219);
  border-radius: 4px;
  padding: 4px 8px;
}

.input-container textarea {
  position: relative;
  width: 100%;
  // height: 100px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  outline: none;
  background: #f1f1f1;
  box-shadow: none;
  border: 1px solid rgba(66, 65, 65, 0.219);
  border-radius: 4px;
  padding: 4px 8px;
}

@media screen and (max-width: 580px) {
  // body {
  //   font-size: 16px;
  //   line-height: 22px;
  // }
  .courses-main {
    max-width: 90%;
  }
}

@media screen and (max-width: 768px) {
  // body {
  //   font-size: 16px;
  //   line-height: 22px;
  // }
  .courses-main {
    max-width: 90%;
  }
}

.table {
  // margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: #f6f6f6;
}
.row a:hover {
  color: $bg-primary;
  font-weight: bold;
  transition: all 0.3s ease;
}
.row:nth-of-type(odd) {
  background: #e9e9e9;
}
.row.header {
  font-weight: 900;
  color: #ffffff;
  // background: #ea6153;
}
.row.blue {
  background: $bg-primary-header;
}
.cell span {
  cursor: pointer;
}
@media screen and (max-width: 580px) {
  .row {
    padding: 14px 0 7px;
    display: block;
  }
  .row.header {
    padding: 0;
    height: 6px;
  }
  .row.header .cell {
    display: none;
  }
  .row .cell {
    margin-bottom: 10px;
  }
  .row .cell:before {
    margin-bottom: 3px;
    content: attr(data-title);
    min-width: 98px;
    font-size: 10px;
    line-height: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #969696;
    display: block;
  }
}

.cell {
  padding: 16px 12px;
  display: table-cell;
}

@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 16px;
    display: block;
  }
}
</style>