
import ProductListItem from "./ProductListItem";

function ProdList({className}) {
  return (
    <>
      <div className={className}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[20px]">
          <li >
            <ProductListItem imgNo = {1} productName = "Mac os" productPriceFormatted = "4,000,000"/>
          </li>
          <li >
            <ProductListItem imgNo = {2} productName = "Mac pro" productPriceFormatted = "4,300,000"/>
          </li>
          <li >
            <ProductListItem imgNo = {3} productName = "Mac pro" productPriceFormatted = "4,300,000"/>
          </li>
          <li >
            <ProductListItem imgNo = {4} productName = "Mac pro" productPriceFormatted = "4,300,000"/>
          </li>
          <li >
            <ProductListItem imgNo = {5} productName = "Mac pro" productPriceFormatted = "4,300,000"/>
          </li>
          <li >
            <ProductListItem imgNo = {6} productName = "Mac pro" productPriceFormatted = "4,300,000"/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProdList;