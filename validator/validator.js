const FormValidators = function (data) {
    this.data = data;
    this.errors = [];
};

FormValidators.prototype.validateUserInput = function () {
    this.data.forEach((element) => {
      if (element.form_data === "") {
        this.errors.push(`Form ${element.form_name} harus diisi`);
      }
    });
};

FormValidators.prototype.validateUserInput = function () {
    this.data.forEach((element) => {
      if (element.form_data === "") {
        this.errors.push(`Form ${element.form_name} harus diisi`);
      }
    });
};