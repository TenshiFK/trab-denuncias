

export const SELECT_ITEM = "SELECT_ITEM";

export function selectItem(item) {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}