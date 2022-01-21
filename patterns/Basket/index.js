import { Button, FormattedPrice } from '..'

function Basket({ basket, click }) {
  return (
    <section className="basket">
      <h3>Basket</h3>

      <div id="basketContent">
        {basket.items.map((item) => (
          <div class="basketItem" key={item.id}>
            <div class="basketItemIcon">
              <img src={item.product.imageGallery.icon}/>
            </div>
            <div class="basketItemInfo">
              <h4>{item.product.title}</h4>
              <div>{item.product.shortDescription}</div>
            </div>
            <div class="basketItemSetting">
              Price: {item.product.price.price}<br/>
              Amount: {item.amount}
            </div>
            <div class="basketItemActions">
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

      <div class="clear"></div>
      <div class="basketTotal">
        Basket total: {basket.cost.total}
      </div>
    </section>
  )
}

export default Basket
export { default as basketVariants } from './variants.js'
