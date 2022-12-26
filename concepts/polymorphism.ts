abstract class UIControlApp {
  public enable(): void {
    console.log("Enabled");
  }

  public abstract draw(): void;
}

class TextBoxApp extends UIControlApp {
  public draw(): void {
    console.log("Drawing a textbox ");
  }
}

class CheckBoxApp extends UIControlApp {
  public draw(): void {
    console.log("Drawing a checkbox");
  }
}

// UIControlApp is an object which takes different forms
// it may be a textbox object or a checkbox object
const drawUIControl = (control: UIControlApp) => {
  control.draw();
};

drawUIControl(new TextBoxApp());
// drawUIControl(new CheckBoxApp());
