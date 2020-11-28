<template>
  <div class="uploads">
    <div class="upload__heading">
      <div class="upload__heading_content">
        <svg x="0px" y="0px" width="84" height="84" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
          <g id="Layer_1">
            <g>
              <circle class="st10" cx="32" cy="32" r="32"/>
            </g>
            <g class="st11">
              <g>
                <path class="st12" d="M48,32c0-8.8-7.2-16-16-16c-7.5,0-13.8,5.2-15.5,12.1C11.7,28.9,8,33,8,38c0,5.5,4.5,10,10,10h8     c1.1,0,2-0.9,2-2v-5.5c0-0.8-0.7-1.5-1.5-1.5h-3.1c-1.5,0-1.9-1-0.9-2.2l7.7-9.8c1-1.2,2.6-1.2,3.5,0l7.7,9.8     c1,1.2,0.6,2.2-0.9,2.2h-3.1c-0.8,0-1.5,0.7-1.5,1.5V46c0,1.1,0.9,2,2,2h10c4.4,0,8-3.6,8-8S52.4,32,48,32z"/>
              </g>
            </g>
            <g>
              <g>
                <path class="st13" d="M48,30c0-8.8-7.2-16-16-16c-7.5,0-13.8,5.2-15.5,12.1C11.7,26.9,8,31,8,36c0,5.5,4.5,10,10,10h8     c1.1,0,2-0.9,2-2v-5.5c0-0.8-0.7-1.5-1.5-1.5h-3.1c-1.5,0-1.9-1-0.9-2.2l7.7-9.8c1-1.2,2.6-1.2,3.5,0l7.7,9.8     c1,1.2,0.6,2.2-0.9,2.2h-3.1c-0.8,0-1.5,0.7-1.5,1.5V44c0,1.1,0.9,2,2,2h10c4.4,0,8-3.6,8-8S52.4,30,48,30z"/>
              </g>
            </g>
          </g>
          <g id="Layer_2">
          </g>
        </svg>
        <h1>Add more beautyfull music</h1>
      </div>
    </div>
    
    <div class="uploads__main">
      <div class="upload__btns">

        <div class="upload__block">
          <input type="file" multiple @change="selectFile" style="display:none;" />
          <button class="browse__music" :class="selectedFiles ? 'browse__full' : ''">
            Chose music
          </button>
          
        </div>

        <div v-if="progressInfos.length == 0 && selectedFiles" class="files__selected">
          <ol class="">
            <li class="file__selected" v-for="file in selectedFiles" :key="file.id"> 
              {{ file.name }}
            </li>
          </ol>
          <div class="files__content">
            <form action="">
              <div class="form__item album__title">
                <label>
                  <input class="album__create"
                          type="text" name="website" id="website" required placeholder=" ">
                  <span>Album name</span>
                </label>
              </div>
            </form>

            <div class="albums__upload__list">
              <div class="genre__choice">
                <div class="genre__content genre__name" v-for="genre in genres" :key="genre.id"
                      @click="selectGenre(genre)" :class="genre.name === currentGenre.name ? 'genre__selected': ''">
                  <h3>{{ genre.name }}</h3>
                </div>
              </div>
            </div>
          </div>

          <button v-if="selectedFiles" class="upload__music"
            :disabled="!selectedFiles"
            @click="uploadFiles"
          >
            Upload
          </button>

        </div>

        <div v-if="progressInfos.length > 0" class="progress__wrapper">
          <div class="">
            <div class="progress__infos"
              v-for="(progressInfo, index) in progressInfos"
              :key="index"
            >
              <span>{{progressInfo.fileName}}</span>
              <div class="progress">
                <progress id="file" :value="progressInfo.percentage" max="100" :style="{ width: progressInfo.percentage + '%' }">
      <!--           <div class="progress-bar progress-bar-info"
                  role="progressbar"
                  :aria-valuenow="progressInfo.percentage"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: progressInfo.percentage + '%' }"
                > -->
                  {{progressInfo.percentage}}%
                </progress>
                <svg v-if="progressInfo.percentage == 100" class="check"  width="40" height="40" viewBox="0 0 64 64" >
                <g id="Layer_1">
                  <g>
                    <circle class="st0" cx="32" cy="32" r="32"/>
                  </g>
                  <g class="st1">
                    <g>
                      <path class="st2" d="M46,45c0,2.2-1.8,4-4,4H22c-2.2,0-4-1.8-4-4V25c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4V45z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path class="st3" d="M22,45c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v20c0,1.1-0.9,2-2,2H22z"/>
                    </g>
                    <g>
                      <path class="st4" d="M42,23v20H22V23H42 M42,19H22c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4V23     C46,20.8,44.2,19,42,19L42,19z"/>
                    </g>
                  </g>
                  <g class="st1">
                    <g>
                      <path class="st2" d="M32.5,41c-0.6,0-1.2-0.3-1.6-0.8l-6.1-8c-0.7-0.9-0.5-2.1,0.4-2.8c0.9-0.7,2.1-0.5,2.8,0.4l4.2,5.5     c2.3-4.2,7.3-11.8,15.3-16.9c0.9-0.6,2.2-0.3,2.8,0.6c0.6,0.9,0.3,2.2-0.6,2.8c-10.2,6.6-15.2,18-15.3,18.1     c-0.3,0.7-0.9,1.1-1.6,1.2C32.6,41,32.5,41,32.5,41z"/>
                    </g>
                  </g>
                  <g>
                    <path class="st5" d="M32.5,39c-0.6,0-1.2-0.3-1.6-0.8l-6.1-8c-0.7-0.9-0.5-2.1,0.4-2.8c0.9-0.7,2.1-0.5,2.8,0.4l4.2,5.5    c2.3-4.2,7.3-11.8,15.3-16.9c0.9-0.6,2.2-0.3,2.8,0.6c0.6,0.9,0.3,2.2-0.6,2.8c-10.2,6.6-15.2,18-15.3,18.1    c-0.3,0.7-0.9,1.1-1.6,1.2C32.6,39,32.5,39,32.5,39z"/>
                  </g>
                </g>
                <g id="Layer_2">
                </g>
                </svg>
                <svg v-else version="1.1" width="40" height="40" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
                  <g id="Layer_1">
                    <g>
                      <circle class="st0" cx="32" cy="32" r="32"/>
                    </g>
                    <g class="st1">
                      <g>
                        <path class="st2" d="M46,45c0,2.2-1.8,4-4,4H22c-2.2,0-4-1.8-4-4V25c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4V45z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path class="st3" d="M22,45c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v20c0,1.1-0.9,2-2,2H22z"/>
                      </g>
                      <g>
                        <path class="st4" d="M42,23v20H22V23H42 M42,19H22c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4V23     C46,20.8,44.2,19,42,19L42,19z"/>
                      </g>
                    </g>
                    <g class="st1">
                      <g>
                        <path class="st2" d="M47,51.4c-0.7,0-1.3-0.3-1.7-0.9c-11.8-18.6-31-27.9-31.2-28c-1-0.5-1.4-1.7-0.9-2.7c0.5-1,1.7-1.4,2.7-0.9     c0.8,0.4,20.3,9.9,32.8,29.5c0.6,0.9,0.3,2.2-0.6,2.8C47.7,51.3,47.4,51.4,47,51.4z"/>
                      </g>
                    </g>
                    <g>
                      <path class="st5" d="M47,49.4c-0.7,0-1.3-0.3-1.7-0.9c-11.8-18.6-31-27.9-31.2-28c-1-0.5-1.4-1.7-0.9-2.7s1.7-1.4,2.7-0.9    c0.8,0.4,20.3,9.9,32.8,29.5c0.6,0.9,0.3,2.2-0.6,2.8C47.7,49.3,47.4,49.4,47,49.4z"/>
                    </g>
                    <g class="st1">
                      <g>
                        <path class="st2" d="M17.6,52c-0.5,0-0.9-0.2-1.3-0.5c-0.8-0.7-0.9-2-0.2-2.8c0.2-0.2,15.9-18.6,28.8-32.1c0.8-0.8,2-0.8,2.8-0.1     c0.8,0.8,0.8,2,0.1,2.8C35,32.8,19.3,51.2,19.1,51.3C18.7,51.8,18.2,52,17.6,52z"/>
                      </g>
                    </g>
                    <g>
                      <path class="st5" d="M17.6,50c-0.5,0-0.9-0.2-1.3-0.5c-0.8-0.7-0.9-2-0.2-2.8c0.2-0.2,15.9-18.6,28.8-32.1c0.8-0.8,2-0.8,2.8-0.1    c0.8,0.8,0.8,2,0.1,2.8C35,30.8,19.3,49.2,19.1,49.3C18.7,49.8,18.2,50,17.6,50z"/>
                    </g>
                  </g>
                  <g id="Layer_2">
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div class="album__new">
            <h1>Album</h1>
            <h3>genre</h3>
          </div>
        </div>

      </div>

    <div v-if="message" class="alert__box" role="alert">
      <!-- <ul class="alert__list">
        <li v-for="(ms, i) in message.split('\n')" :key="i" class="alert__item">
        
          {{ ms }}
        </li>
      </ul> -->
    </div>
</div>
<!--     <div class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div> -->
  </div>
</template>


<script>
import UploadService from "../services/UploadFilesService";

export default {
  name: "upload-files",
  data() {
    return {
      selectedFiles: undefined,
      progressInfos: [],
      message: "",
      fileInfos: [],
      genres : [
          { id: 1,
            name: 'Rock&Roll',},
          { id: 2,
            name: 'Electronic',},
          { id: 3,
            name: 'Pop',},
          { id: 4,
            name: 'Mix',},
          { id: 5,
            name: 'Reggae',},
          { id: 6,
            name: 'Folk',},
          { id: 7,
            name: 'Country',},
          { id: 8,
            name: 'Disco',},
          { id: 9,
            name: 'HipHop',},
          { id: 10,
            name: 'Funk',},
          { id: 11,
            name: 'Jazz',},
          { id: 12,
            name: 'Blues',},
          { id: 13,
            name: 'R&B',},
        ],
      currentGenre: {id: 11, name: 'Jazz'},
        genreSelected: false
    };
  },
  methods: {
    selectFile() {
      this.progressInfos = [];
      this.selectedFiles = event.target.files;
    },
    uploadFiles() {
      this.message = "";

      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    },
    upload(idx, file) {
      this.progressInfos[idx] = { percentage: 0, fileName: file.name };

      UploadService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      })
        .then((response) => {
          let prevMessage = this.message ? this.message + "\n" : "";
          this.message = prevMessage + response.data.message;

          return UploadService.getFiles();
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch((e) => {
          this.progressInfos[idx].percentage = 0;
          this.message = "Could not upload the file:" + file.name;
          console.log(e)
        });
    },

    selectGenre(genre) {
      this.currentGenre = genre;
      //this.selectAlbums;
    },
  },

  mounted() {
    UploadService.getFiles().then((response) => {
      this.fileInfos = response.data;
    });
    document.querySelector('button').addEventListener('click', () => {
  document.querySelector('input[type="file"]').click();
});
  }
};
</script>

<style lang="scss">
  .uploads {
    display: grid;
    padding: 0;
    margin: 0;
  }

  .upload__heading {
    background: radial-gradient(transparent 5%, #444) calc(50% - .125em) 30% content-box, 
                linear-gradient(#bbb, #bbb) content-box, 
                linear-gradient(-90deg, #d0d3d5, #d2d5d7) border-box;
    color: var(--blue-grey-darker);
  }

  .upload__heading_content {
    padding: 1em;
  }

  .uploads__main {
    display: grid;
    justify-content: center;
    justify-items: center;
    //background: var(--blue-grey-darkest);
    max-width: 790px;
    justify-self: center;
    margin: 1em;
    border-radius: .2em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    background: var(--blue-grey-darker);
  }

  .upload__btns {
    /* display: grid;
    justify-content: center;
    align-items: baseline;
    padding: 1em;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    justify-items: center; */
    //padding: 1em;
  }

  .alert__box,
  .progress__infos,
  .upload__block {
    text-align: left;
  }
  
  .browse__music {
    //display: inline-block;
    background: transparent;
    padding: 7px 15px;
    font-weight: 700;
    border-radius: .2em;
    border: 2px solid var(--blue-grey-dark);
    white-space: nowrap;
    cursor: pointer;
    font-size: 1em;
    color: var(--blue-grey-light);
    transition: ease-in-out .5s all;
    grid-area: 2 / 1 / 3 / 3;
  }

  .browse__music:hover {
    border: 2px solid var(--blue-grey-light);
    background: var(--blue-grey-lighter);
    color: var(--blue-grey-darkest);
  }

  .browse__full {
    border: 2px solid var(--blue-grey-dark);
    color: var(--blue-grey-dark);
    margin: 1em 0 0 1em;
  }

  .upload__music {
    background: transparent;
    padding: 7px 15px;
    font-weight: 700;
    border-radius: .2em;
    border: 2px solid var(--blue-grey-darkest);
    white-space: nowrap;
    cursor: pointer;
    font-size: 1em;
    color: var(--blue-grey-darkest);
    transition: ease-in-out .5s all;
    grid-area: 2 / 1 / 3 / 3;
    align-self: center;
    justify-self: center;
  }

  .upload__music:hover {
    border: 2px solid var(--blue-grey-light);
    color: var(--blue-grey-lighter);
    background: var(--blue-grey-darker);
  }

  .alert__list {
    list-style-type: none;
    padding: .5em;
    margin: 0;
    color: var(--blue-grey-darkest);
  }

  .alert__item {
    display: flex;
    align-items: center;
  }

  .alert__box {
    border-radius: .2em;
    background: var(--blue-grey);
  }

  .st0{fill:none;}
  .st1{opacity:0.2;}
  .st2{fill:#231F20;}
  .st3{fill:none;}
  .st4{fill:#4F5D73;}
  .st5{fill:var(--blue-grey-lighter);}

  .st10{fill:none;}
  .st11{fill:var(--blue-grey-darkest);}
  .st12{fill:var(--blue-grey-dark);}
  .st13{fill:var(--blue-grey-darker);}

  .files__selected {
    border-radius: .2em;
    background: linear-gradient(45deg, var(--blue-grey-darker), var(--blue-grey-dark));
    padding: .5em 1em;
    box-shadow: 0px 0px 10px rgba(18, 37, 53, 0.77);
    grid-area: 2 / 1 / 3 / 3;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1em;
    margin-top: 1em;
    //color: var(--blue-grey-lighter);
  }
  .file__selected {
    text-align: left;
  }

  ol {
    color: var(--blue-grey-lighter);
    background: var(--blue-grey-darkest);
    padding: .5em .5em .5em 2em;
    margin-top: 1.3em;
    border-radius: .2em;
  }

  .files__content {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    justify-items: left;
    align-content: baseline;
    grid-row-gap: 1em;
  }

  .albums__upload__list {
    /* grid-area: 2 / 3 / 4 / 4; */
    justify-self: left;
    align-self: baseline;
    width: 245px;
}

  .album__title {
    display: grid;
    justify-content: stretch;
  }

  .album__create {
    color: var(--blue-grey-lighter);
    background: var(--blue-grey-darker);
    border: 2px solid var(--blue-grey-dark);
    font-family: 'Play', sans-serif;
  }
  .album__create:hover {
    color: var(--blue-grey-darkest);
  }
  .album__new {
    align-self: center;
  }

  .progress__wrapper {
    border-radius: .2em;
    background: var(--blue-grey-darker);
    padding: .5em;
    color: var(--blue-grey-lighter);
    box-shadow: 0px 0px 15px rgba(18, 37, 53, 0.77);
    grid-area: 2 / 1 / 3 / 3;
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
  }

  .progress {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
  }

  .genre__choice {
    display: flex;
    flex-wrap: wrap;
    grid-gap: .5em;
    background: var(--blue-grey-darker);
    padding: .5em;
    border-radius: .2em;
    box-shadow: 0px 0px 3px #5f7c97;
  }


  form { 
    label {
      margin:20px 0 0 0;
      position:relative;
      display:inline-block;
    }
    
    label > span {
      padding:10px 20px;
      pointer-events: none;
      position:absolute;
      left:0;
      top:0;
      transition: 0.2s;
      transition-timing-function: ease;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      opacity:0.5;
    }

    input {
      padding:10px;
      //background: #728da6;;
      background: var(--blue-grey-dark);
      border: 2px solid var(--blue-grey-dark);
      border-radius: .2em;
      //border: 2px solid transparent;
    }

    input:hover {
      border: 2px solid var(--blue-grey-darkest);
    }

    input:focus {
      background: var(--blue-grey-lighter);
      border: 2px solid var(--blue-grey-darkest);
      box-shadow: 0px 0px 2px var(--blue-grey-darker) inset;
    }

    input:focus + span, input:not(:placeholder-shown) + span {
      opacity:1;
      color: var(--blue-grey-darkest);
      transform: scale(0.9) translateY(-100%) translateX(-15px);
    }

    /* For IE Browsers*/
    input:focus + span, input:not(:-ms-input-placeholder) + span {
      opacity:1;
      transform: scale(0.75) translateY(-100%) translateX(-30px);
    }
  }

</style>