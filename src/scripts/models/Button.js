export default class Button {
    constructor(query) {
        this.query = query;
        // console.log(this.query.buttonNew);
    }

    async renderButton() {
      console.log('hello');
      document.querySelector('.container').append(this.query.buttonNew);
    }

}
