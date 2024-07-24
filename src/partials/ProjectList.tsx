import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Proyectos</GradientText> Recientes
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Proyecto 1 - Portafolio"
        description=" Este proyecto es un portafolio personal creado con Astro.js, React
         y Tailwind.css. El portafolio muestra una presentación profesional y moderna, 
         destacando proyectos anteriores, habilidades y formas de contacto."
        link="#project-images"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="Proyecto 2 - Tarjeta "
        description="Un diseño elegante y minimalista de una tarjeta de presentación. Utilizando HTML y CSS, esta tarjeta incluye información clave como el nombre, título, información de contacto y un logo, todo dispuesto de manera atractiva y profesional."
        link="#project-images"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.EMERALD}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Proyecto 3 - Juego de Snake"
        description="Un juego clásico de Snake desarrollado con Python y Pygame. Este proyecto recrea la experiencia nostálgica del juego de Snake, con una interfaz moderna y controles intuitivos, perfecto para demostrar habilidades en desarrollo de juegos y programación"
        link="#project-images"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Pygame</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
