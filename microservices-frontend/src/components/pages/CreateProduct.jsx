export function CreateProduct(){
    return(
        <section className="mt-8">
            <h2 className="font-bold text-2xl">Add Product</h2>
            <div className="w-[300px] grid gap-4 mt-5">
                <div className="grid gap-1">
                    <label htmlFor="skuCode">SKU Code</label>
                    <input id="skuCode" type="text" className="border-1 rounded-md p-1"/>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="border-1 rounded-md p-1"/>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="name">Description</label>
                    <input id="name" type="text" className="border-1 rounded-md p-1"/>
                </div>
                <div className="grid gap-1">
                    <label htmlFor="name">Description</label>
                    <input id="name" type="text" className="border-1 rounded-md p-1"/>
                </div>
            </div>
        </section>
    )
}