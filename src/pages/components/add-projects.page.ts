import { ElementActions } from "../../core/element-actions";
import { MouseActions } from "../../core/mouse-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//button[@type="submit"]';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    

    // Extra Points add select the following behavior
  
    private colorDropdown: string = '//span[contains(text(),"Amarillo")]';
    private favoritesToggle: string = '//span[@class="reactist_switch--handle"]';
    private optionListView: string = '//div[text()="Lista"]';
    private optionBoardView: string = '//div[text()="Panel"]';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async setProjectColor() {
        
        await ElementActions.selectColorOption(this.colorDropdown);
        
    }

    async setProjectfavoritestoggle() {
        await ElementActions.click(this.favoritesToggle);
    }

    async setProjectOptionListView() {
        await ElementActions.click(this.optionListView);
    }

    async setProjectOptionBoardView() {
        await ElementActions.click(this.optionBoardView);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        await ElementActions.setText(this.nameTextField, projectName);
        await ElementActions.selectColorOption(this.colorDropdown);
        await ElementActions.click(this.favoritesToggle);
        await ElementActions.click(this.optionListView);
        await ElementActions.click(this.addButton);
    
    }
}

export const addProjectPane = new AddProject();
