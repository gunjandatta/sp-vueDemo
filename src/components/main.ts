import { Components } from "gd-sprest-bs";

/**
 * Main
 */
export default (() => {
    // Return the configuration
    return {
        data: () => {
            return {
                view: "View 1"
            };
        },
        mounted() {
            // Render the sidebar navigation
            Components.Nav({
                el: this.$refs["sidebar"],
                isVertical: true,
                items: [
                    {
                        title: "View 1",
                        onClick: (item) => {
                            // Update the selected view
                            this.view = item.title;
                        }
                    },
                    {
                        title: "View 2",
                        onClick: (item) => {
                            // Update the selected view
                            this.view = item.title;
                        }
                    }
                ]
            })
        }
    };
})();