export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597388536236-0937ca0cc2e8?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Conectando Negocios{" "}
          <span className="border-b-[5px] border-yellow-500">Globalmente</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          <span className="border-b-[2px] border-blue-500">
            Soluciones logísticas innovadoras
          </span>{" "}
          y eficientes para sus envíos internacionales
        </p>
        <button className="bg-blue-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
          Comenzar Ahora
        </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Contract Services",
              image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Logistic Services",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Contract Support",
              image:
                "https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              //   image: "/placeholder.svg?height=300&width=400",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary flex items-end p-4">
                <h3 className="text-white font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
