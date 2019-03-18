import { Types } from "gd-sprest";

/**
 * Main Item
 */
export interface IMainItem extends Types.SP.IListItemQuery {
    Address: string;
    FName: string;
    Title: string;
}