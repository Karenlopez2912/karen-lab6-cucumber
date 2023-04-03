import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { addProjectPane } from "../../src/pages/components/add-projects.page";
import { headerPage } from "../../src/pages/components/header.page";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";

setDefaultTimeout(60 * 1000);

Given('the user sets properties as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
    await addProjectPane.setProjectColor();
    await addProjectPane.setProjectfavoritestoggle();
    await addProjectPane.setProjectOptionListView();
    await addProjectPane.clickAdd();
    const isVisible = await verticalMenu.getProjectNameInformation(projectName);
    expect(isVisible).toBeTruthy
    
});

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});

Given('the user sets {string} as Project color on the Add Project popup', function (string) {
    
    addProjectPane.setProjectColor();

});

Given('the user sets {string} as favorites Project on the Add Project popup', function (string) {
   
    addProjectPane.setProjectfavoritestoggle();
});

Given('the user sets "Lista" as Project view on the Add Project popup', async function () {

    await addProjectPane.setProjectOptionListView();
});

When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
});

Then('the user should see the name of the project on the vertical menu', async function () {
    const isVisible = await verticalMenu.getProjectNameInformation(this.projectName);
    expect(isVisible).toBeTruthy
});
   