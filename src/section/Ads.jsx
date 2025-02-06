import uber from "../assets/uber.svg";
import amazon from "../assets/amazon.svg";
import ebay from "../assets/ebay.svg";
import walmart from "../assets/walmart.svg";
import pattern from "../assets/pattern.svg";

function Ads() {
  return (
    <div className="ads-section bg-additional-navy flex items-center justify-center" style={{backgroundImage: `url(${pattern})`}}>
        <div className="container max-w-[720.46px] py-[56px]">
            <div className="ads-image flex items-center justify-center gap-[48px]">
                <img src={uber} alt="uber" />
                <img src={amazon} alt="amazon" />
                <img src={ebay} alt="ebay" />
                <img src={walmart} alt="walmart" />
            </div>
        </div>
    </div>
  )
}

export default Ads;