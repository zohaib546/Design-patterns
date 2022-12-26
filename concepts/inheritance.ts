// textbox
// button
// checkbox

// enable()
// focus()
// setPostion()

class UIControl {
  public enable(): void {
    console.log("Enabled");
  }
}

class TextBox extends UIControl {}

let textbox = new TextBox();
textbox.enable();
