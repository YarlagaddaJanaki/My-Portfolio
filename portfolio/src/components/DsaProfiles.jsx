import {
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";

function DsaProfiles() {
  const profiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/yarlagaddajanaki/", icon: SiLeetcode },
    { name: "CodeChef", url: "https://www.codechef.com/users/janaki_18", icon: SiCodechef },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/yarlagaddajanak1", icon: SiHackerrank },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/yarlagaddau2t2",
      icon: SiGeeksforgeeks,
    },
  ];

  return (
    <section id="dsa" className="section">
      <h2>DSA Profiles</h2>
      <div className="panel dsa-grid">
        {profiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <a
              className="dsa-item"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
            >
              <span className="contact-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="dsa-name">{profile.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default DsaProfiles;
