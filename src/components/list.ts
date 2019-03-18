import { Components } from "gd-sprest-bs";
import { IMainItem } from "../ds";

/**
 * View Types
 */
export enum ViewTypes {
    View1 = 1,
    View2
}

/**
 * List
 */
export default (() => {
    let el: HTMLElement = null;
    let items: Array<IMainItem> = null;

    // Method to render the table
    let render = (view) => {
        // See if data exists
        if (items == null) {
            // Data is still being loaded
            Components.Spinner({
                el,
                text: "Loading the data..."
            });
            return;
        }

        // See if no items exist
        if (items.length == 0) {
            // Render an empty message
            Components.Alert({
                el,
                content: "No data exists...",
                type: Components.AlertTypes.Info
            });
            return;
        }

        // See if this is the second view
        if (view == ViewTypes.View2) {
            // Render the second view
            Components.Table({
                el,
                rows: items,
                columns: [
                    {
                        name: "Title",
                        title: "Full Name",
                        onRenderCell: (el, column, item: IMainItem) => {
                            // Render the full name
                            el.innerHTML = [item.FName || "", item.Title || ""].join(" ");
                        }
                    },
                    {
                        name: "Address",
                        title: "Address"
                    }
                ]
            });
            return;
        }

        // By default render the first view
        Components.Table({
            el,
            rows: items,
            columns: [
                {
                    name: "FName",
                    title: "First Name"
                },
                {
                    name: "Title",
                    title: "Last Name"
                },
                {
                    name: "Address",
                    title: "Address"
                }
            ]
        });
    }

    // Return the configuration
    return {
        props: {
            items: { type: Array },
            view: { type: Number }
        },
        watch: {
            items: (newValue, oldValue) => {
                // Update the items
                items = newValue;

                // Clear the element
                el.innerHTML = "";

                // Render the component
                render(this.view);
            },
            view: (newValue, oldValue) => {
                // Clear the element
                el.innerHTML = "";

                // Render the component
                render(newValue);
            }
        },
        mounted() {
            // Save the reference to the element
            el = this.$refs["list"];

            // Set the items
            items = this.items;

            // Render the component
            render(this.view);
        }
    };
})();