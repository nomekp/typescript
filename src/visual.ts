
import powerbi from "powerbi-visuals-api";

import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;



export class Visual implements IVisual {
    private host: IVisualHost;
    private open_page: Element;
    private page_1: Element;
    private page_2: Element;
    private page_3: Element;
    private page_4: Element;
    private page_5: Element;


    
    

    private element_open_page(): Element {
        let linkElement0 = document.createElement("a");
        linkElement0.setAttribute("class", "open_page");
        return linkElement0;
    };

    private element_page_1(): Element {
        let linkElement1 = document.createElement("a");
        linkElement1.textContent = "Jornada de compra";
        linkElement1.setAttribute("class", "page");
        linkElement1.addEventListener("click", () => {

            this.host.launchUrl("https://app.powerbi.com/groups/e7891bba-0858-4bc5-b5b2-3378652dd436/reports/a0b98d26-55cc-4ff8-be03-732889c7c2d4/ReportSection?bookmarkGuid=Bookmarkebda44ab05e3aa150aee");
        });
        return linkElement1;
    };

    private element_page_2(): Element {
        let linkElement2 = document.createElement("a");
        linkElement2.textContent = "OTD";
        linkElement2.setAttribute("class", "page");
        linkElement2.addEventListener("click", () => {
            this.host.launchUrl("https://app.powerbi.com/groups/e7891bba-0858-4bc5-b5b2-3378652dd436/reports/a0b98d26-55cc-4ff8-be03-732889c7c2d4/ReportSection3bc09a907902babc0bad?bookmarkGuid=Bookmarkafec1e1118eacd678778");
        });
        return linkElement2;
    };

    private element_page_3(): Element {
        let linkElement3 = document.createElement("a");
        linkElement3.textContent = "Pedidos em aberto";
        linkElement3.setAttribute("class", "page");
        linkElement3.addEventListener("click", () => {
            this.host.launchUrl("https://app.powerbi.com/groups/e7891bba-0858-4bc5-b5b2-3378652dd436/reports/a0b98d26-55cc-4ff8-be03-732889c7c2d4/ReportSection0a943d18a0aa99084159?bookmarkGuid=Bookmark13e422d44361e77cd657");
        });
        return linkElement3;
    };

    private element_page_4(): Element {
        let linkElement4 = document.createElement("a");
        linkElement4.textContent = "Data quality";
        linkElement4.setAttribute("class", "page");
        linkElement4.addEventListener("click", () => {
            this.host.launchUrl("https://app.powerbi.com/groups/e7891bba-0858-4bc5-b5b2-3378652dd436/reports/a0b98d26-55cc-4ff8-be03-732889c7c2d4/ReportSectiond78bafc915e058a2d629?bookmarkGuid=Bookmarkd74f0e0fe377cc203100");
        });
        return linkElement4;
    };
    
    private element_page_5(): Element {
        let linkElement5 = document.createElement("a");
        linkElement5.textContent = "Premissas";
        linkElement5.setAttribute("class", "page");
        linkElement5.addEventListener("click", () => {
            this.host.launchUrl("https://app.powerbi.com/groups/e7891bba-0858-4bc5-b5b2-3378652dd436/reports/a0b98d26-55cc-4ff8-be03-732889c7c2d4/ReportSectionc1e59d003d4ce7d76850?bookmarkGuid=Bookmark91ac4df5525ede003b19");
        });
        return linkElement5;
    };

    constructor(options: VisualConstructorOptions) {

        this.host = options.host;

        this.page_1 = this.element_page_1();
        options.element.appendChild(this.page_1);

        this.page_2 = this.element_page_2();
        options.element.appendChild(this.page_2);

        this.page_3 = this.element_page_3();
        options.element.appendChild(this.page_3);

        this.page_4 = this.element_page_4();
        options.element.appendChild(this.page_4);

        this.page_5 = this.element_page_5();
        options.element.appendChild(this.page_5);

        this.open_page = this.element_open_page();
        options.element.appendChild(this.open_page);




        

    }


    public update(options: VisualUpdateOptions) {

    }
    


}