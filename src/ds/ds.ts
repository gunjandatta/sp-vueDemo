import { ContextInfo, List } from "gd-sprest-bs";
import Configuration from "../strings";
import { TestData } from "./data";
import { IMainItem } from "./ds.d";

/**
 * Data Source
 */
export const DataSource = {
    // Main Data
    Main: {
        // Method to get the main data
        get: (): PromiseLike<Array<IMainItem>> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if this is the SharePoint environment
                if (ContextInfo.existsFl) {
                    // Query the main list in the current web
                    List(Configuration.MainListName).Items().query({
                        OrderBy: ["Title", "FName"],
                        Select: ["Title", "FName", "Address"]
                    }).execute(
                        // Success
                        items => {
                            // Resolve the promise
                            resolve(items.results as any);
                        },

                        // Error
                        msg => {
                            // Log
                            console.error("Error: The main list '" + Configuration.MainListName + "'")
                        }
                    )
                }
                // Else, this is the dev environment
                else {
                    // Resolve the promise with the test data
                    resolve(TestData.Main as any);
                }
            });
        }
    }
}