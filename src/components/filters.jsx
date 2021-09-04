import { useState } from "react";
import productList from "../productList";
import language from "../language";

const Filters = ({
                     categories,
                     filteredProductsHandler,
                     toggleLanguage,
                     selectedLanguage,
                     totalBoughtProducts}) => {
    const [categoryFilter, setCategoryFilter] = useState("");

    const [nameFilter, setNameFilter] = useState("");

    const [priceFilter, setPriceFilter] = useState(0);

    const reset = () => {
        filteredProductsHandler(productList)
        setCategoryFilter("");
        setNameFilter("");
        setPriceFilter(0);
    };

    const handleNameFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(e)
                && productList[i].category.toLowerCase().includes(categoryFilter)
                && parseInt(productList[i].price.substring(1)) > priceFilter) {
                filtered.push(productList[i])
            }
        }

        filteredProductsHandler(filtered)
        setNameFilter(e)
    };

    const handleCategoryFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(nameFilter)
                && productList[i].category.toLowerCase().includes(e)
                && parseInt(productList[i].price.substring(1)) > priceFilter) {
                filtered.push(productList[i])
            }
        }

        filteredProductsHandler(filtered)
        setCategoryFilter(e)
    };

    const handlePriceFilter = (e) => {
        let filtered = []
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].name.toLowerCase().includes(nameFilter)
                && productList[i].category.toLowerCase().includes(categoryFilter)
                && parseInt(productList[i].price.substring(1)) > e) {
                filtered.push(productList[i])
            }
        }

        filteredProductsHandler(filtered)
        setPriceFilter(e)
    };

    return <section className="filter">
                <div className="container">

                    <input
                        type="text"
                        placeholder={selectedLanguage.filterPlaceHolder}
                        value={nameFilter}
                        onChange={e => handleNameFilter(e.target.value.toLocaleLowerCase())}
                    />

                    <select value={categoryFilter} onChange={e => handleCategoryFilter(e.target.value.toLocaleLowerCase())}>
                        {categories.length
                            ? categories.map((category) => (
                                  <option key={category} value={category}>
                                      {category}
                                  </option>
                              ))
                            : null}
                    </select>

                    <input
                        type="number"
                        min="0"
                        step="10"
                        onChange={e => handlePriceFilter(e.target.value)}
                        value={priceFilter}
                    />

                    <button className="btn" onClick={reset}>
                        {selectedLanguage.resetFiltersButton}
                    </button>

                    <button onClick={() => toggleLanguage(language.english)}>
                        <i className="flag flag-us"></i>
                    </button>

                    <button onClick={() => toggleLanguage(language.romanian)}>
                        <i className="flag flag-ro"></i>
                    </button>

                    <div>{selectedLanguage.totalBoughtItems}: {totalBoughtProducts}</div>
                </div>
            </section>
}

export default Filters
