import { notFound } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, Star } from 'lucide-react';
import Image from 'next/image';

// Define the Product interface to match the API response
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  rating: number;
  stock: number;
  brand: string;
}


// Fetch a single product by ID with error handling
async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json() as Promise<Product>;
}


// The main ProductDetailPage component that fetches and displays the product details
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className={buttonVariants({ variant: "ghost", className: "mb-6 flex items-center gap-2 w-fit" })}>
        <ChevronLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(0, 4).map((image, index) => (
              <div key={index} className="relative aspect-square rounded-md overflow-hidden border bg-muted">
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex-1">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm font-bold text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-sm text-muted-foreground">{product.stock} in stock</span>
            </div>
            <p className="text-3xl font-bold mb-6">${product.price}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                Buy Now
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              Free shipping on orders over $50 • 30-day return policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
