// eslint-disable-next-line react/prop-types
export default function Headline({ tag, title, description }) {
  return (
    <div className="headline flex max-w-[335px] flex-col items-center gap-4 text-center lg:max-w-[479px]">
      {tag && (
        <span className="inline-block rounded-full bg-additional-purple px-4 py-2 text-sm font-normal text-primary-500">
          {tag}
        </span>
      )}
      <h2 className="text-[32px] font-bold leading-[38.4px] tracking-wide text-neutral-500 lg:text-5xl lg:leading-[57.6px]">
        {title}
      </h2>
      <p className="text-base text-neutral-300 lg:text-lg">{description}</p>
    </div>
  );
}
