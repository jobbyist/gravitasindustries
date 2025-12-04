const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Gravitas Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
