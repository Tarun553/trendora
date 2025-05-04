const ProductPrice = ({value, classname}: {value: number | string; classname?: string}) => {
    // Convert to number
    const numericValue = typeof value === 'string' ? Number(value) : value;
    
    const stringValue = numericValue.toFixed(2);
    const [integer, decimal] = stringValue.split('.');
    return (
        <div className="flex">
            <span className={`text-2xl font-bold ${classname}`}>
                ${integer}
                <span className="text-sm font-normal">.{decimal}</span>
            </span>
        </div>
    );
};
export default ProductPrice;