import Image from "next/image";
import { notFound } from "next/navigation";

const workData = [
  {
    slug: "luna-launch",
    image: "/lunalaunch.svg",
    title: "Luna Launch",
    category: "UI/UX Design, Development",
    service: "Web Development",
    client: "Luna Corp",
    year: "2024",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "aether-arc",
    image: "/aetherarc.svg",
    title: "Aether Arc",
    category: "UI/UX Design, Development",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "nova-narrative",
    image: "/Novanarrative.svg",
    title: "Nova Narrative",
    category: "UI/UX Design, Development",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "spectrum-studio",
    image: "/Spectrumtudio.svg",
    title: "Spectrum Studio",
    category: "Web Design",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "prism-pulse",
    image: "/lunalaunch.svg",
    title: "Prism Pulse",
    category: "UI/UX Design",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "mosaic-motion",
    image: "/lunalaunch.svg",
    title: "Mosaic Motion",
    category: "Mobile App Development",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "mindscapes",
    image: "/lunalaunch.svg",
    title: "Word Play",
    category: "Marketing & SEO",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "word-play",
    image: "/lunalaunch.svg",
    title: "Word Play",
    category: "Marketing & SEO",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "story-craft",
    image: "/lunalaunch.svg",
    title: "Story Craft",
    category: "Web App Development",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
  {
    slug: "visionary",
    image: "/lunalaunch.svg",
    title: "Visionary",
    category: "Software Development",
    service: "Mobile App Development",
    client: "Aether Studios",
    year: "2023",
    overview:
      "        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    conclusion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ducimus earum, commodi laboriosam ad sunt, impedit dignissimos fuga vero quasi provident, molestiae cum odio consequuntur possimus aliquid. Veritatis rem excepturi id eveniet ipsum obcaecati ullam odit iure ad optio voluptates laboriosam, nemo dolor! Consequatur repellendus, tempore quam recusandae facilis quas rem omnis quos ducimus nobis magni, reprehenderit nam quisquam autem quia corporis neque delectus! Tempora unde tenetur minima facilis id praesentium! Nihil minus dignissimos nostrum voluptatem, sequi unde et impedit, omnis labore velit praesentium quae iusto obcaecati quas repellat, illo dolor maxime ut laboriosam ullam corporis quod ad inventore. Quod",
    extraImages: ["/aetherarc.svg", "/lunalaunch.svg"],
    conclusionimages: "/lunalaunch.svg",
  },
];

export default async function ProjectDetails({ params }) {
  const { projectdetails } = await params;
  const project = workData.find((work) => work.slug === projectdetails);

  if (!project) return notFound();

  return (
    <div className="px-[4%] py-10 space-y-5 md:space-y-8">
      <h2 className="text-[#202020] text-[32px] md:text-[48px] custombevietnam text-center">
        {project.title}
      </h2>

      {/* Project Info */}
      <div className="text-center text-[16px] md:text-[20px] text-[#6A6C71]">
        <p className="">
          <strong className="text-[#202020]">Service:</strong> {project.service}
        </p>
        <p className="">
          <strong className="text-[#202020]">Client:</strong> {project.client}
        </p>
        <p className="">
          <strong className="text-[#202020]">Year:</strong> {project.year}
        </p>
      </div>
      {/* Main Image */}
      <Image
        src={project.image}
        width={1000}
        height={500}
        alt={project.title}
        className="w-full h-[210px] md:h-[500px] rounded-2xl object-cover"
      />

      {/* Overview */}
      <div className="md:flex md:justify-between  md:py-10">
        <h2 className="text-[24px] md:text-[48px] md:w-[35%] py-2 md:pb-0">
          Overview
        </h2>

        <p className="text-[16px] md:text-[20px] md:w-[65%]">
          {project.overview}
        </p>
      </div>
      <div className="flex md:justify-between gap-4">
        {project.extraImages &&
          project.extraImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={1000}
              height={1000}
              alt={`Overview ${index + 1}`}
              className="w-[48%] md:w-[50%] h-[134px] md:h-[346px] rounded-2xl"
            />
          ))}
      </div>

      {/* Conclusion */}
      <div className="md:flex justify-between md:py-10">
        <h2 className="text-[24px] md:text-[48px] text-[#202020] md:w-[35%]">Conclusion</h2>
        <p className= "text-[16px] md:text-[20px] text-[#202020] md:w-[65%] py-3 md:py-0">
          {project.conclusion}
        </p>
      </div>

      <Image
        src={project.conclusionimages}
        width={800}
        height={400}
        alt="Conclusion"
        className="w-full h-full rounded-[20px]"
      />
    </div>
  );
}
