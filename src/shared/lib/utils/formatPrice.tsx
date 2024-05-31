export const formatPrice = (price: any) => {
    if (price < 0.01) {
        return Number(price).toPrecision(1);
    }
    return Number(price).toFixed(2);
};
