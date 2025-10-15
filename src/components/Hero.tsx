import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";

const Hero = () => {
  const images = [
    { src: hero1, className: "row-span-2" },
    { src: hero2, className: "col-span-1" },
    { src: hero3, className: "row-span-2" },
    { src: hero4, className: "col-span-1" },
    { src: hero5, className: "col-span-1" },
    { src: hero6, className: "row-span-2" },
    { src: hero7, className: "col-span-1" },
    { src: hero8, className: "col-span-1" },
    { src: hero9, className: "col-span-2" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-background">
      {/* Masonry Grid Background */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-3 p-6 md:p-8 opacity-90">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.className} animate-fade-in overflow-hidden rounded-lg`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={image.src}
              alt={`Gourmet food ${index + 1}`}
              className="w-full h-full object-cover transition-smooth hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-large p-8 md:p-12 max-w-2xl mx-6 animate-scale-in">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4 text-center">
            Hire a Private Chef at Home Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-8">
            Enjoy a customized culinary experience with a Private Chef in the comfort of your own home.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-coral hover:opacity-90 transition-smooth shadow-medium text-lg px-8 py-6 animate-pulse-subtle"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
