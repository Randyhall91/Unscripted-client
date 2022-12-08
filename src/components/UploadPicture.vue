<template>
  <form class="mt-4" @submit.prevent="handleSubmit" action="/upload" method="POST" enctype="multipart/form-data">
    <div class="form-group">
      <input type="file" name="file" id="input-files" class="form-control-file border" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
export default {
  setup() {
    return {
      // handleSubmit() {
      //   let imagesPreview = function (input, placeToInsertImagePreview) {
      //     if (input.files) {
      //       let filesAmount = input.files.length;
      //       for (i = 0; i < filesAmount; i++) {
      //         let reader = new FileReader();
      //         reader.onload = function (event) {
      //           $($.parseHTML("<img>"))
      //             .attr("src", event.target.result)
      //             .appendTo(placeToInsertImagePreview);
      //         };
      //         reader.readAsDataURL(input.files[i]);
      //       }
      //     }
      //   };
      //   $("#input-files").on("change", function () {
      //     imagesPreview(this, "div.preview-images");
      //   });
      // });
    }
  }
}
</script>


<style lang="scss" scoped>

</style>