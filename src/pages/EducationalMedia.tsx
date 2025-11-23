import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import mediaCollage from "@/assets/media-collage.jpg";

const EducationalMedia = () => {
  const mediaItems = [
    {
      title: "Documentários",
      description: "Filmes e vídeos sobre povos indígenas brasileiros",
      count: "45+ vídeos"
    },
    {
      title: "Áudios e Músicas",
      description: "Gravações de cantos tradicionais e narrativas orais",
      count: "120+ áudios"
    },
    {
      title: "Fotografias",
      description: "Acervo fotográfico de culturas indígenas",
      count: "300+ imagens"
    },
    {
      title: "Materiais Didáticos",
      description: "Livros, apostilas e recursos educacionais",
      count: "80+ recursos"
    },
    {
      title: "Arte e Artesanato",
      description: "Galeria de arte e técnicas tradicionais",
      count: "150+ obras"
    },
    {
      title: "Entrevistas",
      description: "Conversas com lideranças e sábios indígenas",
      count: "60+ entrevistas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Mídias Educativas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acervo digital de recursos audiovisuais e materiais didáticos sobre as culturas indígenas brasileiras
          </p>
        </div>

        <div className="mb-16">
          <img 
            src={mediaCollage} 
            alt="Mídias Educativas" 
            className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {item.count}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Contribua com o Acervo</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Educadores e comunidades indígenas podem contribuir com materiais educativos 
            para enriquecer nossa base de conhecimento compartilhado
          </p>
        </div>
      </section>
    </div>
  );
};

export default EducationalMedia;
