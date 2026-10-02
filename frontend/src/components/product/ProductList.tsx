import PageTitle from "@/components/common/PageTitle";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/lib/site-config";

type Props = {
  title: string;
  products: Product[];
};

export default function ProductList({ title, products }: Props) {
  return (
    <section>
      <PageTitle>{title}</PageTitle>

      <div className="mt-[30px] grid grid-cols-1 gap-x-[30px] gap-y-[50px] sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} showInfo />
        ))}
      </div>
    </section>
  );
}
