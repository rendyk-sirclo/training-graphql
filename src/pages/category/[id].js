import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getCategoryById } from "@/lib/services/graphql/schemaCategory";
import Link from "next/link";

const CategoryPage = () => {
  const { id } = useRouter().query;
  const response = useQuery(getCategoryById, {
    variables: {
      categoryId: id,
    },
  });
  const { loading, error, data } = response;

  if (loading)
    return (
      <div className="mainSection">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="mainSection">
        <p>Error: {error.message}</p>
      </div>
    );

  console.log(data);

  return (
    <div className="mainSection">
      <h1>{data.category.name}</h1>
      {data && data.category.products.items.length > 0 ? (
        <ul>
          {data.category.products.items.map((product) => (
            <li key={product.id}>
              <Link
                href={{
                  pathname: `/product/${product.sku}`,
                }}
                as={`/product/${product.sku}`}
              >
                <a style={{ color: "blue" }}>{product.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default CategoryPage;
