export const VideoSection = () => {
  return (
    <div className="bg-neutral-1 rounded-xl">
      <div className="absolute left-0 z-[-1] w-[100%] h-[286px] lg:h-[565px]"></div>
      <div className="flex justify-center items-center py-[42px]">
        <iframe
          src="https://player.vimeo.com/video/818198120?h=cd958ac4ba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="WorkPal Promo Video"
          className="w-[352px] h-[202px] lg:w-[840px] lg:h-[481px] rounded-[20px] lg:rounded-[25px]"
        ></iframe>
      </div>
    </div>
  );
};