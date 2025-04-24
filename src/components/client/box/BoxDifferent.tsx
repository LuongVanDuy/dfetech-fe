export default function BoxDifferent({ title, description }: any) {
  return (
    <div className="p-4 background-trusted text-center rounded-lg">
      <h3 className="text-[76px] font-extrabold leading-[76px] text-white mb-5">
        {title}
      </h3>
      <p className="text-[#ADB5BD]">{description}</p>
    </div>
  );
}
