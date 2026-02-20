

interface Member {
  name: string;
  role: string;
  linkedin : string;
  image: string;
}

interface BoardCommittee {
  title: string;
  members: Member[];
}


const boardCommitte: BoardCommittee[] = [
  {
    title: "Executive",
    members: [
      { name: "Brian Van", role: "President", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Vanessa Shimizu", role: "Vice President", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Tristan Dela Cruz", role: "Secretary", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },

    ],
  },
  {
    title: "Externals",
    members: [
      { name: "Sophia Sweeney", role: "External Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Jack Ishibashi", role: "Youth Engagement Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Nicholas DiDonato", role: "Networking Events Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Minh Nguyen", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
    ],
  },
  {
    title: "Internal",
    members: [
      { name: "Abby Baldwin", role: "Internal Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Meera Sambhwani", role: "Internal Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Connor Craft", role: "General Events Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Sean Chun", role: "Campus Events Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Storme Higgins", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Victoria Liu", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },

    ],
  },
  {
    title: "Communications",
    members: [
      { name: "Jocelyn Le", role: "Communications Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Sophia Luong Vieira ", role: "Social Media Engagement Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Connor Siu", role: "Platform Manager", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Eric Sun", role: "Historian", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Sarah McClelland", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Marco Cheng", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/"},
      { name: "Tyler Tran", role: "Webmaster", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },

    ],
  },
  {
    title: "Finance",
    members: [
      { name: "Travis Le", role: "Finance Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Karlos Miguel Taluban", role: "Sponsership Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Rini Chen", role: "Fundraising Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Benjamin Vu", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Pratham Patel", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Derek Nguyen", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
    ],
  },
  {
    title: "Student Outreach",
    members: [
      { name: "Ben Gavani", role: "Mech In Training Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Katie Schmitz", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Colin Khoang", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Gianluca Molina", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
    ],
  },
  {
    title: "Peterworks",
    members: [
      { name: "Yuvarj Chera", role: "Peterworks Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Sarah McClelland", role: "Peterworks TA", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
      { name: "Storme Higgins", role: "Peterworks TA", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720490616014?e=1773273600&v=beta&t=jBcA50gdLX80hYrEwIztjr3zuf50Cl-A_iiKG3xO4-g", linkedin : "https://www.linkedin.com/in/brian-van-/" },
    ],
  },
];

export default boardCommitte