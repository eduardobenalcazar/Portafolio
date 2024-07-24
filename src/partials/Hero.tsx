import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, mi nombre es <GradientText>Eduardo</GradientText> 👋
        </>
      }
      description={
        <>
          Bienvenido a mi portafolio. Soy un{' '}
          <a className="text-yellow-400 hover:underline" href="#">
            desarrollador web
          </a>{' '}
          con una gran pasión por la creación de aplicaciones y sitios web. Me
          especializo en el uso de tecnologías como{' '}
          <a className="text-cyan-400 hover:underline" href="#">
            Astro.js y Tailwind.css
          </a>{' '}
          para desarrollar proyectos que destacan por su,funcionalidad y diseño.
        </>
      }
      avatar={
        <div className="relative h-[400px] w-[300px]">
          <img
            className="h-full w-full object-cover"
            src="./perfil2-removebg.png"
            alt="Eduardo Benalcazar"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
      }
      socialButtons={
        <>
          <a
            href="https://web.facebook.com/eduardo.benalcazar.900"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://ec.linkedin.com/in/eduardo-benalcazar-0bb12a273">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
