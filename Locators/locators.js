class Locators {
    Username = "//input[@placeholder='Username']";
    Password = "//input[@placeholder='Password']";
    login = "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']";
    admin = "(//span[normalize-space()='Admin'])[1]";
    usernameee = "(//input[@class='oxd-input oxd-input--active'])[2]";
    Search = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']";
    job = "//span[normalize-space()='Job']";
    jobtitle = "//a[normalize-space()='Job Titles']";
    add = "//button[normalize-space()='Add']";
    writejobtitle = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
    save = "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']";
    configaration = "//span[normalize-space()='Configuration']";
    emailconfig = "//a[normalize-space()='Email Configuration']";
    emailbox = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/input';
    saveConfig = "//button[@type='submit']";
    configaration3 = "//span[normalize-space()='Configuration']";
    configEmailSub = "//a[normalize-space()='Email Subscriptions']";
    leaveApp = "//div[@role='table']//div[1]//div[1]//div[3]//div[1]//div[1]//label[1]//span[1]";
    module = "//a[normalize-space()='Modules']";
    mobilebutton = "//div[9]//div[1]//label[1]//span[1]";
    saveModule = "//button[@type='submit']";
    organization = "//span[normalize-space()='Organization']";
    organizationInfo  = "//ul[@class='oxd-dropdown-menu']";
}

export default new Locators();
