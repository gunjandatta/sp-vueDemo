import { Components } from "gd-sprest-bs";
import { DataSource } from "../ds";
import { ViewTypes } from "./list";
import List from "./list.vue";

/**
 * Main
 */
export default (() => {
    // Return the configuration
    return {
        components: {
            List
        },
        data: () => {
            return {
                items: null,
                view: ViewTypes.View1
            };
        },
        mounted() {
            // Load the data
            DataSource.Main.get().then(items => {
                // Update the items
                this.items = items;
            });

            // Render the sidebar navigation
            Components.Nav({
                el: this.$refs["sidebar"],
                isVertical: true,
                items: [
                    {
                        title: "View 1",
                        onClick: () => {
                            // Update the selected view
                            this.view = ViewTypes.View1;
                        }
                    },
                    {
                        title: "View 2",
                        onClick: () => {
                            // Update the selected view
                            this.view = ViewTypes.View2;
                        }
                    }
                ]
            })
        }
    };
})();