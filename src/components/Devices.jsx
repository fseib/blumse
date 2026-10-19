import './Devices.css'

// `scroll`: 'auto' recorre la pantalla sola, 'none' la deja quieta.
export function Phone({ scroll = 'auto', children }) {
  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="phone__island" />
        <div className={`screen-scroller screen-scroller--${scroll}`}>{children}</div>
      </div>
    </div>
  )
}

export function Browser({ url, scroll = 'auto', children }) {
  return (
    <div className="browser">
      <div className="browser__bar">
        <span />
        <span />
        <span />
        <div className="browser__url">{url}</div>
      </div>
      <div className="browser__screen">
        <div className={`screen-scroller screen-scroller--${scroll}`}>{children}</div>
      </div>
    </div>
  )
}
