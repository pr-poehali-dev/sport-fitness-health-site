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

  const blogPosts = [
    {
      id: 1,
      title: "Лучшие упражнения для домашних тренировок",
      excerpt: "Эффективный комплекс для тренировок дома без дополнительного оборудования. Подходит для любого уровня подготовки.",
      author: "Анна Фитнес",
      date: "2 дня назад",
      readTime: "5 мин",
      category: "Тренировки",
      image: "/img/ef8d0948-9642-4e53-aa4b-8ed1f3fa7a15.jpg"
    },
    {
      id: 2,
      title: "Правильное питание для набора мышечной массы",
      excerpt: "Подробный гид по питанию для эффективного набора качественной мышечной массы. Расчет БЖУ и примеры меню.",
      author: "Максим Спорт",
      date: "5 дней назад",
      readTime: "8 мин",
      category: "Питание",
      image: "/img/ef8d0948-9642-4e53-aa4b-8ed1f3fa7a15.jpg"
    },
    {
      id: 3,
      title: "Кардио или силовые: что выбрать для похудения?",
      excerpt: "Сравниваем эффективность разных видов тренировок для жиросжигания. Научный подход к выбору программы.",
      author: "Елена Тренер",
      date: "1 неделя назад",
      readTime: "6 мин",
      category: "Похудение",
      image: "/img/ef8d0948-9642-4e53-aa4b-8ed1f3fa7a15.jpg"
    },
    {
      id: 4,
      title: "10 мифов о фитнесе, в которые все верят",
      excerpt: "Развенчиваем самые популярные заблуждения о тренировках и питании. Только научные факты.",
      author: "Виктор Эксперт",
      date: "2 недели назад",
      readTime: "7 мин",
      category: "Обучение",
      image: "/img/ef8d0948-9642-4e53-aa4b-8ed1f3fa7a15.jpg"
    }
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
              <a href="#programs" className="text-fitness-dark hover:text-fitness-orange transition-colors">Программы</a>
              <a href="#nutrition" className="text-fitness-dark hover:text-fitness-orange transition-colors">Питание</a>
              <a href="#blog" className="text-fitness-dark hover:text-fitness-orange transition-colors">Блог</a>
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

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-fitness-dark">
              Блог о фитнесе
            </h3>
            <Button variant="outline" className="border-fitness-orange text-fitness-orange hover:bg-fitness-orange hover:text-white">
              Все статьи
            </Button>
          </div>
          
          {/* Featured Article */}
          <div className="mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-fitness-orange">{blogPosts[0].category}</Badge>
                  <h4 className="text-2xl font-bold text-fitness-dark mb-4">{blogPosts[0].title}</h4>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                      <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                      <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="bg-gradient-to-r from-fitness-orange to-red-500">
                      Читать
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Ad Block */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-gray-100 to-gray-200 border-dashed border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <Icon name="Monitor" size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-600 mb-2">Рекламное место 728x90</p>
                <p className="text-sm text-gray-500">Здесь может быть ваша реклама спортивного питания, экипировки или тренажеров</p>
              </CardContent>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-fitness-blue">{post.category}</Badge>
                  <h4 className="text-lg font-bold text-fitness-dark mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full border-fitness-orange text-fitness-orange hover:bg-fitness-orange hover:text-white">
                    Читать статью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar Ad */}
          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <h4 className="text-2xl font-bold text-fitness-dark mb-6">Популярные темы</h4>
              <div className="flex flex-wrap gap-3">
                {["Домашние тренировки", "Правильное питание", "Кардио", "Силовые", "Растяжка", "Йога", "Похудение", "Набор массы"].map((tag, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-fitness-orange hover:text-white transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-gradient-to-b from-fitness-orange/10 to-fitness-blue/10 border-dashed border-2 border-gray-300">
                <CardContent className="p-6 text-center">
                  <Icon name="Smartphone" size={32} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-sm font-medium text-gray-600 mb-1">Боковой баннер</p>
                  <p className="text-xs text-gray-500">300x250</p>
                </CardContent>
              </Card>
            </div>
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