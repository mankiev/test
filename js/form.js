export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }
  
  getValue() {
    const elementsValue = {};
    for (const field of this.form.elements) {
      if (field.name) {
        elementsValue[field.name] = field.value;
      }
    }
    return elementsValue;
  }
  
  isValidity() {
    return this.form.checkValidity();
  }
  
  resetForm() {
    this.form.reset();
  }
};