import uber from "../assets/uber.svg";
import amazon from "../assets/amazon.svg";
import ebay from "../assets/ebay.svg";
import walmart from "../assets/walmart.svg";
import pattern from "../assets/pattern.svg";

function Ads() {
  return (
    <div className="ads-section bg-additional-navy flex items-center justify-center" style={{backgroundImage: `url(${pattern})`}}>
        <div className="container max-w-[334.18px] lg:max-w-[720.46px] py-[24px] lg:py-[56px]">
            <div className="ads-image flex items-center justify-center gap-[48px]">
                <img src={uber} alt="uber" className="w-[38.86px] h-[13.5px] sm:w-auto sm:h-auto"/>
                <img src={amazon} alt="amazon" className="w-[38.86px] h-[13.5px] sm:w-auto sm:h-auto"/>
                <img src={ebay} alt="ebay" className="w-[38.86px] h-[13.5px] sm:w-auto sm:h-auto"/>
                <img src={walmart} alt="walmart" className="w-[38.86px] h-[13.5px] sm:w-auto sm:h-auto"/>
            </div>
        </div>
    </div>
  )
}

export default Ads;