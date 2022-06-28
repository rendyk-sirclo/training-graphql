import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getProductBySku } from "./services/graphql/schema";
import Link from "next/link";
import Image from "next/image";

const ProductPage = () => {
  const { sku } = useRouter().query;
  const response = useQuery(getProductBySku, {
    variables: {
      productSku: sku,
    },
  });
  const { loading, error, data } = response;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="mainSection">
      {data && data.products.items.length > 0 ? (
        <>
          <h1>
            {data.products.items[0].name} -{" "}
            <span>
              {data.products.items[0].price_range.maximum_price.regular_price
                .currency +
                data.products.items[0].price_range.maximum_price.regular_price
                  .value}
            </span>
          </h1>
          {data.products.items[0].image && (
            <Image
              src={data.products.items[0].image.url}
              width={300}
              height={300}
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: data.products.items[0].description.html,
            }}
          ></div>
        </>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductPage;
