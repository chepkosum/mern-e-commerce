import './DescriptionBox.css'

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(144)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        E-commerce, short for electronic commerce,
         refers to the buying and selling of goods and services 
         over the internet. This digital form of commerce has
          become increasingly popular and widespread, transforming 
          the way people conduct business and purchase products. 
          E-commerce involves online shopping, 
        electronic payments, and various other online transactions
        </p>
        <p>
        Online Retailers: These are businesses that sell products directly to consumers through their websites. Examples include Amazon, eBay, and Alibaba.
        Online Marketplaces: Platforms that bring together multiple sellers and buyers. Examples include Etsy and eBay, where individual sellers can list their products.
        </p>
      </div>
    </div>
  )
}

export default Description