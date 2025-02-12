export default function Headline({ tag, title, description }) {
  return (
    <div className="headline flex flex-col items-center w-[335px] lg:w-[479px] text-center">
      {tag && (
        <span className="mb-[16px] inline-block rounded-full bg-additional-purple px-[16px] py-[8px] text-sm font-normal text-primary-500">
          {tag}
        </span>
      )}
      <h2 className="mb-[16px] text-[32px] leading-[38.4px] lg:text-5xl font-bold tracking-wide text-neutral-500">{title}</h2>
      <p className="text-neutral-300 mt-2 text-base lg:text-lg">{description}</p>
    </div>
  );
}

