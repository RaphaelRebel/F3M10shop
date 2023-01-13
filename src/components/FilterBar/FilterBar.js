import "./FilterBar.css"

const FilterBar = () => {
         return <>
                  <section className="filterBar">
                           <div className="filterBarWrapper">
                                    <section className="filterBarInputWrapper">
                                             <input type="checkbox" name="wijn" id="wijn" className="filterBar__checkbox" />
                                             <label htmlFor="wijn">Wijn</label>
                                    </section>
                                    <section className="filterBarInputWrapper">
                                             <input type="checkbox" name="wiskey" id="wiskey" className="filterBar__checkbox" />
                                             <label htmlFor="wiskey">Wiskey</label>
                                    </section>
                                    <section className="filterBarInputWrapper">
                                             <input type="checkbox" name="bier" id="bier" className="filterBar__checkbox" />
                                             <label htmlFor="bier">Bier</label>
                                    </section>
                           </div>



                  </section>
         </>
}

export default FilterBar