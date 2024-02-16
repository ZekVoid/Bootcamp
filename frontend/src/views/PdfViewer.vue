<template>
  <div class="pdfviewer">
    <div class="form-container" ref="formContainer">
      <label for="formFileLg" class="form-label">Upload File</label>
      <input class="form-control form-control-lg" id="formFileLg" type="file" ref="fileInput">
      <button id="btnView" type="button" class="btn btn-primary" @click="openPdf">
        View PDF
      </button>
    </div>
    <iframe id="pdfViewer" width="100%" height="100%" ref="pdfViewer" style="position: fixed; right: 0; top: 70px; bottom: 20px; width: calc(100% - 800px); z-index: 1;"></iframe>
  </div>
</template>

<script>
export default {

  methods: {
    openPdf() {
      const file = this.$refs.fileInput.files[0];
      const pdfViewer = this.$refs.pdfViewer;

      if (file) {
        const fileUrl = URL.createObjectURL(file);
        pdfViewer.src = fileUrl;
        pdfViewer.style.display = 'block';
      } else {
        alert('Please select a PDF file to view.');
      }
    }
  }
};

</script>

<style scoped>
.pdfviewer {
  position: relative;
  height: 100%; 
}

.form-container {
  position: fixed;
  left: 0;
  top: 150px;
  bottom: 20px;
  width: 800px;
  padding: 20px;

  z-index: 1; 
}

#btnView {
  margin-top: 15px;
}

.form-label {

  font-size: 30px;
}

</style>
