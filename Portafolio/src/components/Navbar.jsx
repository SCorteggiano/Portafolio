import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function AppNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">Portafolio</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>      
        <NavbarLink href="/landing">Home</NavbarLink>
        <NavbarLink href="/tec">Tecnologias</NavbarLink>
        <NavbarLink href="/projects">Proyectos</NavbarLink>
        <NavbarLink href="/contact">Contacto</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default AppNavbar;
