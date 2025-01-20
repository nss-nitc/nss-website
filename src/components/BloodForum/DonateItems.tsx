function DonateItems({ item }: { item: any }) {
  return (
    <div className="flex flex-col items-center justify-center pb-5 gap-5  px-5 lg:pb-0 w-full">
      <img className="flex " src={item.imgUrl} alt={item.imgAlt} />
      <p className="flex text-center pb-5 md:pb-20">{item.para}</p>
    </div>
  );
}

export default DonateItems;
