class MailService {
  public sendEmail(): void {
    this.connect(100);
    this.authenticate();
    // Send Email
    this.disconnect();
  }
  private connect(timeOut: number): void {
    console.log("Connect");
  }
  private disconnect(): void {
    console.log("Disconnect");
  }
  private authenticate(): void {
    console.log("Authenticate");
  }
}

let mailService = new MailService();
mailService.sendEmail();
