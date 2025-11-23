import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import culturalTeaching from "@/assets/cultural-teaching.jpg";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nossa Missão</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectar saberes indígenas com a educação formal, promovendo o respeito 
            e a valorização das culturas originárias do Brasil
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={culturalTeaching} 
              alt="Transmissão Cultural" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Por Que Existimos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Plataforma Nhandé nasceu do reconhecimento de que os saberes indígenas 
              são fundamentais para a construção de uma sociedade mais justa, diversa 
              e sustentável.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalhamos para criar pontes entre o conhecimento tradicional e a educação 
              contemporânea, garantindo que as vozes e perspectivas dos povos originários 
              sejam ouvidas e respeitadas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Preservação</h3>
              <p className="text-muted-foreground">
                Documentar e preservar línguas, histórias e práticas culturais indígenas
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Educação</h3>
              <p className="text-muted-foreground">
                Promover o acesso à educação intercultural de qualidade
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Conexão</h3>
              <p className="text-muted-foreground">
                Conectar comunidades indígenas e não-indígenas através do conhecimento
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nossos Objetivos</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-3">
              <span className="text-primary font-bold text-xl">01</span>
              <p className="text-muted-foreground">
                Fortalecer a identidade cultural dos povos indígenas através da educação
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold text-xl">02</span>
              <p className="text-muted-foreground">
                Formar educadores capacitados para trabalhar com educação indígena
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold text-xl">03</span>
              <p className="text-muted-foreground">
                Desenvolver materiais didáticos culturalmente apropriados
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-primary font-bold text-xl">04</span>
              <p className="text-muted-foreground">
                Promover o diálogo intercultural e o combate ao preconceito
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
