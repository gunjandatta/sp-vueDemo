import { ContextInfo, Helper } from "gd-sprest";
import Vue from "vue";
import App from "./app.vue";
import { Configuration } from "./cfg";

// See if this is the SharePoint environment
if (ContextInfo.existsFl) {
    // Create a global variable for this app
    window["VueJSDemo"] = {
        // SharePoint Configuration
        Configuration,

        // Initializes the dialog page
        dialog: () => {
            // Render the app
            new Vue({
                el: "#vue-js-demo",
                render: h => h(App)
            });
        },

        // Creates the top ribbon link
        ribbon: () => {
            // Create the ribbon link
            Helper.RibbonLink({
                id: "vue-js-demo-link",
                title: "Vue Demo",
                onClick: () => {
                    // Display the app's dialog page in a modal dialog
                    Helper.SP.ModalDialog.showModalDialog({
                        showMaximized: true,
                        title: "Contacts",
                        url: "/sites/dev/siteassets/vue-demo/dialog.aspx"
                    });
                }
            })
        },

        // Initializes the webpart
        webpart: () => {
            // Create an instance of the webpart
            Helper.WebPart.create({
                elementId: "wp-vue-demo",
                onRenderDisplay: (wpInfo) => {
                    // Render the app
                    new Vue({
                        el: wpInfo.el,
                        render: h => h(App)
                    });
                }
            })
        }
    };

    // Notify SharePoint that this library is loaded
    Helper.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("vue-demo-app");
} else {
    // Render the app
    new Vue({
        el: "#app",
        render: h => h(App)
    });
}