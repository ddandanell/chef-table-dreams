import diningExperience from "@/assets/dining-experience.jpg";

const ValueProposition = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="text-6xl text-secondary mb-6">"</div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              No restaurant is more intimate than your own home
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience the magic of restaurant-quality dining without leaving your home. Our private chefs bring world-class culinary expertise directly to your table.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether it's a romantic dinner for two, a family celebration, or a special gathering with friends, every meal is crafted uniquely for you.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src={diningExperience}
              alt="Intimate dining experience at home"
              className="rounded-2xl shadow-large w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
