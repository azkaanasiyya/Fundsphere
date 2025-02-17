// eslint-disable-next-line react/prop-types
export default function Headline({ tag, title, description }) {
  return (
    <div className="headline flex flex-col items-center max-w-[335px] lg:max-w-[479px] text-center gap-4">
      {tag && (
        <span className="inline-block rounded-full bg-additional-purple px-4 py-2 text-sm font-normal text-primary-500">
          {tag}
        </span>
      )}
      <h2 className="text-[32px] leading-[38.4px] lg:text-5xl lg:leading-[57.6px] font-bold tracking-wide text-neutral-500">{title}</h2>
      <p className="text-neutral-300 text-base lg:text-lg">{description}</p>
    </div>
  );
}

