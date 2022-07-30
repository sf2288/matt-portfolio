import { FacebookIcon } from "../components/SVG/FacebookIcon";

export const AppConfig = {
  first_name: "matt",
  last_name: "Masteller",
  profilePic: "/matt.jpg",
  subTitle: "Web Developer & Front-end Expert",
  locale: "en",
  site_name: "site_name",
  location: "Portland, OR, USA",
  phone: "856 255 48 25",
  email: "demo@gmail.com",
  website: "https://google.com",
  social: {
    github: { url: "https://github.com", ariaLabel: "Github", enabled: true },
    twitter: {
      url: "https://twitter.com",
      ariaLabel: "Twitter",
      enabled: true,
    },
    linkedIn: {
      url: "https://linkedin.com",
      ariaLabel: "Linked In",
      enabled: true,
    },
    facebook: {
      url: "https://facebook.com",
      ariaLabel: "Facebook",
      enabled: true,
    },
  },
  intro: {
    title: "INTRO",
    subTitle: "What I am all about.",
    showSubTitle: false,
    description: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed{" "}
          <a
            href="#"
            className="text-secondary-light-text-orange hover:text-orange-500 dark:text-primary-dark-text-orange dark:hover:text-white"
          >
            pretium
          </a>
          , ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
          blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
          potenti. Nulla vitae mauris non felis mollis faucibus.
        </p>
      </>
    ),
  },
  expertise: {
    title: "EXPERTISE",
    subTitle: "Batman would be jealous.",
    showSubTitle: true,
    data: [
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
      {
        title: "ADVANCED CSS",
        description:
          "Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id.",
      },
    ],
  },
  profileLinks: {
    title: "PROFILES",
    subTitle: "Busy as usual.",
    showSubTitle: true,
    links: [
      {
        icon: <FacebookIcon />,
        title: "THEMFOREST",
        description: "An overview of the themes and templates that I sell",
      },
      {
        icon: <FacebookIcon />,
        title: "GITHUB",
        description: "An overview of the themes and templates that I sell",
      },
      {
        icon: <FacebookIcon />,
        title: "MEDIUM",
        description: "An overview of the themes and templates that I sell",
      },
      {
        icon: <FacebookIcon />,
        title: "THEMFOREST",
        description: "An overview of the themes and templates that I sell",
      },
      {
        icon: <FacebookIcon />,
        title: "GITHUB",
        description: "An overview of the themes and templates that I sell",
      },
      {
        icon: <FacebookIcon />,
        title: "MEDIUM",
        description: "An overview of the themes and templates that I sell",
      },
    ],
  },
  portfolio: {
    title: "PORTFOLIO",
    subTitle: "Here it gets interesting.",
    showSubTitle: true,
    data: [
      {
        title: "UNICORN DEVELOPER 1",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer1",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
      {
        title: "UNICORN DEVELOPER 2",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer2",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
      {
        title: "UNICORN DEVELOPER 3",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer3",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
      {
        title: "UNICORN DEVELOPER 4",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer4",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
      {
        title: "UNICORN DEVELOPER 5",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer5",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
      {
        title: "UNICORN DEVELOPER 6",
        description:
          "Lorem ipsum dolor sit amet, justo eget porttitor mauris sit amet felis. Neque id cursus faucibus.",
        path: "unicorn-developer6",
        thumbnail: "/matt.jpg",
        images: ["/matt.jpg"],
      },
    ],
  },
  contact: {
    title: "CONTACT",
    subTitle: "Call me, maybe.",
    showSubTitle: true,
  },
};
