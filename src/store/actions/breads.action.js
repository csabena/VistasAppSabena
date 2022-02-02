export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREAD = 'FILETER_BREAD';

export const selectBread = (id) => ({
    type: SELECT_BREAD,
    breadId: id,
});

export const filterBread = (id) => ({
    type: FILTER_BREAD,
    categoryId: id,
});