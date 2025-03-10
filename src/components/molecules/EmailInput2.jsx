import Input from '../atoms/Input2';
import Button from '../atoms/Button';

// eslint-disable-next-line react/prop-types
export default function EmailInput({ placeholder, buttonText }) {
  return (
    <div className="relative ">
      <Input type="email" placeholder={placeholder} />
      <Button className="absolute bottom-1 right-1 top-1 flex h-[49px] max-w-[154px] items-center justify-center lg:h-14">
        {buttonText}
      </Button>
    </div>
  );
}
