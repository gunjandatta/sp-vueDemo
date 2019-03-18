import { Components } from "gd-sprest-bs";

/**
 * Header
 */
export default {
    mounted() {
        // Render a nav bar
        Components.Navbar({
            el: this.$refs["header"],
            brand: "App Header",
            type: Components.NavbarTypes.Dark
        });
    }
}