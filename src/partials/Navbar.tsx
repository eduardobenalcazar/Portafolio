import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <img
          className=" h-[120px] w-[120px]"
          src="/logo-eduardo-white.png"
          alt="Avatar image"
          loading="lazy"
        />
      </a>

      <NavMenu>
        <NavMenuItem
          href="https://web.facebook.com/eduardo.benalcazar.900"
          target="_blank"
        >
          Facebook
        </NavMenuItem>
        <NavMenuItem
          href="https://github.com/eduardobenalcazar"
          target="_blank"
        >
          GitHub
        </NavMenuItem>
        <NavMenuItem
          href="https://ec.linkedin.com/in/eduardo-benalcazar-0bb12a273"
          target="_blank"
        >
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
