const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8">
      <nav className="flex justify-between items-center">
        <a
          href="#contact"
          className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
