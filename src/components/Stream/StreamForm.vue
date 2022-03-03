<template>
  <div class="stream-add-container">
    <div class="header-div">
      <span>
        <router-link :to="{ name: 'stream' }">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </router-link>
      </span>
      <h1 v-if="$route.params.id == null">Add Stream</h1>
      <h1 v-if="$route.params.id != null">Update Stream</h1>
    </div>
    <div class="form-main">
      <div class="input-div">
        <div class="input-container">
          <label class="input-label"
            >Enter title of stream<span class="text-red-600">*</span></label
          >
          <div class="input-field-container">
            <input
              type="text"
              v-model="title"
              name="title"
              placeholder="Science, Commerce, Arts, Law"
            />
            <div class="error-div" v-if="formErrors.title.length">
              <p
                class="text-red-600"
                v-for="(err, idx) in formErrors.title"
                :key="idx"
              >
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                <span class="text-red-600 p-1">{{ err.msg }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="input-container">
          <label class="input-label"
            >Enter details of stream<span class="text-red-600">*</span></label
          >
          <div class="input-field-container">
            <textarea
              v-model="details"
              name="details"
              rows="10"
              placeholder="Main stream of law faculties"
            />
            <div class="error-div" v-if="formErrors.details.length">
              <p
                class="text-red-600"
                v-for="(err, idx) in formErrors.details"
                :key="idx"
              >
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                <span class="text-red-600 p-1">{{ err.msg }}</span>
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          v-if="$route.params.id == null"
          @click="createStream"
        >
          Create Stream
        </button>
        <button v-if="$route.params.id != null" @click="updateStream">
          Save Stream
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamAdd",
  data: () => {
    return {
      title: "",
      details: "",
      errMsg: [],
      formErrors: {
        title: [],
        details: [],
      },
    };
  },
  // watch: {
  //   title(value) {
  //     this.title = value;
  //     this.validateTitle(value);
  //   },
  //   details(value) {
  //     this.details = value;
  //     this.validateDetails(value);
  //   },
  // },
  methods: {
    validateTitle(value) {
      let msg = "";
      let id = 0;
      if (value.length == 0) {
        msg = "Title cannot be empty";
        id = 1;
        // this.errMsg["title"] = msg;
        const found = this.formErrors["title"].some(function (value) {
          return value.id === id;
        });
        if (!found && msg) this.formErrors["title"].push({ id, msg });
      }
      if (value.length < 3) {
        let difference = 3 - value.length;
        msg =
          "Title Must be of minimum 3 characters! " +
          difference +
          " characters left";
        id = 2;
        // this.errMsg["title"] = msg;
        const found = this.formErrors["title"].some(function (value) {
          return value.id === id;
        });
        if (!found && msg) this.formErrors["title"].push({ id, msg });
        // this.errMsg["title"] = msg;
        // this.formErrors["title"].push(msg);
      } else {
        // this.errMsg["title"] = "";
        this.formErrors["title"] = [];
      }
    },
    validateDetails(value) {
      let msg = "";
      let id=0
      if (value.length == 0) {
        id = 1;
        msg = "Details cannot be empty";
        const found = this.formErrors["details"].some(function (value) {
          return value.id === id;
        });
        if (!found && msg) this.formErrors["details"].push({ id, msg });
      } if (value.length < 8) {
        let difference = 8 - value.length;
        // this.errMsg["details"] = msg;
        msg =
          "Details Must be of minimum 8 characters! " +
          difference +
          " characters left";
        id=2;
        const found = this.formErrors["details"].some(function (value) {
          return value.id === id;
        });
        if (!found && msg) this.formErrors["details"].push({ id, msg });
      } else {
        // this.errMsg["details"] = "";
        this.formErrors["details"] = [];
      }
    },
    resetErrors() {
      this.formErrors = {
        title: [],
        details: [],
      };
    },
    createStream() {
      this.resetErrors();
      this.validateTitle(this.title);
      this.validateDetails(this.details)
      // this.$root.log(this.formErrors);
      const isTitleEmpty = this.title.length == 0;
      const isDetailsEmpty = this.details.length == 0;
      // if (isTitleEmpty) {
      //   this.errMsg["title"] = "Title cannot be empty";
      // }
      // if (isDetailsEmpty) {
      //   this.errMsg["details"] = "Details cannot be empty";
      // }
      if (
        !isTitleEmpty &&
        !isDetailsEmpty &&
        this.formErrors["title"].length == 0 &&
        this.formErrors["details"].length == 0
      ) {
        this.$root.log("Create API called");
      }
    },
    updateStream() {
      const isTitleEmpty = this.title.length == 0;
      const isDetailsEmpty = this.details.length == 0;
      if (
        !isTitleEmpty &&
        !isDetailsEmpty &&
        this.formErrors["title"].length == 0 &&
        this.formErrors["details"].length == 0
      ) {
        this.$root.log("Update API called");
      }
    },
  },
  mounted() {
    if (this.$route.params.id != null) {
      const stream = {
        title: "Science",
        details: "Main stream of all sciences faculties",
      };
      this.title = stream.title;
      this.details = stream.details;
    }
  },
};
</script>

<style lang="scss" scoped>
$bg-primary: #2980b9;
$bg-primary-faded: #dfe7f3;
$bg-primary-hover: #02409ee3;
$bg-primary-header: #297fb9d3;

.header-div {
  display: flex;
  align-items: center;
  h1 {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .fa {
    font-size: 1.2rem;
    padding: 4px 8px 4px 0;
    border-radius: 4px;
  }
}
.stream-add-container {
  min-height: inherit;
  display: flex;
  flex-direction: column;
  max-width: 75%;
  margin: 0 auto;
}
.form-main {
  //   margin-top: 100px;
  //   width: 50%;
  //   margin: 0 auto;
  min-height: 400px;
  display: flex;
  // justify-content: center;
  align-items: center;
}
.input-div {
  margin: 16px 0 16px 0;
  // margin-top: 100px;
  width: 100%;
  //   margin: 0 auto;
  button {
    float: right;
    margin-top: 3rem;
    text-align: center;
    padding: 8px 48px;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    border-radius: 4px;
    background-color: $bg-primary;
    color: whitesmoke;
    // font-size: 1.2rem;
    font-weight: bold;
  }
  button:hover {
    background-color: $bg-primary-hover;
    color: #dfe7f3;
  }
}
.input-container {
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  margin-top: 16px;
}
.input-container label {
  flex: 0 0 40%;
}
.input-container input {
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
  height: 100px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
  outline: none;
  background: #f1f1f1;
  box-shadow: none;
  border: 1px solid rgba(66, 65, 65, 0.219);
  border-radius: 4px;
  padding: 4px 8px;
  resize: none;
}
.input-container .input-field-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
}
.input-container .input-field-select {
  width: 100%;
}
.error-div {
  background-color: white;
  padding: 4px 0;
}
@media screen and (max-width: 768px) {
  .stream-add-container {
    max-width: 80%;
    // margin-left: 100px;
  }
  .input-div .input-container {
    flex-direction: column;
  }
}
</style>