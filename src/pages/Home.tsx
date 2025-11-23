import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import heroForest from "@/assets/hero-forest.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import culturalTeaching from "@/assets/cultural-teaching.jpg";
import mediaCollage from "@/assets/media-collage.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroForest})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Nhandé
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Conectando Saberes Indígenas através da Educação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="rounded-full text-lg px-8">
                Começar Agora
              </Button>
            </Link>
            <Link to="/missao">
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossa Plataforma</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma ponte entre a sabedoria ancestral e a educação moderna
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={studentsLearning} 
                  alt="Professores e Alunos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Professores & Alunos</h3>
              <p className="text-muted-foreground mb-4">
                Ambiente colaborativo para ensino e aprendizagem de línguas e culturas indígenas
              </p>
              <Link to="/professores-alunos">
                <Button variant="outline" className="w-full rounded-full">
                  Explorar
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={mediaCollage} 
                  alt="Mídias Educativas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Mídias Educativas</h3>
              <p className="text-muted-foreground mb-4">
                Recursos audiovisuais e materiais didáticos sobre culturas indígenas brasileiras
              </p>
              <Link to="/midias">
                <Button variant="outline" className="w-full rounded-full">
                  Descobrir
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={culturalTeaching} 
                  alt="Valores Culturais" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Valores Culturais</h3>
              <p className="text-muted-foreground mb-4">
                Preservação e transmissão dos conhecimentos tradicionais indígenas
              </p>
              <Link to="/valores">
                <Button variant="outline" className="w-full rounded-full">
                  Conhecer
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Junte-se à Nossa Comunidade</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Faça parte dessa iniciativa de valorização e preservação das culturas indígenas
          </p>
          <Link to="/login">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-8">
              Criar Conta
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2025 Nhandé - Plataforma de Educação Indígena</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
