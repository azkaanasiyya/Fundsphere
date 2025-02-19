import Input from "../atoms/input";
import Button from "../atoms/button"

// eslint-disable-next-line react/prop-types
export default function EmailInput({ placeholder, buttonText }) {
  return (
    <div className="relative ">
      <Input type="email" placeholder={placeholder}/>
      <Button className="absolute bottom-1 right-1 top-1 flex items-center justify-center h-12 lg:h-14 max-w-[153px]">
        {buttonText}
      </Button>
    </div>
  );
}
