import Image from 'next/image';
import avatarPhoto from '@/public/images/about-photo.png';
import Skills from '@/components/Skills/Skills';

function About() {
  return (
    <>
      <div className="mb-10 lg:flex lg:items-center lg:gap-20 md:mb-16">
        <div className="lg:w-2/5 mb-14 md:mb-20 lg:mb-0">
          <Image className="mx-auto" src={avatarPhoto} alt="Сергей Артемов - веб-разработчик" />
        </div>
        <div className="prose-sm max-w-prose lg:w-3/5 sm:prose-base md:prose-lg">
          <h1 className="mb-5 block-title not-prose">Обо мне</h1>
          <p>
            👋 Меня зовут Сергей Артемов, я frontend-разработчик. Профессионально занимаюсь
            разработкой и сопровождением сайтов. Провожу маркетинговое исследование, создаю дизайн,
            верстаю и программирую.
          </p>

          <p>
            Мне нравится использовать React.js или Next.js для создания сайтов и функциональных
            веб-приложений. Также работаю с 1С-Битрикс и Tilda.
          </p>

          <p>
            Наилучшим образом представлю вашу компанию в интернете и приведу клиентов с помощью
            контекстной рекламы Яндекс.Директ.
          </p>

          <p>Люблю кататься на 🚲 велосипеде и готовить 🍕 пиццу.</p>
        </div>
      </div>
      <Skills />
    </>
  );
}

export default About;
