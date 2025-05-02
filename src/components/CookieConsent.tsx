
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      // Show cookie consent after a slight delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <Card className="max-w-lg w-full shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <p className="font-medium mb-1">🍪 We use cookies</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This website uses cookies to enhance your browsing experience and analyze site traffic.
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-2">
              <Button variant="outline" size="sm" onClick={declineCookies}>
                Decline
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Accept
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
