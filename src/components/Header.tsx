import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8">
      <nav className="flex justify-between items-center">
        <a
          href="#contact"
          className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors duration-300"
        >
          CONTACT
        </a>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.email}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-sm font-medium tracking-wide"
              >
                LOGOUT
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium tracking-wide"
              >
                LOGIN
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
