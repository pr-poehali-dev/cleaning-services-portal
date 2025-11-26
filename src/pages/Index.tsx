import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Клининговая служба</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональная уборка после ремонта
              </h1>
              <p className="text-xl text-muted-foreground">
                Превратим строительный хаос в идеальную чистоту. Специализируемся на послеремонтной уборке квартир, домов и офисов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Заказать уборку
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">50000+</div>
                  <div className="text-sm text-muted-foreground">Выполненных объектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">7 дней в неделю</div>
                  <div className="text-sm text-muted-foreground">Готовность выехать</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/311b3924-436a-426e-8e47-5a8e1a98b449/files/60c99727-7d42-4839-8404-6dcf58545bdc.jpg" 
                alt="Профессиональная уборка" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к уборке после любых видов ремонтных и строительных работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Уборка после ремонта</CardTitle>
                <CardDescription className="text-base">
                  Удаление строительной пыли, мытье окон, полов, стен. Полная очистка помещения.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Послестроительная уборка</CardTitle>
                <CardDescription className="text-base">
                  Очистка новостроек от цемента, краски, клея. Подготовка к заселению.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Генеральная уборка</CardTitle>
                <CardDescription className="text-base">
                  Глубокая чистка всех поверхностей, мебели, техники. До блеска!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Мойка окон и фасадов</CardTitle>
                <CardDescription className="text-base">
                  Профессиональная очистка стеклопакетов, балконов, витражей.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trash2" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Вывоз строительного мусора</CardTitle>
                <CardDescription className="text-base">
                  Утилизация отходов, демонтаж упаковки, очистка территории.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Клининг офисов</CardTitle>
                <CardDescription className="text-base">
                  Послеремонтная подготовка офисных помещений к работе.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены на все виды услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Уборка после ремонта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>1-комнатная квартира</span>
                  <span className="font-semibold"> 600 ₽ за кв.м</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>2-комнатная квартира</span>
                  <span className="font-semibold"> 600 ₽ за кв.м</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>3-комнатная квартира</span>
                  <span className="font-semibold"> 600 ₽ за кв.м</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Частный дом (за м²)</span>
                  <span className="font-semibold"> 600 ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Дополнительные услуги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Мойка окон (за окно)</span>
                  <span className="font-semibold">от 3000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Устранение неприятных запахов (сухой туман) (за м²)</span>
                  <span className="font-semibold">600 р.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Вывоз мусора (за м³)</span>
                  <span className="font-semibold">от 8000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Генеральная уборка</span>
                  <span className="font-semibold"> 600 ₽ за кв.м</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать полный прайс-лист
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/311b3924-436a-426e-8e47-5a8e1a98b449/files/60906fbe-1213-471f-af58-73095715464b.jpg" 
                alt="О компании" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О компании Клининговая служба</h2>
              <p className="text-lg text-muted-foreground">Мы специализируемся на профессиональной уборке после ремонта и строительства с 2015 года. За это время успешно выполнили более 50000 проектов различной сложности.</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Профессиональное оборудование</h3>
                    <p className="text-muted-foreground">Используем только сертифицированную технику и безопасные химические средства</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Опытная команда</h3>
                    <p className="text-muted-foreground">Все специалисты имеют опыт работы от 3 лет и регулярно проходят обучение</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем гарантию на выполненные работы и несем полную ответственность</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="text-lg font-semibold">+7 (4242)50-03-85</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-lg font-semibold">torg-potol@list.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="text-lg font-semibold">г. Южно-Сахалинск, Шлакоблочная, 34 оф. 206</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Режим работы</div>
                    <div className="text-lg font-semibold">Ежедневно с 8:00 до 20:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Форма заявки</CardTitle>
                <CardDescription>Заполните форму, и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш объект и требуемые услуги"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={28} />
                <span className="text-xl font-bold">Клининговая служба</span>
              </div>
              <p className="text-slate-300">
                Профессиональная уборка после ремонта и строительства
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Уборка после ремонта</li>
                <li>Послестроительная уборка</li>
                <li>Генеральная уборка</li>
                <li>Мойка окон</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Прайс-лист</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-300">
                <li>+7 (4242) 500-385</li>
                <li>torg-potol@list.ru</li>
                <li>Южно-Сахалинск, Шлакоблочная, 34 оф. 206</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 Клининговая служба. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;