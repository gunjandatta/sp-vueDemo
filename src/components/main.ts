import { Components } from "gd-sprest-bs";
import { Nav } from "gd-sprest-bs-vue";
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
            List, Nav
        },
        data() {
            return {
                items: null,
                view: ViewTypes.View1
            };
        },
        computed: {
            navItems(): Array<Components.INavLink> {
                return [
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
                ];
            }
        },
        mounted() {
            // Load the data
            DataSource.Main.get().then(items => {
                // Update the items
                this.items = items;
            });
        }
    };
})();