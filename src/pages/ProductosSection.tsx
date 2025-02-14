import Carrusel from "../components/tsx/Carrusel";
import image from "../assets/images.jpeg";

export default function ProductosSection() {
  const productImages = [
    image,
    image,
    image,
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h2 className="text-center text-xl font-bold mb-12">Productos</h2>
      <Carrusel images={productImages} />
    </div>
  );
}