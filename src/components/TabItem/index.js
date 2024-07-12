import './index.css'

const TabItem = props => {
  const {tabDetails, changetab, style} = props
  const {displayText, tabId} = tabDetails
  const addStyle = style ? 'active-tab-btn' : ''
  const tabClicked = () => {
    changetab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${addStyle}`}
        onClick={tabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
