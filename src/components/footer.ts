import { Components } from "gd-sprest-bs";

/**
 * Footer
 */
export default {
    mounted() {
        // Render a nav bar
        Components.Navbar({
            el: this.$refs["footer"],
            brand: "App Footer",
            type: Components.NavbarTypes.Dark
        });
    }
}