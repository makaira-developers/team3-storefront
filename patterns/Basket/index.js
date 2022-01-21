import { Button } from '..'

function Basket({ basket, click }) {
  return (
    <section className="basket">
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
            <div className="basketItemActions">
              <Button
                variant="icon-only"
                icon="times"
                className="basketItem__delete"
                onClick={(item) => click(item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="clear"></div>
      <div className="basketTotal">Basket total: {basket?.cost?.total}</div>
    </section>
  )
}

export default Basket
export { default as basketVariants } from './variants.js'
