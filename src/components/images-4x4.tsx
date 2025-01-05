interface Image {
  id: number;
  src: string;
  title: string;
}

interface PropsImages {
  images: Image[];
}

export default function Images4x4({ images }: PropsImages) {
  return (
    <div className="grid grid-cols-4 gap-4 py-12 px-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col items-center bg-slate-800 rounded-md shadow-md overflow-hidden group"
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <p className="mt-2 text-white text-sm">{image.title}</p>
        </div>
      ))}
    </div>
  );
}
