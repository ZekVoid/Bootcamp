<template>
    <div class="pdfviewer">
  
      <label for="formFileLg" class="form-label">Upload File</label>
      <input class="form-control form-control-lg" id="formFileLg" type="file" ref="fileInput">
  
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
  
      <button id="btnView" type="button" class="btn btn-primary" @click="openPdf">
        View PDF
      </button>
  
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openPdf() {
        const file = this.$refs.fileInput.files[0];
  
        if (file) {
          const fileUrl = URL.createObjectURL(file);
  
          window.open(fileUrl, '_blank');
        } else {
          alert('Please select a PDF file to view.');
        }
      }
    }
  };
  </script>
  
  
  <style scoped>

  .form-floating {

    margin-top: 25px;
  }

  #btnView {

    margin-top: 25px;
  }
 
  </style>
  