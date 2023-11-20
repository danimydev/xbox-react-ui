export const GameCard = ({
  title,
  imgSrc,
}: {
  title: string,
  imgSrc: string,
}) => {
  return (
    <div
      className="relative border-4 border-hidden rounded-lg w-[200px] h-[220px] transition-all group hover:w-[260px] hover:h-[286px] hover:border-solid hover:border-secondary"
      style={{
        backgroundImage: `url('${imgSrc}')`,
        backgroundPosition: "top",
        backgroundSize: "cover"
      }}
    >
      <div className="group-hover:block hidden text-secondary bg-primary/90 bottom-0 absolute w-full px-2 py-4 rounded-b-lg">
        {title}
      </div>
    </div>
  );
}
