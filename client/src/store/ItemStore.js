import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Tv'},
            {id: 2, name: 'Clothes'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Levis'}
        ]
        this._items = [
            {
                id: 1,
                title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                price: 64,
                info: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                type: "electronics",
                brand: "Western Digital ",
                img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            },
            {
                id: 7,
                title: "White Gold Plated Princess",
                price: 9.99,
                info: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                type: "jewelery",
                brand: "no brand",
                img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            },
            {
                id: 14,
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 999.99,
                info: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
                type: "electronics",
                brand: "Samsung",
                img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }

    get types() {
        return this._items
    }

    get brands() {
        return this._brands
    }
    get items() {
        return this._items
    }
}