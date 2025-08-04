export function Card({ title, quantity, price }) {
    return (
        <div className="flex justify-between px-6 py-4 bg-gray-200 rounded-md">
            <div className="flex gap-4 items-center">
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p>
                        Quantity: <span>{quantity}</span>
                    </p>
                </div>
                <div>
                    <p className="font-bold text-emerald-500 text-xl">
                        ${price}
                    </p>
                </div>
            </div>
            <button className="p-4 text-white font-semibold bg-blue-400 rounded-md hover:bg-blue-500 cursor-pointer">
                Order Now
            </button>
        </div>
    );
}
