

interface Member {
  name: string;
  role: string;
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
      { name: "Brian Van", role: "President", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Vanessa Shimizu", role: "Vice President", image: "https://media.licdn.com/dms/image/v2/D5603AQGnGpClbRQvlQ/profile-displayphoto-scale_200_200/B56ZtnE5nBLAAY-/0/1766960897346?e=1771459200&v=beta&t=YZFMTPUpHZdF9gr0F1NqpOZHddJ_gWSWsNsL5yquSrU" },
      { name: "Tristan Dela Cruz", role: "Secretary", image: "https://media.licdn.com/dms/image/v2/D5603AQH5TiG3S3LeZg/profile-displayphoto-scale_200_200/B56ZrSfx3yKwAY-/0/1764468137958?e=1771459200&v=beta&t=Ebqep1mXWcRc_0B1mcrT4WC2iB4gPLTvp1L8lT1WsKA" },

    ],
  },
  {
    title: "Externals",
    members: [
      { name: "Sophia Sweeney", role: "External Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Jack Ishibashi", role: "Youth Engagement Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Nicholas DiDonato", role: "Youth Engagement Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Minh Nguyen", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
    ],
  },
  {
    title: "Internal",
    members: [
      { name: "Abby Baldwin", role: "Internal Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Meera Sambhwani", role: "Internal Affairs Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Connor Craft", role: "General Events Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Sean Chun", role: "Campus Events Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Storme Higgins", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Victoria Liu", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },

    ],
  },
  {
    title: "Communications",
    members: [
      { name: "Jocelyn Le", role: "Communications Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Sophia Luong Vieira ", role: "Social Media Engagement Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Connor Siu", role: "Platform Manager", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Eric Sun", role: "Historian", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Sarah McClelland", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Marco Cheng", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Tyler Tran", role: "Webmaster", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },

    ],
  },
  {
    title: "Finance",
    members: [
      { name: "Travis Le", role: "Finance Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Karlos Miguel Taluban", role: "Sponsership Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Rini Chen", role: "Fundraising Chair", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Benjamin Vu", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Pratham Patel", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Derek Nguyen", role: "Commitee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
    ],
  },
  {
    title: "Student Outreach",
    members: [
      { name: "Ben Gavani", role: "Mech In Training Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Katie Schmitz", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Colin Khoang", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Gianluca Molina", role: "Committee Member", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
    ],
  },
  {
    title: "Peterworks",
    members: [
      { name: "Yuvarj Chera", role: "Peterworks Director", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Sarah McClelland", role: "Peterworks TA", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
      { name: "Storme Higgins", role: "Peterworks TA", image: "https://media.licdn.com/dms/image/v2/D5603AQHbvfaCnSEdrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720490616032?e=1771459200&v=beta&t=X7KOQoFc1wtI00Imckzmq2NgBHfaXhz6MSYmpBbYm6E" },
    ],
  },
];

export default boardCommitte