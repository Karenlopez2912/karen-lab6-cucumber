import { ElementActions } from "../../core/element-actions";
import { MouseActions } from "../../core/mouse-actions";
import { BasePage } from "../base.page";

class VerticalMenuPage extends BasePage {
    private addProjectButton: string = '//button[@aria-label="Añadir proyecto"]//parent::div';
    private projectsLabel: string = '//a[@class="_2a3b75a1 _509a57b4 e5a9206f _50ba6b6b _4a93668a f6342c26"]';

    private projectName = (projectName: string) => `//ul[@id="projects_list"]//span[text()="${projectName}"]`;

    constructor() {
        super();
    }

    async clickAddProject(): Promise<void> {
        await ElementActions.click(this.addProjectButton);
    }

    async hoverProjectLabel() {
        await MouseActions.hover(this.projectsLabel);
    }

    async getProjectNameInformation(projName: string) {
        const projetNameLocator = this.projectName(projName);
        const isVisible = await ElementActions.isElementVisible(projetNameLocator);
        const projectText = await ElementActions.getElementText(projetNameLocator);        
        return [isVisible, projectText];
    }
}

export const verticalMenu = new VerticalMenuPage();