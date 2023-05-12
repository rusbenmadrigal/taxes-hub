import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
  IoLogoStackoverflow,
} from "react-icons/io5";

const Social = ({ source, className }) => {
  const {
    facebook,
    stackoverflow,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter />
          </a>
        </li>
      )}

      {linkedin && (
        <li className="inline-block">
          <a
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
