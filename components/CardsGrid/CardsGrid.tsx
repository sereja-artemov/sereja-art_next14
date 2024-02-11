import React from 'react';
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import CardWrapper from '../CardWrapper/CardWrapper';
import ProjectsBlock from '../ProjectsBlock/ProjectsBlock';
import PostBlock from '../PostBlock/PostBlock';
import NotesBlock from '../NotesBlock/NotesBlock';

const CardsGrid = () => {
  return (
    <section className="container grid grid-flow-row-dense grid-cols-12 gap-5">
      {/* Услуги */}
      <CardWrapper
        cssGridClassName="bg-[#1635A5] col-span-full lg:col-span-6 line-background text-whiteSecondary"
        
      >
        <ServicesBlock />
      </CardWrapper>

      {/* Проекты */}
      <CardWrapper
        cardLink="/projects"
        cardTitle="Проекты"
        cssGridClassName="bg-darkSecondary col-span-full lg:col-span-6 flex flex-col text-whiteSecondary"
      >
        <ProjectsBlock />
      </CardWrapper>

      {/* Блог */}
      <CardWrapper
        cardLink="/blog"
        cardTitle="Последняя запись"
        cssGridClassName="col-span-full lg:row-span-2 lg:col-span-6 xl:col-span-3 flex flex-col bg-whiteSecondary dark:bg-darkSecondary border border-blockBorderColorLight dark:border-blockBorderColorDark"
        isHeader
      >
        <PostBlock />
      </CardWrapper>

      {/* Заметки */}
      <CardWrapper
        cardLink="/notes"
        cardTitle="Последние заметки"
        cssGridClassName="border border-darkPrimary/50 dark:border-whiteSecondary/30 lg:row-span-2 col-span-full lg:col-span-6 xl:col-span-3 flex flex-col"
        isHeader
        isBgTransparent
      >
        <NotesBlock />
      </CardWrapper>
      
      <CardWrapper
        cssGridClassName="border border-darkPrimary/50 dark:border-whiteSecondary/30 lg:row-span-1 col-span-full lg:col-span-6 flex flex-col"
        isBgTransparent
      >
        <span className='m-auto text-sm'>Тут ничего нет.</span>
      </CardWrapper>
      <CardWrapper
        cssGridClassName="border border-darkPrimary/50 dark:border-whiteSecondary/30 lg:row-span-1 col-span-full lg:col-start-7 flex flex-col"
        isBgTransparent
      >
        <span className='m-auto text-sm'>И тут ничего нет.</span>
      </CardWrapper>
    </section>
  );
};

export default CardsGrid;
