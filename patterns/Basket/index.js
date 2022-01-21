import { Button } from '..'

function Basket({ basket, remove, inCheckout = false }) {
  return (
    <section className="basket product-detail-information">
      <h3>Basket</h3>
      <div id="basketContent">
        {basket?.items?.map((item) => (
          <div className="basketItem" key={item.id}>
            <div className="basketItemIcon">
              <img src={item.product.imageGallery.icon} />
            </div>
            <div className="basketItemInfo">
              <h4>{item.product.title}</h4>
              <div>{item.product.shortDescription}</div>
            </div>
            <div className="basketItemSetting">
              Price: {item.product.price.price}
              <br />
              Amount: {item.amount}
            </div>
            {!inCheckout && (
              <div className="basketItemActions">
                <Button
                  variant="icon-only"
                  icon="times"
                  className="basketItem__delete"
                  onClick={() => {
                    remove({ basketItemId: item.id, amount: item.amount })
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="clear"></div>
      <div className="basketTotal">Basket total: {basket?.cost?.total}</div>
      {!inCheckout && <Button href="/checkout">zu Kasse</Button>}
    </section>
  )
}

export default Basket
export { default as basketVariants } from './variants.js'
