import ContactUsButton from "../buttons/ContactUsButton";
import Image from "next/image";
interface ServiceCardProps {
  title: string;
  description: string;
  logoURL: string;
}

export default function ServiceCard({ title, description, logoURL }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-t from-gray to-gray-mid p-6 rounded flex flex-col justify-center items-center w-72">
      <Image src={logoURL} width={240} height={240} alt={`${title} Image`} />
      <h3 className="text-center text-pearl text-lg font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-light">{description}</p>
      <div className="mt-4">
        <ContactUsButton />
      </div>
    </div>
  );
}