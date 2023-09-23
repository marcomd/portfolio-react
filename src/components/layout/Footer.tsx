import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";


import { 
  SITE_URL, 
  SITE_NAME, 
  SITE_THUMBNAIL 
} from "../../lib/constants"

import { useTranslation } from "react-i18next";

const writeUsTemplate = `mailto:m.mastrodonato+portfolio@gmail.com?subject=Greetings!&body=Dear Marco,%0D%0A%0D%0A[insert cute message here] 😍`
const tellAFriend = {
  title: "I visited Marco's homepage",
  body: "Hey, this is the homepage a true nerd should have 🤟",
  hashtags: ["homepage", "full stack developer", "nerd", "cool"],
  hashtag: function() { return this.hashtags.map(t => `#${t}`).join(' ') },
  siteName: SITE_NAME,
  url: SITE_URL,
  media: SITE_THUMBNAIL,
}
const iconSize=32

export default function Footer() {
  const { t } = useTranslation();
  (function (w: any, d: any) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag?.parentNode?.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);
  (function (w: any, d: any) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag?.parentNode?.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);

  return (
    <footer>
      <div className="row">{t('footer.tellAFriend')}</div>
      <div className="row">
        <WhatsappShareButton url={tellAFriend.url} title={tellAFriend.body}>
          <WhatsappIcon size={iconSize} round={true}/>
        </WhatsappShareButton>
        <EmailShareButton url={tellAFriend.url} subject={tellAFriend.title} body={tellAFriend.body}>
          <EmailIcon size={iconSize} round={true}/>
        </EmailShareButton>
        <FacebookShareButton url={tellAFriend.url} quote={tellAFriend.body} hashtag={tellAFriend.hashtag()}>
          <FacebookIcon size={iconSize} round={true}/>
        </FacebookShareButton>
        <PinterestShareButton url={tellAFriend.url} description={tellAFriend.body} media={tellAFriend.media}>
          <PinterestIcon size={iconSize} round={true}/>
        </PinterestShareButton>
        <LinkedinShareButton url={tellAFriend.url} title={tellAFriend.title} summary={tellAFriend.body} source={tellAFriend.siteName}>
          <LinkedinIcon size={iconSize} round={true}/>
        </LinkedinShareButton>
        <TumblrShareButton url={tellAFriend.url} title={tellAFriend.title} caption={tellAFriend.body} tags={tellAFriend.hashtags}>
          <TumblrIcon size={iconSize} round={true}/>
        </TumblrShareButton>
        <TwitterShareButton url={tellAFriend.url} title={tellAFriend.title} hashtags={tellAFriend.hashtags}>
          <TwitterIcon size={iconSize} round={true}/>
        </TwitterShareButton>
        <RedditShareButton url={tellAFriend.url} title={tellAFriend.body}>
          <RedditIcon size={iconSize} round={true}/>
        </RedditShareButton>
        <TelegramShareButton url={tellAFriend.url} title={tellAFriend.body}>
          <TelegramIcon size={iconSize} round={true}/>
        </TelegramShareButton>
      </div>
      <div className="row">
        Developed by&nbsp;
        <a href={writeUsTemplate}>
          Marco Mastrodonato
        </a>
        &nbsp;with&nbsp;
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </div>
      <div className="row">2023 All rights reserved.</div>
      <div className="row mt-2">
        <a href="https://www.iubenda.com/privacy-policy/69999769" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>&nbsp;
        <a href="https://www.iubenda.com/privacy-policy/69999769/cookie-policy" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>
      </div>
    </footer>
  );
}
