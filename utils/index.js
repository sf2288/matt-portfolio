import { FacebookIcon } from "../components/SVG/FacebookIcon";

export const AppConfig = {
  first_name: "desmond",
  last_name: "RAMBOWSKI",
  profilePic: "/profile.png",
  subTitle: "Web Developer & Front-end Expert",
  locale: "en_US",
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
    showSubTitle: true,
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
        <br />
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non
          felis mollis.
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
  experience: {
    title: "EXPERIENCE",
    subTitle: "Yes. I've benn around.",
    showSubTitle: true,
    data: [
      {
        date: "2015 – Present",
        title: "UNICORN INCUBATOR INC",
        designation: "Senior Interface Designer",
        city: "Portland, OR",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
      {
        date: "2013 – 2015",
        title: "CALIFORNIA DESIGN BUREAU",
        designation: "Creative Director",
        city: "Cupertino, CA",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
      {
        date: "2010 – 2013",
        title: "DREAMLAND CREATIVE",
        designation: "Senior Interface Designer",
        city: "Front-end Designer",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
    ],
  },
  education: {
    title: "EDUCATION",
    subTitle: "Lazy isn't in my vocabulary.",
    showSubTitle: true,
    data: [
      {
        date: "2008 – 2010",
        title: "WEBSTER TECH UNIVERSITY",
        designation: "Master of Computer Science",
        city: "Portland, OR",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
      {
        date: "2003 – 2008",
        title: "NINSEI UNIVERSITY",
        designation: "Bachelor of Computer Science",
        city: "Tokyo, Japan",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      },
      {
        date: "2000 – 2003",
        title: "ACADEMY OF FINE ARTS",
        designation: "Master of Arts",
        city: "Berlin, Germany",
        description:
          "Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
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
        description: "An overview of the themes and templates that I sell.",
      },
      {
        icon: <FacebookIcon />,
        title: "GITHUB",
        description: "All my open source projects for you analyze.",
      },
      {
        icon: <FacebookIcon />,
        title: "MEDIUM",
        description: "Yes. I'm also a blogger and here you find my writings.",
      },
      {
        icon: <FacebookIcon />,
        title: "THEMFOREST",
        description: "An overview of the themes and templates that I sell.",
      },
      {
        icon: <FacebookIcon />,
        title: "GITHUB",
        description: "All my open source projects for you analyze.",
      },
      {
        icon: <FacebookIcon />,
        title: "MEDIUM",
        description: "Yes. I'm also a blogger and here you find my writings.",
      },
    ],
  },
  portfolio: {
    title: "PORTFOLIO",
    subTitle: "Here it gets interesting.",
    showSubTitle: true,
    data: [
      {
        title: "UNICORN DEVELOPER -1",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer1",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
      {
        title: "UNICORN DEVELOPER-2",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer2",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
      {
        title: "UNICORN DEVELOPER-3",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer3",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
      {
        title: "UNICORN DEVELOPER",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer4",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
      {
        title: "UNICORN DEVELOPER",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer5",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
      {
        title: "UNICORN DEVELOPER",
        description:
          "UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts UFC Gym is the world leader in MMA-inspired fitness. With locations all over the world, they empower people to find their fit through unique classes and high-intensity workouts.",
        path: "unicorn-developer6",
        thumbnail: "/profile.png",
        images: [
          "/profile.png",
          "/profile.png",
          "/profile.png",
          "/profile.png",
        ],
      },
    ],
  },
  contact: {
    title: "CONTACT",
    subTitle: "Call me, maybe.",
    showSubTitle: true,
  },
};
