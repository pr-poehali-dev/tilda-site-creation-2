import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', comment: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 15 минут.',
    });
    setFormData({ name: '', phone: '', email: '', comment: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Сопровождение 1С: <span className="text-primary">стабильно, безопасно,</span> без простоев
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное обслуживание ваших систем 1С — чтобы бизнес работал без сбоев
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Оставить заявку <Icon name="ArrowRight" size={20} />
              </Button>
            </div>
            <div className="animate-fade-in hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Server" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">1С:Предприятие</div>
                      <div className="text-xs text-muted-foreground">Версия 8.3</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-500" />
                      <span className="text-sm">Система работает стабильно</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={20} className="text-blue-500" />
                      <span className="text-sm">Резервная копия создана</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-yellow-500" />
                      <span className="text-sm">Обновления установлены</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги по сопровождению 1С</h2>
            <p className="text-muted-foreground text-lg">Полный спектр поддержки для бесперебойной работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Settings',
                title: 'Техническая поддержка',
                items: ['Решаем проблемы в работе 1С', 'Консультируем пользователей', 'Устраняем ошибки и сбои'],
              },
              {
                icon: 'TrendingUp',
                title: 'Обновления и патчи',
                items: ['Устанавливаем актуальные версии', 'Следим за безопасностью', 'Тестируем обновления'],
              },
              {
                icon: 'Wrench',
                title: 'Доработки и настройки',
                items: ['Адаптируем 1С под ваши процессы', 'Добавляем отчёты и формы', 'Интегрируем с другими системами'],
              },
              {
                icon: 'Cloud',
                title: 'Резервное копирование',
                items: ['Настраиваем автоматическое сохранение', 'Проверяем целостность данных', 'Помогаем восстановить информацию'],
              },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Надёжность проверенная временем</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Award', title: 'Опыт', desc: 'Работаем с 1С более 10 лет' },
              { icon: 'Clock', title: 'Скорость', desc: 'Реагируем на заявки в течение 1 часа' },
              { icon: 'GraduationCap', title: 'Эксперты', desc: 'Сертифицированные специалисты 1С' },
              { icon: 'Sparkles', title: 'Гибкость', desc: 'Подбираем тариф под ваш бюджет' },
              { icon: 'ShieldCheck', title: 'Гарантия', desc: 'Фиксируем сроки и ответственность в договоре' },
              { icon: 'Users', title: 'Персональный менеджер', desc: 'Всегда на связи для решения задач' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">4 шага к стабильной работе 1С</h2>
            <p className="text-muted-foreground text-lg">Простой и прозрачный процесс начала работы</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Mail', title: 'Заявка', desc: 'Вы оставляете запрос — мы связываемся в течение 15 минут' },
              { icon: 'Search', title: 'Анализ', desc: 'Изучаем вашу систему и задачи, предлагаем решение' },
              { icon: 'FileText', title: 'Договор', desc: 'Фиксируем объём работ, сроки и стоимость' },
              { icon: 'Shield', title: 'Сопровождение', desc: 'Начинаем поддержку — вы получаете надёжный сервис' },
            ].map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={step.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="absolute top-10 left-[60%] w-full h-0.5 bg-primary/30 hidden md:block last:hidden"></div>
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">{idx + 1}</Badge>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий тариф</h2>
            <p className="text-muted-foreground text-lg">Гибкие условия для любого бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: 'от 5 000 ₽/мес',
                features: ['Техническая поддержка (до 5 обращений/мес)', 'Обновления платформы', 'Резервное копирование'],
                popular: false,
              },
              {
                name: 'Оптимальный',
                price: 'от 12 000 ₽/мес',
                features: ['Всё из Базового', 'Доработки интерфейса (до 2 ч/мес)', 'Консультации по учёту', 'Приоритетная поддержка'],
                popular: true,
              },
              {
                name: 'Премиум',
                price: 'от 25 000 ₽/мес',
                features: ['Всё из Оптимального', 'Персональный менеджер', 'Аварийное восстановление', 'Безлимитная поддержка'],
                popular: false,
              },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative hover:shadow-2xl transition-all animate-fade-in ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground mt-2">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={scrollToContact} className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-muted-foreground text-lg">Реальные отзывы наших партнёров</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: 'Благодаря сопровождению, наши бухгалтеры больше не ждут ответов по неделям. Всё решается за часы!',
                author: 'Анна Петрова',
                position: 'Директор ООО «СтройМастер»',
              },
              {
                text: 'Специалисты быстро нашли и исправили ошибку в расчёте зарплаты. Теперь спим спокойно.',
                author: 'Иван Сидоров',
                position: 'Гл. бухгалтер ООО «ТоргСервис»',
              },
            ].map((review, idx) => (
              <Card key={idx} className="animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6">
                  <Icon name="Quote" size={32} className="text-primary/30 mb-4" />
                  <p className="text-lg mb-6 italic">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{review.author}</div>
                      <div className="text-sm text-muted-foreground">{review.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Готовы наладить работу 1С?</h2>
              <p className="text-lg opacity-90">Оставьте заявку — и мы свяжемся с вами в течение 15 минут, чтобы обсудить детали</p>
            </div>
            <Card className="animate-fade-in-up">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Комментарий (опционально)"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="bg-background min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border text-center space-y-2 text-foreground">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="Phone" size={16} />
                    <span>+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="Mail" size={16} />
                    <span>info@example.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="Send" size={16} />
                    <span>@example</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Server" size={24} />
              <span className="font-bold text-lg">1С Сопровождение</span>
            </div>
            <div className="text-sm text-center md:text-left">
              © 2025. Все права защищены. <a href="#" className="underline hover:no-underline">Политика конфиденциальности</a> | <a href="#" className="underline hover:no-underline">Договор-оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
