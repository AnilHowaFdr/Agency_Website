import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const CreativeItems = ({ src, title, detail }) => {
  return (
    <div className="p-5 w-1/4 rounded-xl bg-white">
      <div className="rounded-xl pb-5">
        <img className="w-full" src={src} alt="img" />
      </div>
      <div className="cursor-pointer group relative">
        <h3 className="pb-2 text-center font-bold text-2xl font-third">
          {title}
        </h3>
        <p className="detail text-center">{detail}</p>
        <div className="absolute top-0 left-12 scale-0 group-hover:scale-100 bg-white h-full flex items-center gap-4 justify-center group">
          <div className="w-12 h-12 rounded-full bg-secondary relative">
            <TiSocialFacebook className="text-3xl absolute top-2 left-2 text-primary" />
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary relative">
            <TiSocialTwitter className="text-3xl absolute top-2 left-2 text-primary" />
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary relative">
            <TiSocialLinkedin className="text-3xl absolute top-2 left-2 text-primary" />
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary relative">
            <TiSocialYoutube className="text-3xl absolute top-2 left-2 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeItems;
