import { Helper, SPTypes } from "gd-sprest";
import Cfg from "./strings";

/**
 * Configuration
 */
export const Configuration = {
    // Register the library w/ SP SOD (SharePoint Script-on-Demand)
    CoreLib: Helper.SPConfig({
        CustomActionCfg: {
            Web: [{
                Name: "vue-app-lib",
                Title: "VueJS Demo App Library",
                Description: "Registers the demo VueJS app library with SP.SOD.",
                Location: "ScriptLink",
                Sequence: 10000,
                ScriptBlock: "SP.SOD.registerSod('vue-demo-app', '/sites/demo/siteassets/vuejs/vue-demo-app.js');"
            }]
        }
    }),

    // List to store the contacts
    List: Helper.SPConfig({
        ListCfg: [{
            ListInformation: {
                Title: Cfg.MainListName,
                BaseTemplate: SPTypes.ListTemplateType.GenericList
            },
            TitleFieldDisplayName: "Last Name",
            CustomFields: [
                {
                    name: "FName",
                    title: "First Name",
                    required: true,
                    type: Helper.SPCfgFieldType.Text
                },
                {
                    name: "Address",
                    title: "Address",
                    type: Helper.SPCfgFieldType.Note,
                    noteType: SPTypes.FieldNoteType.TextOnly
                } as Helper.IFieldInfoNote
            ],
            ViewInformation: [{
                ViewName: "All Items",
                ViewFields: ["FName", "LinkTitle", "Address"],
                ViewQuery: "<OrderBy><FieldRef Name='Title' /><FieldRef Name='FName' /></OrderBy>"
            }]
        }]
    }),

    // Ribbon link to display the table in a modal dialog
    RibbonLink: Helper.SPConfig({
        CustomActionCfg: {
            Web: [{
                Name: "vue-app-ribbon",
                Title: "VueJS Ribbon Button",
                Description: "Creates a ribbon button for the VueJS demo app.",
                Location: "ScriptLink",
                Sequence: 10500,
                ScriptBlock: "if(SP.SOD.executeOrDelayUntilScriptLoaded(function() { VueJSDemo.ribbon(); }, 'vue-demo-app') == false) { LoadSodByKey('vue-demo-app'); };"
            }]
        }
    }),

    // WebPart
    WebPart: Helper.SPConfig({
        WebPartCfg: [
            {
                FileName: "",
                Group: "Apps (Custom)",
                XML: `<?xml version="1.0" encoding="utf-8"?>
                <webParts>
                    <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
                        <metaData>
                            <type name="Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" />
                            <importErrorMessage>$Resources:core,ImportantErrorMessage;</importErrorMessage>
                        </metaData>
                        <data>
                            <properties>
                                <property name="Title" type="string">VueJS Demo App</property>
                                <property name="Description" type="string">Displays the contact data in a BootStrap table.</property>
                                <property name="ChromeType" type="chrometype">None</property>
                                <property name="Content" type="string">
                                    &lt;div id="wp-vue-demo"&gt;&lt;/div&gt;
                                    &lt;script type="text/javascript"&gt;if(SP.SOD.executeOrDelayUntilScriptLoaded(function() { new VueJSDemo.init(); }, 'demoListWP') == false) { LoadSodByKey('vue-demo-app'); };&lt;/script&gt;
                                </property>
                            </properties>
                        </data>
                    </webPart>
                </webParts>`
            }
        ]
    })
}