import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [progressData] = useState({
    workouts: 75,
    calories: 1250,
    weight: 68,
    streak: 12
  });

  const motivationalQuotes = [
    "Сила не в том, чтобы не падать, а в том, чтобы вставать каждый раз",
    "Твоё тело может всё. Убеди свой разум",
    "Боль временна, гордость вечна",
    "Не останавливайся, пока не будешь гордиться"
  ];

  const workoutPrograms = [
    { name: "Силовые тренировки", duration: "45 мин", level: "Средний", icon: "Dumbbell" },
    { name: "Кардио HIIT", duration: "30 мин", level: "Высокий", icon: "Zap" },
    { name: "Йога и растяжка", duration: "60 мин", level: "Начальный", icon: "Heart" },
    { name: "Функциональный тренинг", duration: "40 мин", level: "Средний", icon: "Target" }
  ];

  const nutritionTips = [
    { title: "Белки", description: "1.6-2.2г на кг веса", icon: "Beef" },
    { title: "Углеводы", description: "3-5г на кг веса", icon: "Wheat" },
    { title: "Жиры", description: "0.8-1.2г на кг веса", icon: "Droplets" },
    { title: "Вода", description: "30-35мл на кг веса", icon: "Waves" }
  ];

  const achievements = [
    { title: "Первая неделя", icon: "Trophy", completed: true },
    { title: "10 тренировок", icon: "Medal", completed: true },
    { title: "Месяц активности", icon: "Star", completed: false },
    { title: "50 тренировок", icon: "Crown", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitness-light via-white to-fitness-blue/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Dumbbell" size={28} className="text-fitness-orange" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-fitness-orange to-fitness-blue bg-clip-text text-transparent">
                FitLife
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#main" className="text-fitness-dark hover:text-fitness-orange transition-colors">Главная</a>
              <a href="#workouts" className="text-fitness-dark hover:text-fitness-orange transition-colors">Тренировки</a>
              <a href="#programs" className="text-fitness-dark hover:text-fitness-orange transition-colors">Программы</a>
              <a href="#nutrition" className="text-fitness-dark hover:text-fitness-orange transition-colors">Питание</a>
              <a href="#quotes" className="text-fitness-dark hover:text-fitness-orange transition-colors">Мотивация</a>
            </div>
            <Button className="bg-gradient-to-r from-fitness-orange to-red-500 hover:from-red-500 hover:to-fitness-orange">
              Начать тренировку
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-fitness-orange via-red-500 to-fitness-blue bg-clip-text text-transparent">
            Твой путь к<br />идеальной форме
          </h2>
          <p className="text-xl text-fitness-dark/70 mb-8 max-w-2xl mx-auto">
            Комплексная платформа для отслеживания прогресса, планирования тренировок и здорового питания
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-fitness-orange to-red-500 hover:from-red-500 hover:to-fitness-orange text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-fitness-orange text-fitness-orange hover:bg-fitness-orange hover:text-white text-lg px-8">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Мой прогресс
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-fitness-dark">
            Трекер прогресса
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-fitness-orange">
                  <Icon name="Target" size={24} className="mr-2" />
                  Тренировки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-fitness-dark mb-2">{progressData.workouts}%</div>
                <Progress value={progressData.workouts} className="mb-2" />
                <p className="text-sm text-muted-foreground">Выполнено за месяц</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-fitness-blue">
                  <Icon name="Flame" size={24} className="mr-2" />
                  Калории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-fitness-dark mb-2">{progressData.calories}</div>
                <Progress value={62} className="mb-2" />
                <p className="text-sm text-muted-foreground">Сожжено сегодня</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-green-600">
                  <Icon name="TrendingDown" size={24} className="mr-2" />
                  Вес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-fitness-dark mb-2">{progressData.weight} кг</div>
                <Progress value={45} className="mb-2" />
                <p className="text-sm text-muted-foreground">До цели: -3 кг</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-purple-600">
                  <Icon name="Calendar" size={24} className="mr-2" />
                  Стрик
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-fitness-dark mb-2">{progressData.streak} дней</div>
                <Progress value={80} className="mb-2" />
                <p className="text-sm text-muted-foreground">Без пропусков</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-r from-fitness-orange/10 to-fitness-blue/10 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8 text-fitness-dark">Достижения</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`text-center p-4 rounded-xl transition-all ${achievement.completed ? 'bg-white shadow-md' : 'bg-gray-100 opacity-60'}`}>
                  <Icon 
                    name={achievement.icon as any} 
                    size={32} 
                    className={`mx-auto mb-2 ${achievement.completed ? 'text-fitness-orange' : 'text-gray-400'}`} 
                  />
                  <p className={`font-medium ${achievement.completed ? 'text-fitness-dark' : 'text-gray-500'}`}>
                    {achievement.title}
                  </p>
                  {achievement.completed && (
                    <Badge className="mt-2 bg-fitness-orange">Получено</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workout Programs */}
      <section id="programs" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-fitness-dark">
            Программы тренировок
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={program.icon as any} size={32} className="text-fitness-orange" />
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                  <CardTitle className="text-fitness-dark">{program.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.duration}</p>
                  <Button className="w-full bg-gradient-to-r from-fitness-orange to-red-500">
                    Начать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section id="nutrition" className="py-16 px-4 bg-fitness-light/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-fitness-dark">
            Питание и БЖУ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionTips.map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={tip.icon as any} size={40} className="mx-auto text-fitness-blue" />
                  <CardTitle className="text-fitness-dark">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-fitness-orange">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section id="quotes" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-fitness-dark">
            Мотивация дня
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {motivationalQuotes.map((quote, index) => (
              <Card key={index} className="bg-gradient-to-r from-fitness-orange/10 to-fitness-blue/10 border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Icon name="Quote" size={32} className="text-fitness-orange mb-4" />
                  <p className="text-lg font-medium text-fitness-dark italic">"{quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fitness-dark text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Dumbbell" size={28} className="text-fitness-orange" />
            <h1 className="text-2xl font-bold">FitLife</h1>
          </div>
          <p className="text-fitness-light/70 mb-6">
            Твой персональный помощник в достижении спортивных целей
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-fitness-light/70 hover:text-fitness-orange transition-colors cursor-pointer" />
            <Icon name="Youtube" size={24} className="text-fitness-light/70 hover:text-fitness-orange transition-colors cursor-pointer" />
            <Icon name="Twitter" size={24} className="text-fitness-light/70 hover:text-fitness-orange transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}