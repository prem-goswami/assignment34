import './index.css'

const FiltersGroup = props => {
  const renderCatogeryList = () => {
    const {categoryOptionDetails} = props
    categoryOptionDetails.map(eachItem => (
      <li className="categoryContainer">
        <h1>Category</h1>
        <button type="button" className="butt">
          {eachItem.name}
        </button>
      </li>
    ))
  }

  const renderratingsList = () => {
    const {ratingsList} = props
    ratingsList.map(eachItem => (
      <li className="ratingsContainer">
        <h1>Ratings</h1>
        <button type="button">
          <img src={eachItem.imageUrl} alt="rating" />
        </button>
      </li>
    ))
  }

  return (
    <div className="filters-group-container">
      {renderCatogeryList()}
      {renderratingsList()}
    </div>
  )
}

export default FiltersGroup
