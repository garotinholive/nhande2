import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import studentsLearning from "@/assets/students-learning.jpg";

const TeachersStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Professores & Alunos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ambiente colaborativo dedicado ao ensino e aprendizagem de línguas e culturas indígenas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={studentsLearning} 
              alt="Alunos estudando" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Educação Transformadora</h2>
            <p className="text-lg text-muted-foreground">
              Nossa plataforma conecta educadores indígenas e não-indígenas com estudantes 
              interessados em aprender sobre as ricas culturas e línguas dos povos originários 
              do Brasil.
            </p>
            <p className="text-lg text-muted-foreground">
              Através de metodologias participativas e respeitosas, promovemos o intercâmbio 
              de conhecimentos e o fortalecimento da identidade cultural.
            </p>
            <Button size="lg" className="rounded-full">
              Cadastrar-se como Professor
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Para Professores</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Crie e compartilhe conteúdos educativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Acompanhe o progresso dos alunos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Participe de redes de educadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Acesso a materiais didáticos especializados</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Para Alunos</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aprenda línguas indígenas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Conheça histórias e tradições ancestrais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Interaja com educadores indígenas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Certificados de conclusão de cursos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TeachersStudents;
