"use client"
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { useEffect } from "react";
import Link from "next/link";
import LogRocket from "logrocket";

export default function Cookies() {
  useEffect(() => {
    // Initialize LogRocket immediately (fully anonymous)
    LogRocket.init("3odzrd/portfolio", {
      network: { isEnabled: false },
      console: { isEnabled: false },
    });

    // Cookie consent banner (transparency-only)
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: true, // sessions are anonymous, so default to enabled
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "This site uses cookies to ensure proper functionality and improve your experience. No personal data is collected. Learn more in the <a href='/privacy'>Privacy Policy</a>.",
              acceptAllBtn: "OK",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Manage Cookie Preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Strictly Necessary Cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect anonymous data to help us understand usage trends and improve the site.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More Information",
                  description:
                    'For more details on cookies and data usage, see our <a href="/privacy">Privacy Policy</a>.',
                },
              ],
            },
          },
        },
      },
      onChange(param) {
        // end logrocket session if the analytics cookie is not selected.
        if (!param.changedCategories.find(c => c === "analytics")) {
          LogRocket.init("");

        }
      },
    });
  }, []);

  return <div></div>;
}