import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-xl font-medium">Product Not Found</p>
      <p className="text-muted-foreground">The product you are looking for does not exist or has been removed.</p>
      <Link href="/products" className={buttonVariants()}>
        Return to Products
      </Link>
    </div>
  );
}
