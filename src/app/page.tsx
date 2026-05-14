import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-8 bg-linear-to-b from-background to-muted/50">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Modern Shopping <br />
            <span className="text-primary">Simplified.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium products from across the globe. 
            Quality meets affordability in every single item.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className={buttonVariants({ size: "lg", className: "gap-2" })}>
            <ShoppingBag className="w-5 h-5" />
            Shop Now
          </Link>
          <Link href="/about" className={buttonVariants({ size: "lg", variant: "outline", className: "gap-2" })}>
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 MyStore. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
