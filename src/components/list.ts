import { Components } from "gd-sprest-bs";
import { Alert, Spinner, Table } from "gd-sprest-bs-vue";

// View Types
export const ViewTypes = {
    View1: 1,
    View2: 2
};

export default {
    components: { Alert, Spinner, Table },
    props: {
        items: { type: Array },
        viewType: { type: Number }
    },
    data: () => {
        return {
            alertType: Components.AlertTypes.Info,
            table1Columns: [
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
            ] as Array<Components.ITableColumn>,
            table2Columns: [
                {
                    name: "Title",
                    title: "Full Name",
                    onRenderCell: (el, column, item) => {
                        // Render the full name
                        el.innerHTML = [item.FName || "", item.Title || ""].join(" ");
                    }
                },
                {
                    name: "Address",
                    title: "Address"
                }
            ] as Array<Components.ITableColumn>,
        };
    }
}