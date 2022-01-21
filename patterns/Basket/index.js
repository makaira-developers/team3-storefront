function Basket({ basket, click }) {
  return (
    <section className="basket">
      Basket
      <ul>
        {basket.items.map((item) => (
          <li>
            {item.name}
            <button onClick={(item) => click(item.name)}>delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Basket
export { default as basketVariants } from './variants.js'
