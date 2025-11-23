import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import traditionalArchitecture from "@/assets/traditional-architecture.jpg";

const CulturalValues = () => {
  const values = [
    {
      title: "Respeito à Ancestralidade",
      description: "Honramos os saberes transmitidos através das gerações, reconhecendo a importância dos anciãos e das tradições orais na preservação da memória coletiva."
    },
    {
      title: "Conexão com a Terra",
      description: "Valorizamos a relação harmoniosa entre os povos indígenas e a natureza, compreendendo que a terra não é apenas território, mas parte da identidade cultural."
    },
    {
      title: "Diversidade Linguística",
      description: "Celebramos a riqueza das mais de 180 línguas indígenas faladas no Brasil, cada uma carregando cosmovisões únicas e conhecimentos específicos."
    },
    {
      title: "Educação Comunitária",
      description: "Reconhecemos que a educação indígena é um processo coletivo, onde toda a comunidade participa na formação dos jovens."
    },
    {
      title: "Autonomia e Protagonismo",
      description: "Defendemos o direito dos povos indígenas de serem protagonistas na gestão de seus territórios e na definição de seus próprios caminhos educacionais."
    },
    {
      title: "Sustentabilidade",
      description: "Aprendemos com os conhecimentos tradicionais sobre manejo sustentável dos recursos naturais e convivência equilibrada com o meio ambiente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Valores Culturais</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os princípios que guiam nossa abordagem educacional e nossa relação com os saberes indígenas
          </p>
        </div>

        <div className="mb-16">
          <img 
            src={traditionalArchitecture} 
            alt="Arquitetura Tradicional" 
            className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Compromisso com o Futuro</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Acreditamos que a preservação e valorização das culturas indígenas não é apenas uma 
            questão de justiça histórica, mas um caminho essencial para construir um futuro mais 
            sustentável, diverso e humano. Os conhecimentos ancestrais dos povos originários 
            oferecem perspectivas fundamentais para enfrentar os desafios contemporâneos, desde a 
            crise climática até a busca por modelos de convivência mais harmoniosos.
          </p>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium italic text-muted-foreground max-w-2xl mx-auto">
            "Nhandé significa 'nós' em Tupi-Guarani. Juntos, indígenas e não-indígenas, 
            construímos uma educação que valoriza todos os saberes."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default CulturalValues;
